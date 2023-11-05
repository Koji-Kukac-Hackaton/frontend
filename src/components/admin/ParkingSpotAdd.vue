<template>
  {{ markers }}

  <GMapMap
    :center="{ lat: location.latitude, lng: location.longitude }"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 100%"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @dragend="console.log(m.position)"
    >
    </GMapMarker>
  </GMapMap>
</template>

<script>
export default {
  name: 'GMap',
  props: {
    parkingSpots: {
      type: Array,
      default: () => []
    }
  },
  computed: {},
  data() {
    return {
      openedMarkerID: null,
      location: '',
      nav: navigator.geolocation.getCurrentPosition(this.successLocation),
      markers: [
        {
          position: {
            lat: '',
            lng: ''
          }
        }
      ]
    }
  },
  methods: {
    successLocation(position) {
      this.markers[0].position = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    },
    handleDragEnd(m, index) {
      const newPosition = {
        lat: m.position.lat(),
        lng: m.position.lng()
      }

      this.markers[index].position = newPosition

      console.log('Marker dragged to: ', newPosition)
    }
  }
}
</script>

<style>
.vue-map-container {
  height: 100%;
}
</style>
