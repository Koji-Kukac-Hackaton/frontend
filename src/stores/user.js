import axios from 'axios'
const baseURL = import.meta.env.VITE_BACKEND_LINK

export const userModule = {
  state: {
    name: '',
    email: '',
    jwtToken: ''
  },
  getters: {
    isLoggedIn: (state) => !!state.jwtToken,
    userName: (state) => state.name,
    userEmail: (state) => state.email
  },
  mutations: {
    setUser(state, userData) {
      state.name = userData.name
      state.email = userData.email
      state.jwtToken = userData.jwtToken
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
        const response = await axios.post(`${baseURL}/login`, credentials)
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
    }
  }
}
