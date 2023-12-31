// src/services/WebSocketAPI.js
import { Client } from '@stomp/stompjs'

// WebSocket server endpoint
//const serverUrl = "https://codebooq-back-fa7f9a51e2d2.herokuapp.com/ws";
//const serverUrl = "http://localhost:8080/ws"
// Instantiate WebSocket connection and STOMP client
const ws = 'new SockJS(serverUrl)'
const client = new Client({
  webSocketFactory: () => ws,
  reconnectDelay: 5000
})

// ... existing imports and code

const WebSocketAPI = {
  connect(parkingSpotEventsCallback, priceCallback) {
    client.onConnect = () => {
      console.log('Connected to WebSocket')
      client.subscribe('/topic/parkingSpotEvents', parkingSpotEventsCallback)
      client.subscribe('/topic/price', priceCallback)
    }

    client.onStompError = (error) => {
      console.error('STOMP Error:', error)
    }

    client.onWebSocketClose = (event) => {
      console.log('WebSocket Closed:', event)
    }

    client.activate()
  },
  disconnect() {
    client.deactivate()
  }
}

export default WebSocketAPI
