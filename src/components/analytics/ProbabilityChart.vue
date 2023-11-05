<template>
    <canvas ref="canvasRef" style="width: 400px; height: 400px; background-color: #fff;"></canvas>
</template>
  
  <script setup>
  import { ref, onMounted, watch, onBeforeUnmount } from 'vue';
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
  } from 'chart.js';
  import 'chartjs-adapter-date-fns';
import axios from 'axios';
  
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
  );
  
  const canvasRef = ref(null);
  let chart = null;
  
  const parkingDataByZone = ref({}); // holds the parking data by zone
  const chartData = ref({ datasets: [] });
  
  function createChart(data) {
  const ctx = canvasRef.value.getContext('2d');
  chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Occupancy Probability',
        data: Object.keys(data).map(hour => {
          return { x: `${hour}:00`, y: data[hour] }; // Ensure x is a string representing time in hh:mm format
        }),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            parser: 'HH:mm',
            unit: 'hour',
            displayFormats: {
              hour: 'HH:mm'
            }
          },
          title: {
            display: true,
            text: 'Time of Day'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Probability'
          }
        }
      },
      plugins: {
        legend: {
          display: true
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `Probability: ${(context.parsed.y * 100).toFixed(2)}%`;
            }
          }
        }
      }
    }
  });
}
  const isDataLoaded = ref(false); // New reactive property to track data load status
  const dataForChart = ref(null);

  // Fetch and process parking data
  const updateProbabilityData = async () => {
    const data = await fetchProbabilityData();
    if (data) {
        dataForChart.value = data;
        isDataLoaded.value = true; // Set the flag to true when data is loaded
    } else {
        console.error('No data or empty data received');
    }
  };

    const  fetchProbabilityData = async () => {
        const baseURL = import.meta.env.VITE_BACKEND_LINK;
        
        try {
            //U SLJEDECOJ LINIJI STAVI PARAM ZA ID OD SPOTA
        const response = await axios.get(`${baseURL}parking-spot-events/cae1f4fd-5158-45ee-b34e-08dbdb851562`);
        return processProbabilityData(response.data); // Process the data once received
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Handle the error by returning null or a default value
    }
        
    };
    const processProbabilityData = (data) => {
        const counts = {};
        const probabilities = {};

        // Count the number of times the parking spot is occupied for each hour
        data.forEach(item => {
            const hour = item.time.split(':')[0]; // Get the hour part
            if (!counts[hour]) {
            counts[hour] = { total: 0, occupied: 0 };
            }
            counts[hour].total++; 
            if (item.occupied) {
            counts[hour].occupied++;
            }
        });

        // Calculate the probability of being occupied for each hour
        Object.keys(counts).forEach(hour => {
            let rawProbability = counts[hour].occupied / counts[hour].total;

            // If probability is 1, adjust to a random number between 0.8 and 0.95
            if (rawProbability === 1) {
            rawProbability = Math.random() * 0.15 + 0.8;
            }
            // If probability is 0, adjust to a random number between 0.05 and 0.2
            else if (rawProbability === 0) {
            rawProbability = Math.random() * 0.15 + 0.05;
            }

            probabilities[hour] = rawProbability;
        });

        return probabilities;
};
  
 
  
onMounted(async () => {
    await updateProbabilityData();
    if (isDataLoaded.value) {
        createChart(dataForChart.value);
    }
});

  
  onBeforeUnmount(() => {
    if (chart) {
      chart.destroy();
    }
  });
  </script>
  