<template>
    <div>
      <line-chart :chart-data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import moment from 'moment'
  
  export default {
    extends: Line,
    props: ['data'],
    data() {
      return {
        chartData: null,
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                unit: 'minute'
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    },
    mounted() {
      this.chartData = {
        datasets: [
          {
            label: 'ZONE1',
            data: this.processData(this.data, 'ZONE1'),
            borderColor: 'red',
            fill: false
          },
          {
            label: 'ZONE2',
            data: this.processData(this.data, 'ZONE2'),
            borderColor: 'blue',
            fill: false
          },
          // Repeat for other zones...
        ]
      }
      this.renderChart(this.chartData, this.chartOptions)
    },
    methods: {
      processData(data, zone) {
        return data
          .filter(item => item.parkingSpotZone === zone)
          .map(item => ({
            x: moment(item.timestamp),
            y: item.occupiedPercentage
          }))
      }
    }
  }
  </script>