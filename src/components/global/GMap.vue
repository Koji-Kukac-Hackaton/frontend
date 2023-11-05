<template>
  <GMapMap
    :center="{ lat: location.latitude, lng: location.longitude }"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 100%"
  >
    <GMapMarker
      :icon="{
        url: blueCircle,
        scaledSize: { width: 15, height: 15 },
        labelOrigin: { x: 0, y: 0 }
      }"
      :position="{ lat: location.latitude, lng: location.longitude }"
    />
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :icon="{
        url: m.occupied ? redCircle : greenCircle,
        scaledSize: { width: 10, height: 10 },
        labelOrigin: { x: 0, y: 0 }
      }"
      :position="m.position"
      :clickable="true"
      @click="openMarker(m.id)"
    >
      <GMapInfoWindow
        :closeclick="true"
        @closeclick="openMarker(null)"
        :opened="openedMarkerID === m.id"
      >
        <div>
          <p>{{ m.parkingSpotZone }}</p>
          <p>{{ parkingZonePrices[m.parkingSpotZone] }}€</p>
          <NButton ghost type="warning" @click="toggleOverlay">Occupancy Propability ></NButton>

          <NButton
            v-if="!m.occupied"
            ghost
            color="#0b61ab"
            @click="
              handleParkingDialog(m.id, m.parkingSpotZone, parkingZonePrices[m.parkingSpotZone])
            "
            >Reserve ></NButton
          >
        </div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
  <div v-if="isOverlayVisible" class="overlay" @click="toggleOverlay">
    <div class="content">
      <ProbabilityChart></ProbabilityChart>

      <NButton ghost type="warning" @click="isOverlayVisible = false">Close</NButton>
    </div>
  </div>
</template>

<script>
import { NButton } from 'naive-ui'
import redCircle from '../../assets/icons/red-circle-icon.svg'
import greenCircle from '../../assets/icons/green-circle-icon.svg'
import blueCircle from '../../assets/icons/blue-circle-icon.svg'
import { useMessage, useDialog } from 'naive-ui'
import axios from 'axios'
import ProbabilityChart from '../analytics/ProbabilityChart.vue'
export default {
  name: 'GMap',
  props: {
    parkingSpots: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    markers() {
      return this.parkingSpots.map((spot) => ({
        id: spot.id,
        occupied: spot.occupied,
        parkingSpotZone: spot.parkingSpotZone,
        position: {
          lat: spot.latitude,
          lng: spot.longitude
        }
      }))
    },
    parkingZonePrices() {
      return this.$store.getters.getParkingZonePrices
    },
    getJWT() {
      return this.$store.getters.getJWT
    }
  },
  data() {
    return {
      isOverlayVisible: false,
      openedMarkerID: null,
      parkingData: [],
      ModalID: '',
      location: '',
      redCircle: redCircle,
      greenCircle: greenCircle,
      blueCircle: blueCircle,
      message: useMessage(),
      dialog: useDialog(),
      nav: navigator.geolocation.getCurrentPosition(this.successLocation)
    }
  },
  methods: {
    successLocation(position) {
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    },
    toggleOverlay() {
      this.isOverlayVisible = !this.isOverlayVisible
    },
    openMarker(id) {
      this.openedMarkerID = id
    },
    openOccupancyChart(id) {
      this.ModalID = id
      this.showModal = true
    },
    handleParkingDialog(id, zone, price) {
      this.dialog.info({
        title: 'Reserve Parking',
        content: `Are you sure you want to reserve parking in ${zone} for the price of ${price}€?`,
        positiveText: 'Yes',
        negativeText: 'No',
        onPositiveClick: async () => {
          const baseURL = import.meta.env.VITE_BACKEND_LINK

          try {
            const data = {
              parkingSpotId: id,
              endH: 15,
              endM: 0
            }
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.getJWT}`

            const headers = {
              Authorization: `Bearer ${this.getJWT}`
            }

            const response = await axios.post(`${baseURL}parking-spot/reserve`, data, { headers })

            console.log(response.data)
          } catch (error) {
            console.error(error)
            throw error
          }
          this.message.success('Parking is reserved')
        },
        onNegativeClick: () => {
          this.message.error('Parking not reserved')
        }
      })
    },
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
  },
  async created() {
    await this.$store.dispatch('fetchParkingZonePrices')
  },
  components: { NButton, ProbabilityChart }
}
</script>

<style>
.vue-map-container {
  height: 100%;
}

.overlay {
  position: fixed; /* Fixed position to cover the whole screen */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* High z-index to ensure it's above other content */
}

/* Styles for the content inside the overlay */
.content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>
