<template>
  <NCard>
    <div class="filter-grid">
      <div>
        <NSpace>
          <NText>Show only free spaces</NText>
          <NSwitch v-model:value="freeSpace" />
        </NSpace>
      </div>
      <div>
        <NSpace vertical>
          <NText>Distance</NText>
          <NSlider v-model:value="valueDistance" :step="250" :max="6000" />
        </NSpace>
      </div>
      <div>
        <NSpace vertical>
          <NText>Price</NText>
          <NSlider v-model:value="valuePrice" :step="0.5" :max="5" />
        </NSpace>
      </div>
      <div>
        <NSpace vertical>
          <NText>Zone</NText>
          <NSpace>
            <NText
              class="zone-text"
              @click="pickedZone = 'ZONE1'"
              :class="{ 'zone-picked': pickedZone == 'ZONE1' }"
              >Zone 1</NText
            >
            <NText
              class="zone-text"
              @click="pickedZone = 'ZONE2'"
              :class="{ 'zone-picked': pickedZone == 'ZONE2' }"
              >Zone 2</NText
            >
            <NText
              class="zone-text"
              @click="pickedZone = 'ZONE3'"
              :class="{ 'zone-picked': pickedZone == 'ZONE3' }"
              >Zone 3</NText
            >
            <NText
              class="zone-text"
              @click="pickedZone = 'ZONE4'"
              :class="{ 'zone-picked': pickedZone == 'ZONE4' }"
              >Zone 4</NText
            >
            <NText class="zone-text" @click="pickedZone = 0">X</NText>
          </NSpace>
        </NSpace>
      </div>
    </div>
    <div class="btn-flex">
      <NButton color="#4470c8" @click="filter">Filter</NButton>
    </div>
  </NCard>
</template>

<script>
import { NButton, NCard, NSlider, NSpace, NSwitch } from 'naive-ui'

export default {
  name: 'ParkingSpotFilterComponent.vue',
  components: {
    NCard,
    NSpace,
    NSlider,
    NSwitch,
    NButton
  },
  computed: {
    reservation() {
      return this.$store.getters.getReservation
    },
    filterPrice() {
      return this.$store.getters.getFilterPrice
    },

    filterFreeSpace() {
      return this.$store.getters.getFilterFreeSpace
    },

    filterZone() {
      return this.$store.getters.getFilterZone
    },
    filterDistance() {
      return this.$store.getters.getFilterDistance
    }
  },
  data() {
    return {
      valueDistance: [0],
      valuePrice: [0, 5],
      freeSpace: false,

      pickedZone: 0,

      location: '',
      nav: navigator.geolocation.getCurrentPosition(this.successLocation)
    }
  },
  mounted() {
    this.valuePrice = this.filterPrice
    this.freeSpace = this.filterFreeSpace
    this.pickedZone = this.filterZone
    this.valueDistance = this.filterDistance
  },
  methods: {
    async filter() {
      const filters = {
        price: this.valuePrice,
        freeSpace: this.freeSpace,
        zone: this.pickedZone,
        filterDistance: this.valueDistance,
        filterDistanceLocation: this.location
      }

      this.$store.commit('setFilters', filters)
      this.$store.dispatch('fetchParkingSpots')
    },
    successLocation(position) {
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      }
    }
  }
}
</script>

<style>
.filter-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 1fr));
  width: 100%;
  gap: 8px;
}

.zone-text {
  border: 1px solid #4470c8;
  padding: 3px;
  border-radius: 3px;
  margin: 2px;
  cursor: pointer;
}

.zone-picked {
  background-color: #4470c8;
  color: white;
}

.btn-flex {
  display: flex;
  justify-content: flex-end;
}
</style>
