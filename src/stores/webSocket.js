import WebSocketAPI from '../services/WebSocketAPI.js'

// ... existing imports

export const webSocketModule = {
  state: {
    parkingSpotEvents: [],
    prices: [],
    isConnected: false
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.parkingSpotEvents.push(event)
    },
    ADD_PRICE(state, price) {
      state.prices.push(price)
    },
    SET_CONNECTION_STATUS(state, status) {
      state.isConnected = status
    }
  },
  actions: {
    connectWebSocket({ commit }) {
      WebSocketAPI.connect(
        (message) => {
          console.log(message.body)
          commit('ADD_EVENT', JSON.parse(message.body))
        },
        (message) => {
          console.log(message.body)
          commit('ADD_PRICE', JSON.parse(message.body))
        }
      )
      commit('SET_CONNECTION_STATUS', true)
    },
    disconnectWebSocket({ commit }) {
      WebSocketAPI.disconnect()
      commit('SET_CONNECTION_STATUS', false)
    }
  }
}
