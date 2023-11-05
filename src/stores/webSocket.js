import WebSocketAPI from '../services/WebSocketAPI.js';

export const webSocketModule = {
        state: {
          parkingSpotEvents: [],
          prices: [],
        },
        mutations: {
          ADD_EVENT(state, event) {
            state.parkingSpotEvents.push(event);
          },
          ADD_PRICE(state, price) {
            state.prices.push(price);
          }
        },
        actions: {
          connectWebSocket({ commit }) {
            WebSocketAPI.connect(
              message => {
                console.log(message.body);
                commit('ADD_EVENT', JSON.parse(message.body));
              },
              message => {
                console.log(message.body);
                commit('ADD_PRICE', JSON.parse(message.body));
              }
            );
          },
          disconnectWebSocket() {
            WebSocketAPI.disconnect();
          }
        }
      };
      