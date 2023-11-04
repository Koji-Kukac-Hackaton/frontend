<template>
  <GMapMap
    :center="{ lat: location.latitude, lng: location.longitude }"
    :zoom="13"
    map-type-id="terrain"
    style="width: 500px; height: 500px"
  >
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
          <p>Vodnikova ulica 10</p>
          <p>3.2€</p>
          <NButton>Reserve</NButton>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMapMap>
  {{ markers }}
</template>

<script>
import { NButton } from 'naive-ui'

export default {
  name: 'App',
  data() {
    return {
      openedMarkerID: null,
      location: '',
      redCircle: '../../assets/icons/red-circle-icon.svg',
      greenCircle: '../../assets/icons/green-circle-icon.svg',
      nav: navigator.geolocation.getCurrentPosition(this.successLocation),
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 45.80527,
            lng: 15.96668
          }
        }
      ]
    }
  },
  methods: {
    successLocation(position) {
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    },
    openMarker(id) {
      this.openedMarkerID = id
    }
  },
  mounted() {
    this.parkingSpots = [
      {
        id: '986d1c84-7b38-45f1-b117-08dbdb851562',
        latitude: 45.80528,
        longitude: 15.96649,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:46:58.6702925'
      },
      {
        id: '2b6f2fdc-f466-4065-b118-08dbdb851562',
        latitude: 45.80527,
        longitude: 15.96668,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T13:00:44.6703219'
      },
      {
        id: 'af327f8a-b8cf-4912-b119-08dbdb851562',
        latitude: 45.80525,
        longitude: 15.96701,
        parkingSpotZone: 'Zone1',
        occupied: true,
        occupiedTimestamp: '2023-11-04T12:59:25.6703303'
      },
      {
        id: '3bec8a94-b25b-4eaa-b11a-08dbdb851562',
        latitude: 45.80524,
        longitude: 15.9674,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:59:13.6703609'
      },
      {
        id: 'd8f6b4c9-76b9-41a5-b11b-08dbdb851562',
        latitude: 45.80525,
        longitude: 15.96761,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:59:35.6703777'
      },
      {
        id: '759cb6ce-508b-4ba5-b11c-08dbdb851562',
        latitude: 45.80525,
        longitude: 15.96789,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T13:00:15.6703919'
      },
      {
        id: '50b5cc04-0a13-4ed0-b11d-08dbdb851562',
        latitude: 45.80526,
        longitude: 15.96808,
        parkingSpotZone: 'Zone1',
        occupied: true,
        occupiedTimestamp: '2023-11-04T13:00:32.6703955'
      },
      {
        id: 'bd070121-5644-4575-b11e-08dbdb851562',
        latitude: 45.80529,
        longitude: 15.96831,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:59:17.6704142'
      },
      {
        id: '8974eabd-5c38-4a3e-b11f-08dbdb851562',
        latitude: 45.80529,
        longitude: 15.96856,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T14:00:32.1600318'
      },
      {
        id: '2412b0c8-9701-4c1e-b120-08dbdb851562',
        latitude: 45.80529,
        longitude: 15.96884,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:48:49.6704436'
      },
      {
        id: '02c2335a-a124-4e05-b121-08dbdb851562',
        latitude: 45.8053,
        longitude: 15.96907,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:59:49.6704646'
      },
      {
        id: '3f862779-69b2-477a-b122-08dbdb851562',
        latitude: 45.80512,
        longitude: 15.96917,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T13:00:53.6704747'
      },
      {
        id: '561da2a1-7676-4b1a-b123-08dbdb851562',
        latitude: 45.80491,
        longitude: 15.96918,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T13:00:09.6704795'
      },
      {
        id: 'bbaba8c1-a1f6-4b2c-b124-08dbdb851562',
        latitude: 45.80478,
        longitude: 15.96918,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:59:08.670492'
      },
      {
        id: 'f956da35-89ae-4492-b125-08dbdb851562',
        latitude: 45.80465,
        longitude: 15.96918,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:58:28.6705012'
      },
      {
        id: '2c62e064-3159-4338-b126-08dbdb851562',
        latitude: 45.80455,
        longitude: 15.96917,
        parkingSpotZone: 'Zone1',
        occupied: false,
        occupiedTimestamp: '2023-11-04T12:59:44.6705159'
      }
    ]
    this.markers = this.parkingSpots.map((spot) => ({
      id: spot.id,
      occupied: spot.occupied,
      position: {
        lat: spot.latitude,
        lng: spot.longitude
      }
    }))
  },
  components: { NButton }
}
</script>
