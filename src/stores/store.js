import Vuex from 'vuex';
import { parkingSpotsModule } from './parkingSpot';


export default new Vuex.Store({
  modules: {
    parkingSpots: parkingSpotsModule
  }
});
