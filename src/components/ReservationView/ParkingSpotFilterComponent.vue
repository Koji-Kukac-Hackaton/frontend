<template>
  <NCard>
    <div class="filter-grid">
      <div>
        <NSpace>
          <NText>Show only free spaces</NText>
          <NSwitch v-model:value="active" />
        </NSpace>
      </div>
      <div>
        <NSpace vertical>
          <NText>Distance</NText>
          <NSlider v-model:value="valueDistance" :step="1" />
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
            <NButton>Zone 1</NButton>
            <NButton>Zone 2</NButton>
            <NButton>Zone 3</NButton>
            <NButton>Zone 4</NButton>
          </NSpace>
        </NSpace>
      </div>
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
    NButton,
    NSwitch
  },
  computed: {},
  data() {
    return {
      valueDistance: [0],
      valuePrice: [0],
      active: false
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
</style>
