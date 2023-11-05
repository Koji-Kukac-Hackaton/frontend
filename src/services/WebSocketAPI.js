// src/services/WebSocketAPI.js
import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client/dist/sockjs.min.js'

// WebSocket server endpoint
//const serverUrl = "https://codebooq-back-fa7f9a51e2d2.herokuapp.com/ws";
const serverUrl = 'http://localhost:8080/ws'
// Instantiate WebSocket connection and STOMP client
const ws = new SockJS(serverUrl)
const client = new Client({
  webSocketFactory: () => ws,
  reconnectDelay: 5000
})

const WebSocketAPI = {
  // Function to initiate the WebSocket connection
  connect(callback) {
    // Define what happens when the STOMP client connects
    client.onConnect = () => {
      // Subscribe to the topic, and invoke the callback function on message receipt
      client.subscribe('/topic/parkingSpotEvents', callback)
    }
    // Activate the STOMP client
    client.activate()
  },
  // Function to disconnect the WebSocket connection
  disconnect() {
    client.deactivate()
  }
}

export default WebSocketAPI
