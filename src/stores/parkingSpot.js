import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_LINK

export const parkingSpotsModule = {
  state: {
    parkingSpots: [],

    parkingZonePrices: {},

    //filters
    filterPrice: 5,
    filterFreeSpace: false,
    filterZone: 0,
    filterDistance: 0
  },
  getters: {
    allParkingSpots: (state) => state.parkingSpots,

    getParkingZonePrices: (state) => state.parkingZonePrices,

    getFilterPrice: (state) => state.filterPrice,
    getFilterFreeSpace: (state) => state.filterFreeSpace,
    getFilterZone: (state) => state.filterZone,
    getFilterDistance: (state) => state.filterDistance
  },
  mutations: {
    setParkingSpots(state, parkingSpots) {
      state.parkingSpots = parkingSpots
    },
    setParkingZonePrices(state, parkingZonePrices) {
      state.parkingZonePrices = parkingZonePrices
    },
    setFilters(state, filters) {
      state.filterPrice = filters.price
      state.filterFreeSpace = filters.freeSpace
      state.filterZone = filters.zone
      state.filterDistance = filters.filterDistance
    }
  },
  actions: {
    async fetchParkingSpots({ state, commit }) {
      let parkingSpots = [];
      try {
        const response = await axios.get(`${baseURL}parking-spot/getAll`)
        parkingSpots = response.data
      } catch (error) {
        console.error(error)
      }
      if (state.filterFreeSpace) {
        parkingSpots = parkingSpots.filter((spot) => !spot.occupied)
      }

      if (state.filterZone) {
        parkingSpots = parkingSpots.filter((spot) => spot.parkingSpotZone === state.filterZone)
      }

      if (state.filterPrice != 5) {
        parkingSpots = parkingSpots.filter((spot) => {
          let zonePrice = state.parkingZonePrices[spot.parkingSpotZone]
          return zonePrice && zonePrice < state.filterPrice
        })
      }
      commit('setParkingSpots', parkingSpots)
    },
    async fetchParkingZonePrices({ commit }) {
      let parkingZonePrices = { ZONE1: 4.25, ZONE2: 3.34, ZONE3: 2.25, ZONE4: 1.31 }

      let updatedParkingZonePrices = Object.keys(parkingZonePrices).reduce((newObj, key) => {
        const newKey = key.charAt(0) + key.slice(1).toLowerCase()
        newObj[newKey] = parkingZonePrices[key]
        return newObj
      }, {})

      commit('setParkingZonePrices', updatedParkingZonePrices)
    }
  }
}
