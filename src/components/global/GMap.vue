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
          <NSpace vertical>
            <NButton ghost type="warning" @click="toggleOverlay">Occupancy Propability ></NButton>

            <NButton
              v-if="!m.occupied"
              ghost
              color="#0b61ab"
              @click="
                handleParkingDialog(
                  m.id,
                  m.parkingSpotZone,
                  parkingZonePrices[m.parkingSpotZone],
                  m.position
                )
              "
              >Reserve ></NButton
            ></NSpace
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
import { NButton, NSpace } from 'naive-ui'
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
    handleParkingDialog(id, zone, price, position) {
      this.dialog.info({
        title: 'Reserve Parking',
        content: `Are you sure you want to reserve parking in ${zone} for the price of ${price}€?`,
        positiveText: 'Yes',
        negativeText: 'No',
        onPositiveClick: async () => {
          let reservation = { id, zone, price, position }

          await this.$store.dispatch('setReservation', reservation)

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
            this.message.success('Parking is reserved')
          } catch (error) {
            console.error(error)
            throw error
          }
        },
        onNegativeClick: () => {
          this.message.error('Parking not reserved')
        }
      })
    }
  },
  async created() {
    await this.$store.dispatch('fetchParkingZonePrices')
  },
  components: { NButton, ProbabilityChart, NSpace }
}
</script>

<style>
.vue-map-container {
  height: 100%;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
</style>
