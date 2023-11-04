import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import './assets/main.css'
import store from './stores/store.js' // Make sure the path points to where your store.js file is

const app = createApp(App)

app.use(createPinia())

app.use(Vuex)
app.use(router)
app.use(store)

app.use(VueGoogleMaps, {
  load: {
    key: import.meta.env.VITE_GOOGLE_API_KEY
  }
})

app.mount('#app')
