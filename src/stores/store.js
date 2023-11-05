import Vuex from 'vuex'
import { parkingSpotsModule } from './parkingSpot'
import { userModule } from './user'


export default new Vuex.Store({
  modules: {
    parkingSpots: parkingSpotsModule,
    user: userModule
  }
})
