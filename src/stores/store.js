import Vuex from 'vuex'
import { parkingSpotsModule } from './parkingSpot'
import { webSocketModule } from './webSocket'

export default new Vuex.Store({
  modules: {
    parkingSpots: parkingSpotsModule,
    webSocket: webSocketModule
  }
})
