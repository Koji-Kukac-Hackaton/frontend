// src/services/WebSocketAPI.js
import { Client } from '@stomp/stompjs'
import SockJS from 'sockjs-client/dist/sockjs.min.js'

// WebSocket server endpoint
const serverUrl = "https://codebooq-back-fa7f9a51e2d2.herokuapp.com/ws";
//const serverUrl = "http://localhost:8080/ws"
// Instantiate WebSocket connection and STOMP client
const ws = new SockJS(serverUrl)
const client = new Client({
  webSocketFactory: () => ws,
  reconnectDelay: 5000
})

const WebSocketAPI = {
        connect(parkingSpotEventsCallback, priceCallback) {
          client.onConnect = () => {
            client.subscribe('/topic/parkingSpotEvents', parkingSpotEventsCallback);
            client.subscribe('/topic/price', priceCallback);
          };
          client.activate();
        },
        disconnect() {
          client.deactivate();
        }
};
      
export default WebSocketAPI;
