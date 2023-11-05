<template>
  <div class="container">
    <OccupancyChart></OccupancyChart>
  </div>
</template>

<script>
import OccupancyChart from '../components/analytics/OccupancyChart.vue'
export default {
  components: {
    OccupancyChart
  },
  data() {
    return {
      parkingData: []
    }
  },
  created() {
    this.fetchParkingData()
  },
  methods: {
    fetchParkingData() {
      const baseURL = import.meta.env.VITE_BACKEND_LINK

      async function getParkingData() {
        const response = await fetch(`${baseURL}demand-history`)
        const data = await response.json()
        return data
      }
      getParkingData().then((data) => {
        this.parkingData = this.processParkingData(data)
      })
    },
    processParkingData(rawData) {
      // Object to hold the data structured by zone and hour
      let occupancyByZoneAndHour = {
        ZONE1: {},
        ZONE2: {},
        ZONE3: {},
        ZONE4: {}
      }

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

      return occupancyByZoneAndHour
    }
  }
}
</script>

<style scoped>
.robabilityChart-container {
  height: 60%;
  width: 60%;
}
.container {
  margin-top: 60px;
}
</style>
