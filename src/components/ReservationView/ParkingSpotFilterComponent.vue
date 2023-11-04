<template>
  <NCard>
    <div class="filter-grid">
      <div>
        <NSpace>
          <NText>Show only free spaces</NText>
          <NSwitch :color="black" v-model:value="freeSpace" />
        </NSpace>
      </div>
      <div>
        <NSpace vertical>
          <NText>Distance</NText>
          <NSlider :color="black" v-model:value="valueDistance" :step="1" />
        </NSpace>
      </div>
      <div>
        <NSpace vertical>
          <NText>Price</NText>
          <NSlider v-model:value="valuePrice" :step="1" />
        </NSpace>
      </div>
      <div>
        <NSpace vertical>
          <NText>Zone</NText>
          <NSpace>
            <NText
              class="zone-text"
              @click="pickedZone = 'Zone1'"
              :class="{ 'zone-picked': pickedZone == 'Zone1' }"
              >Zone 1</NText
            >
            <NText
              class="zone-text"
              @click="pickedZone = 'Zone2'"
              :class="{ 'zone-picked': pickedZone == 'Zone2' }"
              >Zone 2</NText
            >
            <NText
              class="zone-text"
              @click="pickedZone = 'Zone3'"
              :class="{ 'zone-picked': pickedZone == 'Zone3' }"
              >Zone 3</NText
            >
            <NText
              class="zone-text"
              @click="pickedZone = 'Zone4'"
              :class="{ 'zone-picked': pickedZone == 'Zone4' }"
              >Zone 4</NText
            >
            <NText class="zone-text" @click="pickedZone = 0">X</NText>
          </NSpace>
        </NSpace>
      </div>
    </div>
    <NButton color="#4470c8" @click="filter">Filter</NButton>
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
      valuePrice: [0],
      freeSpace: false,

      pickedZone: 0
    }
  },
  mounted() {
    this.valuePrice = this.filterPrice
    this.freeSpace = this.filterFreeSpace
    this.pickedZone = this.filterZone
    this.valueDistance = this.filterDistance
  },
  methods: {
    filter() {
      const filters = {
        price: this.valuePrice,
        freeSpace: this.freeSpace,
        zone: this.pickedZone,
        filterDistance: this.valueDistance
      }

      this.$store.commit('setFilters', filters)
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
</style>
