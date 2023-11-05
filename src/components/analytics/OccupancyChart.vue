<template>
  <canvas ref="canvasRef" style="width: 400px; height: 400px; background-color: #fff"></canvas>
</template>

<script setup>
import { ref, onMounted, watch, onBeforeUnmount } from 'vue'
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
  TimeSeriesScale,
  LineController
} from 'chart.js'
import 'chartjs-adapter-date-fns'
import axios from 'axios'

// Register the components for Chart.js
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
  TimeSeriesScale,
  LineController
)

const canvasRef = ref(null)
let chart = null

const parkingDataByZone = ref({}) // holds the parking data by zone
const chartData = ref({ datasets: [] })

const createChart = () => {
  if (chart) {
    chart.destroy()
  }

  const ctx = canvasRef.value.getContext('2d')
  chart = new Chart(ctx, {
    type: 'line',
    data: chartData.value,
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'hour'
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }
  })
}
const isDataLoaded = ref(false) // New reactive property to track data load status

// Fetch and process parking data
const updateParkingData = async () => {
  const data = await fetchParkingData()
  if (data) {
    parkingDataByZone.value = data
    isDataLoaded.value = true // Set the flag to true when data is loaded
  } else {
    console.error('No data or empty data received')
  }
}

const fetchParkingData = async () => {
  const baseURL = import.meta.env.VITE_BACKEND_LINK

  try {
    const response = await axios.get(`${baseURL}demand-history`)
    return processParkingData(response.data) // Process the data once received
  } catch (error) {
    console.error('Error fetching data:', error)
    return null // Handle the error by returning null or a default value
  }
}
const processParkingData = (rawData) => {
  // Object to hold the data structured by zone and hour
  let occupancyByZoneAndHour = {
    ZONE1: {},
    ZONE2: {},
    ZONE3: {},
    ZONE4: {}
  }
  const colors = ['red', 'blue', 'green', 'purple'] // Add more colors if you have more than 4 zones

  // Initialize the structure for each hour in each zone
  for (let zone in occupancyByZoneAndHour) {
    for (let hour = 0; hour < 24; hour++) {
      occupancyByZoneAndHour[zone][hour] = { sum: 0, count: 0, average: 0 }
    }
  }

  // Process each data entry
  rawData.forEach((item) => {
    // Extract the hour from the timestamp, and adjust if necessary
    let date = new Date(item.timestamp)
    let hour = date.getMinutes()
    let minute = date.getMinutes()
    if (minute >= 30) {
      hour = minute - 30
    }

    // Accumulate data for the specific zone and hour
    let zoneData = occupancyByZoneAndHour[item.parkingSpotZone][hour]
    zoneData.sum += item.occupiedPercentage
    zoneData.count++
  })

  // Calculate the average for each hour in each zone
  for (let zone in occupancyByZoneAndHour) {
    for (let hour in occupancyByZoneAndHour[zone]) {
      let zoneHourData = occupancyByZoneAndHour[zone][hour]
      if (zoneHourData.count > 0) {
        zoneHourData.average = zoneHourData.sum / zoneHourData.count
      }
    }
  }

  const datasets = Object.keys(occupancyByZoneAndHour).map((zone, index) => {
    const color = colors[index % colors.length]
    const dataPoints = Object.keys(occupancyByZoneAndHour[zone]).map((hour) => {
      const baseDate = new Date() // Using current date, or set a specific date if needed
      baseDate.setHours(hour, 0, 0, 0) // Set the hour, and reset minutes, seconds, and milliseconds

      return {
        x: new Date().setHours(hour, 0, 0, 0),
        y: occupancyByZoneAndHour[zone][hour].average // The average occupancy for that hour
      }
    })

    return {
      label: `Zone ${zone}`,
      data: dataPoints,
      borderColor: color, // Using the color variable now
      fill: false
    }
  })

  return datasets
}

// Watch for changes in parkingDataByZone to update the chart
watch([parkingDataByZone, isDataLoaded], ([newParkingDataByZone, loaded]) => {
  if (!loaded) {
    return
  }
  // Check if newParkingDataByZone is an object
  if (newParkingDataByZone && typeof newParkingDataByZone === 'object') {
    const datasets = []
    const colors = ['red', 'blue', 'green', 'purple'] // colors for the lines

    Object.keys(newParkingDataByZone).forEach((zone, index) => {
      // Make sure the zone data is not undefined or null
      if (newParkingDataByZone[zone]) {
        const data = Object.keys(newParkingDataByZone[zone]).map((hour) => ({
          x: hour,
          y: newParkingDataByZone[zone][hour].average
        }))

        datasets.push({
          label: zone,
          data: data,
          borderColor: colors[index],
          fill: false
        })
      }
    })

    chartData.value = { datasets: newParkingDataByZone }
    console.log(chartData.value)
    createChart()
  } else {
    // Handle the case where newParkingDataByZone is not an object
    console.error('newParkingDataByZone is null or undefined')
  }
})

onMounted(async () => {
  await updateParkingData()
  // The chart should only be created after the data is loaded
  if (isDataLoaded.value) {
    createChart()
  }
})

//   onMounted(async () => {
//   await updateParkingData();
//   nextTick(() => {
//     createChart();
//   });
// });

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy()
  }
})
</script>
