import WebSocketAPI from '../services/WebSocketAPI.js'

export const webSocketModule = {
  state: {
    parkingSpotEvents: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.parkingSpotEvents.push(event)
    }
  },
  actions: {
    connectWebSocket({ commit }) {
      WebSocketAPI.connect((message) => {
        commit('ADD_EVENT', JSON.parse(message.body))
      })
    },
    disconnectWebSocket() {
      WebSocketAPI.disconnect()
    }
  }
}
