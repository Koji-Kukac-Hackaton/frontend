import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_LINK

export const userModule = {
  state: {
    name: '',
    email: '',
    reservation: {},
    showReservationPopup: false,
    jwtToken: JSON.parse(localStorage.getItem('token'))
  },
  getters: {
    isLoggedIn: (state) => !!state.jwtToken,
    userName: (state) => state.name,
    userEmail: (state) => state.email,
    getReservation: (state) => state.reservation,
    showReservationPopup: (state) => state.showReservationPopup,

    getJWT: (state) => state.jwtToken
  },
  mutations: {
    setUser(state, userData) {
      state.name = userData.name
      state.email = userData.email
      state.jwtToken = userData.jwtToken
    },
    setReservation(state, reservation) {
      state.reservation = reservation
    },
    setShowReservationPopup(state, showReservationPopup) {
      state.showReservationPopup = showReservationPopup
    },
    clearUser(state) {
      state.name = ''
      state.email = ''
      state.jwtToken = ''
    }
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        console.log(credentials)
        const response = await axios.post(`${baseURL}security/login`, credentials)
        console.log(response.data)

        const userData = {
          email: credentials.email,
          jwtToken: response.data
        }

        localStorage.setItem('token', JSON.stringify(userData.jwtToken))

        commit('setUser', userData)
        axios.defaults.headers.common['Authorization'] = `Bearer ${userData.jwtToken}`
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async register({ commit }, credentials) {
      try {
        const response = await axios.post(`${baseURL}security/register`, credentials)
        const userData = {
          name: response.data.name,
          email: response.data.email,
          jwtToken: response.data.jwtToken
        }
        commit('setUser', userData)
        axios.defaults.headers.common['Authorization'] = `Bearer ${userData.jwtToken}`
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    async logout({ commit }) {
      commit('clearUser')
      delete axios.defaults.headers.common['Authorization']
    },
    setReservation({ commit }, reservation) {
      commit('setReservation', reservation)
    }
  }
}
