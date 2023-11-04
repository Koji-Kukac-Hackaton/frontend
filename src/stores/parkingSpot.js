export const parkingSpotsModule = {
  state: {
    parkingSpots: []
  },
  getters: {
    allParkingSpots: state => state.parkingSpots
  },
  mutations: {
    setParkingSpots(state, parkingSpots) {
      state.parkingSpots = parkingSpots;
    }
  },
  actions: {
    fetchParkingSpots({ commit }) {
     let parkingSpots=[{
        "id": "986d1c84-7b38-45f1-b117-08dbdb851562",
        "latitude": 45.80528,
        "longitude": 15.96649,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:00.7535561"
      },
      {
        "id": "2b6f2fdc-f466-4065-b118-08dbdb851562",
        "latitude": 45.80527,
        "longitude": 15.96668,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:53.7535586"
      },
      {
        "id": "af327f8a-b8cf-4912-b119-08dbdb851562",
        "latitude": 45.80525,
        "longitude": 15.96701,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:16.7535769"
      },
      {
        "id": "3bec8a94-b25b-4eaa-b11a-08dbdb851562",
        "latitude": 45.80524,
        "longitude": 15.9674,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:51.7535864"
      },
      {
        "id": "d8f6b4c9-76b9-41a5-b11b-08dbdb851562",
        "latitude": 45.80525,
        "longitude": 15.96761,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:20.7535963"
      },
      {
        "id": "759cb6ce-508b-4ba5-b11c-08dbdb851562",
        "latitude": 45.80525,
        "longitude": 15.96789,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:52.7535976"
      },
      {
        "id": "50b5cc04-0a13-4ed0-b11d-08dbdb851562",
        "latitude": 45.80526,
        "longitude": 15.96808,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:18.7536053"
      },
      {
        "id": "bd070121-5644-4575-b11e-08dbdb851562",
        "latitude": 45.80529,
        "longitude": 15.96831,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:48.753613"
      },
      {
        "id": "8974eabd-5c38-4a3e-b11f-08dbdb851562",
        "latitude": 45.80529,
        "longitude": 15.96856,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:05:34.753625"
      },
      {
        "id": "2412b0c8-9701-4c1e-b120-08dbdb851562",
        "latitude": 45.80529,
        "longitude": 15.96884,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:35.7536329"
      },
      {
        "id": "02c2335a-a124-4e05-b121-08dbdb851562",
        "latitude": 45.8053,
        "longitude": 15.96907,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:18:49.753649"
      },
      {
        "id": "3f862779-69b2-477a-b122-08dbdb851562",
        "latitude": 45.80512,
        "longitude": 15.96917,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:39.7536564"
      },
      {
        "id": "561da2a1-7676-4b1a-b123-08dbdb851562",
        "latitude": 45.80491,
        "longitude": 15.96918,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:14.753666"
      },
      {
        "id": "bbaba8c1-a1f6-4b2c-b124-08dbdb851562",
        "latitude": 45.80478,
        "longitude": 15.96918,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:21:47.7536707"
      },
      {
        "id": "f956da35-89ae-4492-b125-08dbdb851562",
        "latitude": 45.80465,
        "longitude": 15.96918,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:18:10.753678"
      },
      {
        "id": "2c62e064-3159-4338-b126-08dbdb851562",
        "latitude": 45.80455,
        "longitude": 15.96917,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:53.7536797"
      },
      {
        "id": "c17f8978-7c99-4a32-b127-08dbdb851562",
        "latitude": 45.80446,
        "longitude": 15.9692,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:55.7536892"
      },
      {
        "id": "3e905b3b-b20b-4f28-b128-08dbdb851562",
        "latitude": 45.80437,
        "longitude": 15.96921,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:55.7536976"
      },
      {
        "id": "81216c90-a30e-45c9-b129-08dbdb851562",
        "latitude": 45.80717,
        "longitude": 15.96789,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:49.7536999"
      },
      {
        "id": "a5369fc4-dc3d-48e7-b12a-08dbdb851562",
        "latitude": 45.80717,
        "longitude": 15.96808,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:26.753715"
      },
      {
        "id": "34b4c9b1-3113-4e42-b12b-08dbdb851562",
        "latitude": 45.80718,
        "longitude": 15.96834,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:39.753724"
      },
      {
        "id": "e56d1e63-37f3-4b45-b12c-08dbdb851562",
        "latitude": 45.80717,
        "longitude": 15.96858,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:18.753733"
      },
      {
        "id": "53d1dc08-9649-4546-b12d-08dbdb851562",
        "latitude": 45.80716,
        "longitude": 15.96878,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:04.7537416"
      },
      {
        "id": "a7dfc1c0-9920-45a6-b12e-08dbdb851562",
        "latitude": 45.80716,
        "longitude": 15.96898,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:08.7537454"
      },
      {
        "id": "02a54315-68ea-4255-b12f-08dbdb851562",
        "latitude": 45.80716,
        "longitude": 15.96913,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:14.7537461"
      },
      {
        "id": "5826fd0d-7f72-4609-b130-08dbdb851562",
        "latitude": 45.80704,
        "longitude": 15.96913,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:22.7537555"
      },
      {
        "id": "ebde6830-17ed-4750-b131-08dbdb851562",
        "latitude": 45.80687,
        "longitude": 15.96915,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:19:39.753768"
      },
      {
        "id": "8fa20b6d-3e29-4a75-b132-08dbdb851562",
        "latitude": 45.80675,
        "longitude": 15.96915,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:28.7537709"
      },
      {
        "id": "69aa60b6-5bb5-4bad-b133-08dbdb851562",
        "latitude": 45.80663,
        "longitude": 15.96914,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:19:15.7537812"
      },
      {
        "id": "93b273e3-d8dc-40ad-b134-08dbdb851562",
        "latitude": 45.80652,
        "longitude": 15.96915,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:14:12.7537922"
      },
      {
        "id": "97e025b5-a909-4823-b135-08dbdb851562",
        "latitude": 45.80639,
        "longitude": 15.96914,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:57.7538013"
      },
      {
        "id": "521543b0-654e-4f81-b136-08dbdb851562",
        "latitude": 45.80627,
        "longitude": 15.96914,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:16.7538172"
      },
      {
        "id": "ed1573a1-23b8-427e-b137-08dbdb851562",
        "latitude": 45.8061,
        "longitude": 15.96913,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:20.7538325"
      },
      {
        "id": "3b7ca0ea-5193-46d4-b138-08dbdb851562",
        "latitude": 45.80595,
        "longitude": 15.96914,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:59.7538351"
      },
      {
        "id": "aed4cb5d-fb39-40cb-b139-08dbdb851562",
        "latitude": 45.80583,
        "longitude": 15.96914,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:48.7538458"
      },
      {
        "id": "bd6b60ad-7d81-40cc-b13a-08dbdb851562",
        "latitude": 45.80567,
        "longitude": 15.96916,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:53.7538574"
      },
      {
        "id": "fa8de515-80b9-4c7f-b13b-08dbdb851562",
        "latitude": 45.80719,
        "longitude": 15.97077,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:22:14.7538715"
      },
      {
        "id": "fd8c0e3c-12e7-413d-b13c-08dbdb851562",
        "latitude": 45.8072,
        "longitude": 15.97058,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:09.7538848"
      },
      {
        "id": "53c038fd-a032-450c-b13d-08dbdb851562",
        "latitude": 45.8072,
        "longitude": 15.97036,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:17:09.7538947"
      },
      {
        "id": "e947dff9-9549-4477-b13e-08dbdb851562",
        "latitude": 45.8072,
        "longitude": 15.97015,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:10.7539031"
      },
      {
        "id": "a9f6c3a9-647d-4559-b13f-08dbdb851562",
        "latitude": 45.80719,
        "longitude": 15.96993,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:25.7539058"
      },
      {
        "id": "9a6c859f-d26b-492d-b140-08dbdb851562",
        "latitude": 45.80718,
        "longitude": 15.96976,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:12:27.7539199"
      },
      {
        "id": "a4288b0f-1c2f-4df3-b141-08dbdb851562",
        "latitude": 45.80719,
        "longitude": 15.96951,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:49.7539224"
      },
      {
        "id": "886b3599-1aba-4ff6-b142-08dbdb851562",
        "latitude": 45.80707,
        "longitude": 15.9695,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:17:31.7539385"
      },
      {
        "id": "5be8ba01-83b6-464d-b143-08dbdb851562",
        "latitude": 45.80689,
        "longitude": 15.9695,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:01.7539399"
      },
      {
        "id": "858d95ca-c1e3-4253-b144-08dbdb851562",
        "latitude": 45.80677,
        "longitude": 15.96949,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:02.7539472"
      },
      {
        "id": "176afb14-7f84-40a6-b145-08dbdb851562",
        "latitude": 45.80663,
        "longitude": 15.96949,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:06.7539483"
      },
      {
        "id": "ec066a44-49d7-41f5-b146-08dbdb851562",
        "latitude": 45.80649,
        "longitude": 15.9695,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:52.7539505"
      },
      {
        "id": "298236a4-b03d-41e8-b147-08dbdb851562",
        "latitude": 45.80633,
        "longitude": 15.9695,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:41.7539672"
      },
      {
        "id": "d77db467-53f0-4c86-b148-08dbdb851562",
        "latitude": 45.80621,
        "longitude": 15.96948,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:16.7539854"
      },
      {
        "id": "5fb1a82b-8f83-4784-b149-08dbdb851562",
        "latitude": 45.80609,
        "longitude": 15.96948,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:23:09.7540004"
      },
      {
        "id": "3974b3d9-3118-495b-b14a-08dbdb851562",
        "latitude": 45.80541,
        "longitude": 15.96995,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:16.7540037"
      },
      {
        "id": "5414deff-306c-40d8-b14b-08dbdb851562",
        "latitude": 45.80538,
        "longitude": 15.96972,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:06.7540258"
      },
      {
        "id": "3b81da48-57ff-432c-b14c-08dbdb851562",
        "latitude": 45.80538,
        "longitude": 15.96953,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:26.7540289"
      },
      {
        "id": "3e188660-0c30-4521-b14d-08dbdb851562",
        "latitude": 45.80529,
        "longitude": 15.96949,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:21.7540435"
      },
      {
        "id": "ed98e3ea-a1ee-499a-b14e-08dbdb851562",
        "latitude": 45.80707,
        "longitude": 15.97082,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:48.7540468"
      },
      {
        "id": "bde3a3f9-fde8-4d10-b14f-08dbdb851562",
        "latitude": 45.807,
        "longitude": 15.97081,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:22.7540504"
      },
      {
        "id": "6ca6d5ab-9808-490b-b150-08dbdb851562",
        "latitude": 45.80691,
        "longitude": 15.97081,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:08.7540586"
      },
      {
        "id": "3093ba12-a1f2-42aa-b151-08dbdb851562",
        "latitude": 45.80682,
        "longitude": 15.9708,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:38.7540748"
      },
      {
        "id": "b03c43a1-927f-4244-b152-08dbdb851562",
        "latitude": 45.80721,
        "longitude": 15.97107,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:20.7540841"
      },
      {
        "id": "69d505b3-8b4d-4c8b-b153-08dbdb851562",
        "latitude": 45.80713,
        "longitude": 15.9711,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:18:35.7540884"
      },
      {
        "id": "a3d30b88-3023-4f8e-b154-08dbdb851562",
        "latitude": 45.80707,
        "longitude": 15.97111,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:37.754091"
      },
      {
        "id": "df25d08c-346e-480a-b155-08dbdb851562",
        "latitude": 45.80696,
        "longitude": 15.97111,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:25.7540992"
      },
      {
        "id": "f7c8cfbf-2af8-474f-b156-08dbdb851562",
        "latitude": 45.80687,
        "longitude": 15.97112,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:01.7541008"
      },
      {
        "id": "8d4ad9a2-6f87-4e28-b157-08dbdb851562",
        "latitude": 45.80645,
        "longitude": 15.97114,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:54.7541047"
      },
      {
        "id": "1dbb089b-06f4-4bdc-b158-08dbdb851562",
        "latitude": 45.80634,
        "longitude": 15.97114,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:45.7541255"
      },
      {
        "id": "7b81b140-a084-40d5-b159-08dbdb851562",
        "latitude": 45.80625,
        "longitude": 15.97114,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:31.7541343"
      },
      {
        "id": "a400b62a-17c0-4c48-b15a-08dbdb851562",
        "latitude": 45.80615,
        "longitude": 15.97114,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:01.7541353"
      },
      {
        "id": "ab68f855-303a-429c-b15b-08dbdb851562",
        "latitude": 45.80604,
        "longitude": 15.97116,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:38.754141"
      },
      {
        "id": "a50d5572-2b75-4523-b15c-08dbdb851562",
        "latitude": 45.80725,
        "longitude": 15.97213,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:47.7541502"
      },
      {
        "id": "8523396e-f83d-4f8d-b15d-08dbdb851562",
        "latitude": 45.80716,
        "longitude": 15.97211,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:12.7541544"
      },
      {
        "id": "0dda5cb5-7e0f-483e-b15e-08dbdb851562",
        "latitude": 45.80708,
        "longitude": 15.97211,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:14.7541696"
      },
      {
        "id": "af979c1c-db43-47eb-b15f-08dbdb851562",
        "latitude": 45.80731,
        "longitude": 15.97365,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:58.7541734"
      },
      {
        "id": "0a746fbb-737d-413d-b160-08dbdb851562",
        "latitude": 45.80722,
        "longitude": 15.97362,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:04.7541751"
      },
      {
        "id": "0a03f4d2-1e0e-4823-b161-08dbdb851562",
        "latitude": 45.80712,
        "longitude": 15.97363,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:57.7541765"
      },
      {
        "id": "a71411f6-3902-4c2e-b162-08dbdb851562",
        "latitude": 45.80704,
        "longitude": 15.97365,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:17.7541796"
      },
      {
        "id": "1516b530-a251-469c-b163-08dbdb851562",
        "latitude": 45.80695,
        "longitude": 15.97366,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:15.7541866"
      },
      {
        "id": "12ef8079-71c7-48b1-b164-08dbdb851562",
        "latitude": 45.80687,
        "longitude": 15.97366,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:30:37.7259399"
      },
      {
        "id": "9d375287-dae9-4dd7-b165-08dbdb851562",
        "latitude": 45.8068,
        "longitude": 15.97367,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:22:56.7542161"
      },
      {
        "id": "740a3e99-2113-4296-b166-08dbdb851562",
        "latitude": 45.8068,
        "longitude": 15.97378,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:55.7542184"
      },
      {
        "id": "c5af8d7e-c84b-4402-b167-08dbdb851562",
        "latitude": 45.80657,
        "longitude": 15.97409,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:38.7542277"
      },
      {
        "id": "97ae10b0-4fe1-42be-b168-08dbdb851562",
        "latitude": 45.80658,
        "longitude": 15.97429,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:00.754231"
      },
      {
        "id": "38372701-a0dd-47f7-b169-08dbdb851562",
        "latitude": 45.80657,
        "longitude": 15.9745,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:28.7542402"
      },
      {
        "id": "125ad77a-618d-4f27-b16a-08dbdb851562",
        "latitude": 45.80657,
        "longitude": 15.97467,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:28.7542425"
      },
      {
        "id": "40d381c0-adeb-4936-b16b-08dbdb851562",
        "latitude": 45.80657,
        "longitude": 15.97483,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:39.7542567"
      },
      {
        "id": "3f24a679-ce29-40b1-b16c-08dbdb851562",
        "latitude": 45.80645,
        "longitude": 15.97411,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:40.7542657"
      },
      {
        "id": "9037ef7b-dbcf-4544-b16d-08dbdb851562",
        "latitude": 45.80644,
        "longitude": 15.97431,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:05.754268"
      },
      {
        "id": "22f0b807-231a-4777-b16e-08dbdb851562",
        "latitude": 45.80644,
        "longitude": 15.97453,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:19:19.7542719"
      },
      {
        "id": "743572bd-8e70-4333-b16f-08dbdb851562",
        "latitude": 45.80644,
        "longitude": 15.97473,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:53.7542808"
      },
      {
        "id": "67f8528c-cc3b-482c-b170-08dbdb851562",
        "latitude": 45.80644,
        "longitude": 15.97489,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:12.7542876"
      },
      {
        "id": "aa740113-537b-43c2-b171-08dbdb851562",
        "latitude": 45.80607,
        "longitude": 15.97678,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:40.7542912"
      },
      {
        "id": "8d6aa7e9-0586-4cea-b172-08dbdb851562",
        "latitude": 45.80598,
        "longitude": 15.97676,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:12.7542997"
      },
      {
        "id": "64a7b713-26d3-4408-b173-08dbdb851562",
        "latitude": 45.80589,
        "longitude": 15.97679,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:16.7543034"
      },
      {
        "id": "21c44f61-263b-4b08-b174-08dbdb851562",
        "latitude": 45.80532,
        "longitude": 15.97543,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:26.754306"
      },
      {
        "id": "84340f17-91a0-402a-b175-08dbdb851562",
        "latitude": 45.80532,
        "longitude": 15.97556,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:21:16.7543133"
      },
      {
        "id": "cb1d97d5-62be-4301-b176-08dbdb851562",
        "latitude": 45.80527,
        "longitude": 15.97537,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:23.7543222"
      },
      {
        "id": "c674b59a-1e1c-45f8-b177-08dbdb851562",
        "latitude": 45.80527,
        "longitude": 15.97551,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:31.7543312"
      },
      {
        "id": "2930c306-61db-450b-b178-08dbdb851562",
        "latitude": 45.80519,
        "longitude": 15.97537,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:04.754332"
      },
      {
        "id": "976945ef-2cd8-45cf-b179-08dbdb851562",
        "latitude": 45.80519,
        "longitude": 15.97555,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:46.7543392"
      },
      {
        "id": "9fdc99c7-eec8-4996-b17a-08dbdb851562",
        "latitude": 45.80513,
        "longitude": 15.97538,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:17.7543471"
      },
      {
        "id": "8871473b-cd72-453d-b17b-08dbdb851562",
        "latitude": 45.80513,
        "longitude": 15.97556,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:23.7543514"
      },
      {
        "id": "3c23f549-f97e-4727-b17c-08dbdb851562",
        "latitude": 45.80518,
        "longitude": 15.97956,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:37.7543597"
      },
      {
        "id": "26e58f29-35ef-43c0-b17d-08dbdb851562",
        "latitude": 45.80518,
        "longitude": 15.97967,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:19:13.7543686"
      },
      {
        "id": "86f000db-111c-4695-b17e-08dbdb851562",
        "latitude": 45.80518,
        "longitude": 15.97981,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:00.7543702"
      },
      {
        "id": "d2c2c223-5e02-4c97-b17f-08dbdb851562",
        "latitude": 45.80518,
        "longitude": 15.97996,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:57.7543712"
      },
      {
        "id": "a10ea368-dd17-4b24-b180-08dbdb851562",
        "latitude": 45.80519,
        "longitude": 15.98014,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:18:14.7543785"
      },
      {
        "id": "89984111-1a9a-4619-b181-08dbdb851562",
        "latitude": 45.80518,
        "longitude": 15.98029,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:17.7543941"
      },
      {
        "id": "35e1af9c-271a-4a37-b182-08dbdb851562",
        "latitude": 45.80504,
        "longitude": 15.98039,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:19:32.7543995"
      },
      {
        "id": "dc2ed1b5-1d63-49c8-b183-08dbdb851562",
        "latitude": 45.80505,
        "longitude": 15.98055,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:00.7544019"
      },
      {
        "id": "9b4c7352-ab29-417f-b184-08dbdb851562",
        "latitude": 45.80749,
        "longitude": 15.98041,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:24.75441"
      },
      {
        "id": "4beab864-155c-48ed-b185-08dbdb851562",
        "latitude": 45.80734,
        "longitude": 15.9804,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:06.7544274"
      },
      {
        "id": "2cb370be-d9f5-4541-b186-08dbdb851562",
        "latitude": 45.80723,
        "longitude": 15.98041,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:40.7544297"
      },
      {
        "id": "5e126bba-e752-4675-b187-08dbdb851562",
        "latitude": 45.80711,
        "longitude": 15.98042,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:13.7544352"
      },
      {
        "id": "ef496c23-0100-4cff-b188-08dbdb851562",
        "latitude": 45.807,
        "longitude": 15.98042,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:18.7544443"
      },
      {
        "id": "7910b760-8eba-4ddb-b189-08dbdb851562",
        "latitude": 45.80685,
        "longitude": 15.98042,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:27.7544545"
      },
      {
        "id": "1dc9b108-42c9-4f62-b18a-08dbdb851562",
        "latitude": 45.80675,
        "longitude": 15.98044,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:17:43.7544629"
      },
      {
        "id": "691b126a-3170-4016-b18b-08dbdb851562",
        "latitude": 45.80662,
        "longitude": 15.98044,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:38.7544745"
      },
      {
        "id": "bb1a2bd6-26c8-44c8-b18c-08dbdb851562",
        "latitude": 45.80654,
        "longitude": 15.98043,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:38.7544848"
      },
      {
        "id": "a8f8cbd3-15d5-4fe9-b18d-08dbdb851562",
        "latitude": 45.80651,
        "longitude": 15.98056,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:01.7544856"
      },
      {
        "id": "81e66ff0-19d6-47f3-b18e-08dbdb851562",
        "latitude": 45.80651,
        "longitude": 15.98084,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:02.7544867"
      },
      {
        "id": "95719897-691a-420a-b18f-08dbdb851562",
        "latitude": 45.80652,
        "longitude": 15.98102,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:17:38.7544966"
      },
      {
        "id": "dc154610-c109-4b10-b190-08dbdb851562",
        "latitude": 45.80651,
        "longitude": 15.98129,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:21:27.7545044"
      },
      {
        "id": "5c591d29-2c3c-4144-b191-08dbdb851562",
        "latitude": 45.80651,
        "longitude": 15.98152,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:02.7545082"
      },
      {
        "id": "7fd4eec3-b813-4996-b192-08dbdb851562",
        "latitude": 45.80626,
        "longitude": 15.9805,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:53.75451"
      },
      {
        "id": "087b7a83-2f27-473d-b193-08dbdb851562",
        "latitude": 45.80626,
        "longitude": 15.98068,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:17:46.7545131"
      },
      {
        "id": "2fa26487-049e-46dd-b194-08dbdb851562",
        "latitude": 45.80629,
        "longitude": 15.98097,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:52.754521"
      },
      {
        "id": "f274f434-d7d4-47f5-b195-08dbdb851562",
        "latitude": 45.8063,
        "longitude": 15.98122,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:48.7545307"
      },
      {
        "id": "44044609-5b5b-40eb-b196-08dbdb851562",
        "latitude": 45.80628,
        "longitude": 15.98151,
        "parkingSpotZone": "Zone1",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:04.7545382"
      },
      {
        "id": "fcc5a95d-d48b-4125-b197-08dbdb851562",
        "latitude": 45.80627,
        "longitude": 15.98173,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:53.7545531"
      },
      {
        "id": "282d26f5-fc5e-46ec-b198-08dbdb851562",
        "latitude": 45.80629,
        "longitude": 15.98188,
        "parkingSpotZone": "Zone1",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:54.7545611"
      },
      {
        "id": "9c23b7a5-03df-4023-b199-08dbdb851562",
        "latitude": 45.80713,
        "longitude": 15.96143,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:06.7545691"
      },
      {
        "id": "a04926a0-64ec-4296-b19a-08dbdb851562",
        "latitude": 45.80699,
        "longitude": 15.9616,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:05.7545846"
      },
      {
        "id": "b0059e1a-3ffb-4bf8-b19b-08dbdb851562",
        "latitude": 45.80689,
        "longitude": 15.96175,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:04.7546009"
      },
      {
        "id": "1555b04a-405a-4938-b19c-08dbdb851562",
        "latitude": 45.80705,
        "longitude": 15.96126,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:46.7546102"
      },
      {
        "id": "7f88dc85-df03-46aa-b19d-08dbdb851562",
        "latitude": 45.80699,
        "longitude": 15.96134,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:22:03.7546205"
      },
      {
        "id": "c96c2c2f-8166-43e0-b19e-08dbdb851562",
        "latitude": 45.80686,
        "longitude": 15.96141,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:48.7546236"
      },
      {
        "id": "33a0aa8f-d890-4f75-b19f-08dbdb851562",
        "latitude": 45.80672,
        "longitude": 15.96143,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:35.7546392"
      },
      {
        "id": "c280a5cd-02ba-4ff4-b1a0-08dbdb851562",
        "latitude": 45.8066,
        "longitude": 15.96147,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:46.7546471"
      },
      {
        "id": "07936656-ff35-4f4b-b1a1-08dbdb851562",
        "latitude": 45.8056,
        "longitude": 15.96332,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:02.754663"
      },
      {
        "id": "8d551dec-6ae8-45d8-b1a2-08dbdb851562",
        "latitude": 45.8055,
        "longitude": 15.96349,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:29.7546734"
      },
      {
        "id": "e8b19268-b0db-4f0b-b1a3-08dbdb851562",
        "latitude": 45.80538,
        "longitude": 15.9634,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:23:06.7546791"
      },
      {
        "id": "85ad2bec-9e7f-4232-b1a4-08dbdb851562",
        "latitude": 45.80526,
        "longitude": 15.96332,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:21:30.7546935"
      },
      {
        "id": "74715239-6e00-42b8-b1a5-08dbdb851562",
        "latitude": 45.80538,
        "longitude": 15.9637,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:23:42.7547163"
      },
      {
        "id": "7df102f5-3fce-47d4-b1a6-08dbdb851562",
        "latitude": 45.80524,
        "longitude": 15.96362,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:08.7547171"
      },
      {
        "id": "2532a477-7d85-4f44-b1a7-08dbdb851562",
        "latitude": 45.80511,
        "longitude": 15.96353,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:19.7547362"
      },
      {
        "id": "42782b52-59a4-4fef-b1a8-08dbdb851562",
        "latitude": 45.805,
        "longitude": 15.96347,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:44.7547375"
      },
      {
        "id": "5a76a654-f169-45eb-b1a9-08dbdb851562",
        "latitude": 45.80524,
        "longitude": 15.96383,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:43.7547466"
      },
      {
        "id": "017c35f6-d73b-4df7-b1aa-08dbdb851562",
        "latitude": 45.80511,
        "longitude": 15.96379,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:50.7547479"
      },
      {
        "id": "5929fd9a-4642-4f7b-b1ab-08dbdb851562",
        "latitude": 45.80499,
        "longitude": 15.96375,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:23:18.7547585"
      },
      {
        "id": "cc6f1995-4d24-4632-b1ac-08dbdb851562",
        "latitude": 45.80488,
        "longitude": 15.96373,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:37.7547615"
      },
      {
        "id": "8751c250-bce2-4b95-b1ad-08dbdb851562",
        "latitude": 45.80478,
        "longitude": 15.96368,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:47.7547842"
      },
      {
        "id": "c5033e3a-f396-4983-b1ae-08dbdb851562",
        "latitude": 45.80461,
        "longitude": 15.96364,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:53.7547934"
      },
      {
        "id": "e143c235-9876-4757-b1af-08dbdb851562",
        "latitude": 45.80451,
        "longitude": 15.9636,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:24.7547974"
      },
      {
        "id": "0827112f-e421-4ea7-b1b0-08dbdb851562",
        "latitude": 45.80485,
        "longitude": 15.96433,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:21:19.7548096"
      },
      {
        "id": "3b8aa206-629f-4f0a-b1b1-08dbdb851562",
        "latitude": 45.80479,
        "longitude": 15.96428,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:05:56.754818"
      },
      {
        "id": "d1c1c34d-98c3-4505-b1b2-08dbdb851562",
        "latitude": 45.80478,
        "longitude": 15.96437,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:18:35.7548224"
      },
      {
        "id": "c1fa1df0-4c9f-4cce-b1b3-08dbdb851562",
        "latitude": 45.80473,
        "longitude": 15.96461,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:20:09.7548317"
      },
      {
        "id": "f3ece83b-97b8-4ed6-b1b4-08dbdb851562",
        "latitude": 45.80472,
        "longitude": 15.96476,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:02.7548405"
      },
      {
        "id": "922679fa-78e5-49f4-b1b5-08dbdb851562",
        "latitude": 45.80476,
        "longitude": 15.96506,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:17:02.7548499"
      },
      {
        "id": "a4ae2822-b7e7-4357-b1b6-08dbdb851562",
        "latitude": 45.80473,
        "longitude": 15.96516,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:19.7548592"
      },
      {
        "id": "297bfbcc-7f49-4b1f-b1b7-08dbdb851562",
        "latitude": 45.80467,
        "longitude": 15.96533,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:54.7548637"
      },
      {
        "id": "df4e9d2c-7feb-4151-b1b8-08dbdb851562",
        "latitude": 45.80466,
        "longitude": 15.96493,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:01.7548797"
      },
      {
        "id": "d58b8a80-6ed3-45a3-b1b9-08dbdb851562",
        "latitude": 45.80455,
        "longitude": 15.96482,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:14.7549015"
      },
      {
        "id": "50090af5-c8e5-4a82-b1ba-08dbdb851562",
        "latitude": 45.80447,
        "longitude": 15.96478,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:42.7549045"
      },
      {
        "id": "8a269b8c-94c3-4cec-b1bb-08dbdb851562",
        "latitude": 45.80439,
        "longitude": 15.96491,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:24.7549186"
      },
      {
        "id": "fcc33a30-a268-411d-b1bc-08dbdb851562",
        "latitude": 45.80424,
        "longitude": 15.96583,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:24.7549487"
      },
      {
        "id": "a144b00c-450a-4295-b1bd-08dbdb851562",
        "latitude": 45.8042,
        "longitude": 15.966,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:55.7549568"
      },
      {
        "id": "8de93233-8418-4704-b1be-08dbdb851562",
        "latitude": 45.80414,
        "longitude": 15.96621,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:44.7549729"
      },
      {
        "id": "c6413abf-f8e6-4971-b1bf-08dbdb851562",
        "latitude": 45.80414,
        "longitude": 15.96564,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:57.7549893"
      },
      {
        "id": "166284c8-5bd3-4e9d-b1c0-08dbdb851562",
        "latitude": 45.80409,
        "longitude": 15.96579,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:45.7549934"
      },
      {
        "id": "c052e7fa-eb59-4544-b1c1-08dbdb851562",
        "latitude": 45.80403,
        "longitude": 15.966,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:04.7550029"
      },
      {
        "id": "71a3e8fa-474f-4c01-b1c2-08dbdb851562",
        "latitude": 45.80403,
        "longitude": 15.96643,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:02:55.7550061"
      },
      {
        "id": "16b12b4b-db59-45ac-b1c3-08dbdb851562",
        "latitude": 45.804,
        "longitude": 15.9666,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:49.7550145"
      },
      {
        "id": "210e4f56-f10b-4c3f-b1c4-08dbdb851562",
        "latitude": 45.80405,
        "longitude": 15.96699,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:43.755023"
      },
      {
        "id": "f4a9a6bf-f746-42cf-b1c5-08dbdb851562",
        "latitude": 45.804,
        "longitude": 15.96716,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:14:51.7550379"
      },
      {
        "id": "08e6c3e6-d5c0-4cac-b1c6-08dbdb851562",
        "latitude": 45.80396,
        "longitude": 15.96733,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:09.7550474"
      },
      {
        "id": "e54a3a51-9aea-42cc-b1c7-08dbdb851562",
        "latitude": 45.80391,
        "longitude": 15.9675,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:11:51.7550582"
      },
      {
        "id": "58cf486c-7f49-4d94-b1c8-08dbdb851562",
        "latitude": 45.80384,
        "longitude": 15.96776,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:52.7550664"
      },
      {
        "id": "df1eab16-509c-40f6-b1c9-08dbdb851562",
        "latitude": 45.80239,
        "longitude": 15.96515,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:56.7550815"
      },
      {
        "id": "50420c25-76e7-4f24-b1ca-08dbdb851562",
        "latitude": 45.80228,
        "longitude": 15.96515,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:40.7550903"
      },
      {
        "id": "4a47789c-47f3-4a23-b1cb-08dbdb851562",
        "latitude": 45.80216,
        "longitude": 15.96517,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:03.7551051"
      },
      {
        "id": "e361a121-b8fe-4de5-b1cc-08dbdb851562",
        "latitude": 45.80202,
        "longitude": 15.9652,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:19:44.7551164"
      },
      {
        "id": "265b78d6-ea70-4647-b1cd-08dbdb851562",
        "latitude": 45.80189,
        "longitude": 15.96523,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:35.7551279"
      },
      {
        "id": "a9ff5d04-ba17-4078-b1ce-08dbdb851562",
        "latitude": 45.8018,
        "longitude": 15.96526,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:33.7551313"
      },
      {
        "id": "9475887a-9c2f-4b65-b1cf-08dbdb851562",
        "latitude": 45.80165,
        "longitude": 15.96528,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:42.7551408"
      },
      {
        "id": "1762ff14-e34b-4b0f-b1d0-08dbdb851562",
        "latitude": 45.80174,
        "longitude": 15.96682,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:14:18.7551421"
      },
      {
        "id": "22bae199-b87f-456f-b1d1-08dbdb851562",
        "latitude": 45.80179,
        "longitude": 15.96702,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:08.7551589"
      },
      {
        "id": "5ae6ddac-cd7a-4c20-b1d2-08dbdb851562",
        "latitude": 45.80254,
        "longitude": 15.96631,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:40.7551813"
      },
      {
        "id": "09dd8a7d-212c-4231-b1d3-08dbdb851562",
        "latitude": 45.8031,
        "longitude": 15.9688,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:49.7551908"
      },
      {
        "id": "bdf9aedd-19a9-4e03-b1d4-08dbdb851562",
        "latitude": 45.80305,
        "longitude": 15.96888,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:42.7552025"
      },
      {
        "id": "08142051-1cc5-4c7e-b1d5-08dbdb851562",
        "latitude": 45.80307,
        "longitude": 15.96902,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:13:57.7552036"
      },
      {
        "id": "f84a95b9-8804-4f9d-b1d6-08dbdb851562",
        "latitude": 45.80307,
        "longitude": 15.9691,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:44.7552075"
      },
      {
        "id": "32567665-6fc2-45aa-b1d7-08dbdb851562",
        "latitude": 45.80307,
        "longitude": 15.96919,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:20.7552288"
      },
      {
        "id": "3e0371b2-8c82-428c-b1d8-08dbdb851562",
        "latitude": 45.80307,
        "longitude": 15.96926,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:14.7552446"
      },
      {
        "id": "ad401839-4569-4f5d-b1d9-08dbdb851562",
        "latitude": 45.8032,
        "longitude": 15.96952,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:21.7552547"
      },
      {
        "id": "40d6eb61-73d5-4fe0-b1da-08dbdb851562",
        "latitude": 45.8032,
        "longitude": 15.96964,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:37.7552709"
      },
      {
        "id": "c19d19c4-e752-420a-b1db-08dbdb851562",
        "latitude": 45.80319,
        "longitude": 15.96969,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:04.7552781"
      },
      {
        "id": "a7b4b49c-809f-4a08-b1dc-08dbdb851562",
        "latitude": 45.80316,
        "longitude": 15.96976,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:34.7552788"
      },
      {
        "id": "e2f67daa-7a8b-4b20-b1dd-08dbdb851562",
        "latitude": 45.80319,
        "longitude": 15.96985,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:27.7552881"
      },
      {
        "id": "40186091-59d2-40ab-b1de-08dbdb851562",
        "latitude": 45.80332,
        "longitude": 15.9699,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:41.7553052"
      },
      {
        "id": "2f355ab2-890a-4c26-b1df-08dbdb851562",
        "latitude": 45.8026,
        "longitude": 15.96975,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:08.7553135"
      },
      {
        "id": "fc5ac458-f123-4a1a-b1e0-08dbdb851562",
        "latitude": 45.80257,
        "longitude": 15.96971,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:07.7553374"
      },
      {
        "id": "d97c9cef-2b82-4c75-b1e1-08dbdb851562",
        "latitude": 45.80252,
        "longitude": 15.96973,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:54.7553465"
      },
      {
        "id": "64291710-6416-4933-b1e2-08dbdb851562",
        "latitude": 45.80248,
        "longitude": 15.96975,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:02.7553536"
      },
      {
        "id": "34cc3f5d-98ca-4fe8-b1e3-08dbdb851562",
        "latitude": 45.80244,
        "longitude": 15.96979,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:58.7553616"
      },
      {
        "id": "83dc5f8e-ed4f-4696-b1e4-08dbdb851562",
        "latitude": 45.80213,
        "longitude": 15.96872,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:10.7553918"
      },
      {
        "id": "07a7233a-cf24-48ce-b1e5-08dbdb851562",
        "latitude": 45.80208,
        "longitude": 15.96872,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:33.755401"
      },
      {
        "id": "7a537db8-5426-4471-b1e6-08dbdb851562",
        "latitude": 45.80211,
        "longitude": 15.96848,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:19.7554131"
      },
      {
        "id": "9ba2e72f-500e-4e49-b1e7-08dbdb851562",
        "latitude": 45.80204,
        "longitude": 15.96848,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:23.7554284"
      },
      {
        "id": "3abf546a-8ae0-4720-b1e8-08dbdb851562",
        "latitude": 45.80197,
        "longitude": 15.96847,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:19:54.7554438"
      },
      {
        "id": "c930d401-bdbf-452c-b1e9-08dbdb851562",
        "latitude": 45.80203,
        "longitude": 15.96807,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:25.7554513"
      },
      {
        "id": "c685ab5a-40d8-482a-b1ea-08dbdb851562",
        "latitude": 45.80197,
        "longitude": 15.96807,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:37.7554653"
      },
      {
        "id": "1de83c91-aff3-4dfa-b1eb-08dbdb851562",
        "latitude": 45.80191,
        "longitude": 15.96807,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:47.7554812"
      },
      {
        "id": "bb1c65bf-772e-454a-b1ec-08dbdb851562",
        "latitude": 45.80165,
        "longitude": 15.96793,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:18:26.7554828"
      },
      {
        "id": "cf8051ba-0371-49bd-b1ed-08dbdb851562",
        "latitude": 45.80165,
        "longitude": 15.96774,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:58.75549"
      },
      {
        "id": "4c09cca4-bd82-4138-b1ee-08dbdb851562",
        "latitude": 45.80168,
        "longitude": 15.96757,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:10.7554971"
      },
      {
        "id": "cf1319a8-ef74-4e8e-b1ef-08dbdb851562",
        "latitude": 45.80156,
        "longitude": 15.96809,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:14:02.7555202"
      },
      {
        "id": "cbe4a7f7-eea9-4eb6-b1f0-08dbdb851562",
        "latitude": 45.80156,
        "longitude": 15.96792,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:35.7555334"
      },
      {
        "id": "fa1f33cd-4c9b-4785-b1f1-08dbdb851562",
        "latitude": 45.80159,
        "longitude": 15.96776,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:25.7555443"
      },
      {
        "id": "bc3670d8-97bb-417c-b1f2-08dbdb851562",
        "latitude": 45.80159,
        "longitude": 15.96763,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:14.7555588"
      },
      {
        "id": "2e0a115d-f38d-4503-b1f3-08dbdb851562",
        "latitude": 45.80027,
        "longitude": 15.96847,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:41.7555606"
      },
      {
        "id": "7660c032-5743-4a9a-b1f4-08dbdb851562",
        "latitude": 45.80026,
        "longitude": 15.96833,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:48.7555851"
      },
      {
        "id": "75dead59-9eda-4941-b1f5-08dbdb851562",
        "latitude": 45.80026,
        "longitude": 15.96813,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:34.7555937"
      },
      {
        "id": "adffba27-9951-4d99-b1f6-08dbdb851562",
        "latitude": 45.80019,
        "longitude": 15.96812,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:27.7556015"
      },
      {
        "id": "888822d1-fb12-438d-b1f7-08dbdb851562",
        "latitude": 45.80019,
        "longitude": 15.96826,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:18:42.7556173"
      },
      {
        "id": "62ff798e-9de0-4fa0-b1f8-08dbdb851562",
        "latitude": 45.8002,
        "longitude": 15.96844,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:22.7556353"
      },
      {
        "id": "4de28aaf-86eb-43ac-b1f9-08dbdb851562",
        "latitude": 45.80127,
        "longitude": 15.97033,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:15:02.7556414"
      },
      {
        "id": "1d4be2cb-80f0-4550-b1fa-08dbdb851562",
        "latitude": 45.8013,
        "longitude": 15.97046,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:14:59.7556448"
      },
      {
        "id": "15ad2869-94af-4286-b1fb-08dbdb851562",
        "latitude": 45.80123,
        "longitude": 15.97044,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:21.755661"
      },
      {
        "id": "99772b41-ec40-406d-b1fc-08dbdb851562",
        "latitude": 45.80127,
        "longitude": 15.97065,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:02.7556778"
      },
      {
        "id": "a5c73fd0-bd30-4860-b1fd-08dbdb851562",
        "latitude": 45.80109,
        "longitude": 15.97045,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:21:19.7556954"
      },
      {
        "id": "5cc379a1-11f8-4191-b1fe-08dbdb851562",
        "latitude": 45.80111,
        "longitude": 15.97062,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:18:46.7557018"
      },
      {
        "id": "5edb738e-baf5-44d0-b1ff-08dbdb851562",
        "latitude": 45.80105,
        "longitude": 15.97012,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:17.7557147"
      },
      {
        "id": "134b454d-6e09-4230-b200-08dbdb851562",
        "latitude": 45.80108,
        "longitude": 15.9703,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:50.7557244"
      },
      {
        "id": "6c7479c5-bc78-4d04-b201-08dbdb851562",
        "latitude": 45.80096,
        "longitude": 15.97016,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:11:54.7557298"
      },
      {
        "id": "b69127c2-cadb-44a3-b202-08dbdb851562",
        "latitude": 45.80096,
        "longitude": 15.97033,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:21.7557449"
      },
      {
        "id": "900956aa-1ec2-44fa-b203-08dbdb851562",
        "latitude": 45.80098,
        "longitude": 15.97053,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:13:28.7557583"
      },
      {
        "id": "38174e0d-5f5b-4842-b204-08dbdb851562",
        "latitude": 45.80098,
        "longitude": 15.97071,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:18:58.7557662"
      },
      {
        "id": "5c82f710-b7d3-4d72-b205-08dbdb851562",
        "latitude": 45.80081,
        "longitude": 15.97016,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:24.7557791"
      },
      {
        "id": "e767a9df-787b-4e19-b206-08dbdb851562",
        "latitude": 45.80083,
        "longitude": 15.97032,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:48.7557907"
      },
      {
        "id": "7516df0e-7e9b-4537-b207-08dbdb851562",
        "latitude": 45.80085,
        "longitude": 15.97054,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:48.7557991"
      },
      {
        "id": "5ec0db21-c4a2-40f5-b208-08dbdb851562",
        "latitude": 45.80085,
        "longitude": 15.97068,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:43.7558145"
      },
      {
        "id": "5ea31d48-1456-4edb-b209-08dbdb851562",
        "latitude": 45.8007,
        "longitude": 15.97021,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:26.7558269"
      },
      {
        "id": "d3ea98f0-62cc-4931-b20a-08dbdb851562",
        "latitude": 45.80069,
        "longitude": 15.97034,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:22:39.7558393"
      },
      {
        "id": "3beb3f36-fabf-4195-b20b-08dbdb851562",
        "latitude": 45.80071,
        "longitude": 15.97053,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:08.7558478"
      },
      {
        "id": "c247d2b8-aa06-458c-b20c-08dbdb851562",
        "latitude": 45.80074,
        "longitude": 15.97069,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:10:43.7558481"
      },
      {
        "id": "7d135654-13a2-4c02-b20d-08dbdb851562",
        "latitude": 45.80081,
        "longitude": 15.9717,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:21:53.7558737"
      },
      {
        "id": "0ab72442-0157-4b20-b20e-08dbdb851562",
        "latitude": 45.80075,
        "longitude": 15.9717,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:14.7558817"
      },
      {
        "id": "e65ac08a-3597-4884-b20f-08dbdb851562",
        "latitude": 45.80071,
        "longitude": 15.97169,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:18.7558909"
      },
      {
        "id": "09586f43-c8a4-42e6-b210-08dbdb851562",
        "latitude": 45.80067,
        "longitude": 15.9717,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:02.755899"
      },
      {
        "id": "6abbe8a0-2dc8-456e-b211-08dbdb851562",
        "latitude": 45.80061,
        "longitude": 15.97173,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:51.7559275"
      },
      {
        "id": "2ae67b86-068d-4c90-b212-08dbdb851562",
        "latitude": 45.80041,
        "longitude": 15.97222,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:19:38.7559347"
      },
      {
        "id": "f6f0a8c3-2614-482e-b213-08dbdb851562",
        "latitude": 45.80035,
        "longitude": 15.97223,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:20:32.755941"
      },
      {
        "id": "50cc7f04-832f-4f2a-b214-08dbdb851562",
        "latitude": 45.80027,
        "longitude": 15.97223,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:38.7559422"
      },
      {
        "id": "0181a1a3-bb2d-4342-b215-08dbdb851562",
        "latitude": 45.80117,
        "longitude": 15.97331,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:01.7559573"
      },
      {
        "id": "c8149314-f315-4a79-b216-08dbdb851562",
        "latitude": 45.80117,
        "longitude": 15.97317,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T16:39:33.7233009"
      },
      {
        "id": "828399b1-de7a-495d-b217-08dbdb851562",
        "latitude": 45.80116,
        "longitude": 15.97296,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:58.7559883"
      },
      {
        "id": "9b8093f7-a4ed-491d-b218-08dbdb851562",
        "latitude": 45.80115,
        "longitude": 15.97266,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:19:17.7560098"
      },
      {
        "id": "fdfbb135-b420-47d0-b219-08dbdb851562",
        "latitude": 45.80018,
        "longitude": 15.97349,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:45.7560141"
      },
      {
        "id": "1f661237-e5fa-4d40-b21a-08dbdb851562",
        "latitude": 45.80018,
        "longitude": 15.97332,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:14.7560232"
      },
      {
        "id": "9298ba8a-b494-4697-b21b-08dbdb851562",
        "latitude": 45.80017,
        "longitude": 15.97312,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:19.756031"
      },
      {
        "id": "03a27922-704f-4ac7-b21c-08dbdb851562",
        "latitude": 45.80019,
        "longitude": 15.97294,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:31.7560544"
      },
      {
        "id": "90c2cbde-2130-46f7-b21d-08dbdb851562",
        "latitude": 45.80019,
        "longitude": 15.97274,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:26.7560689"
      },
      {
        "id": "f9c69d40-c90d-48d1-b21e-08dbdb851562",
        "latitude": 45.80017,
        "longitude": 15.9724,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:20:53.7560762"
      },
      {
        "id": "6090f12e-d531-4c93-b21f-08dbdb851562",
        "latitude": 45.80112,
        "longitude": 15.97532,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:54.7560825"
      },
      {
        "id": "88ce1e80-cdc4-4cc9-b220-08dbdb851562",
        "latitude": 45.80115,
        "longitude": 15.97548,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:21:04.7561037"
      },
      {
        "id": "3311fd5a-ff48-4ef4-b221-08dbdb851562",
        "latitude": 45.80105,
        "longitude": 15.97532,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:30.756106"
      },
      {
        "id": "662449b3-836c-47da-b222-08dbdb851562",
        "latitude": 45.80103,
        "longitude": 15.97543,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:15:37.7561289"
      },
      {
        "id": "d4ca3e9a-907a-4c60-b223-08dbdb851562",
        "latitude": 45.80269,
        "longitude": 15.97478,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:13:56.7561429"
      },
      {
        "id": "95192a6d-66b9-40be-b224-08dbdb851562",
        "latitude": 45.80268,
        "longitude": 15.97492,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:27.7561595"
      },
      {
        "id": "b0131ee5-bcb5-4978-b225-08dbdb851562",
        "latitude": 45.80267,
        "longitude": 15.97505,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:37.7561754"
      },
      {
        "id": "ee8aef71-7e83-4b8e-b226-08dbdb851562",
        "latitude": 45.80265,
        "longitude": 15.97519,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:35.7561767"
      },
      {
        "id": "b4c12c88-ced5-43c5-b227-08dbdb851562",
        "latitude": 45.80261,
        "longitude": 15.97534,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:21.7561927"
      },
      {
        "id": "576b0d80-3a3e-4dc5-b228-08dbdb851562",
        "latitude": 45.8026,
        "longitude": 15.97541,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:03.7561946"
      },
      {
        "id": "c2c89f70-1990-4a8c-b229-08dbdb851562",
        "latitude": 45.80387,
        "longitude": 15.97303,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:27.7561977"
      },
      {
        "id": "2a6f973f-7cfe-4df4-b22a-08dbdb851562",
        "latitude": 45.8039,
        "longitude": 15.97327,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:14:40.7562047"
      },
      {
        "id": "7e03ff42-3e31-478d-b22b-08dbdb851562",
        "latitude": 45.80394,
        "longitude": 15.97357,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:13.7562076"
      },
      {
        "id": "fde6ccbc-6564-486c-b22c-08dbdb851562",
        "latitude": 45.80396,
        "longitude": 15.97382,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:19:15.7562105"
      },
      {
        "id": "22cafadf-d3f0-4490-b22d-08dbdb851562",
        "latitude": 45.80398,
        "longitude": 15.97402,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:52.7562225"
      },
      {
        "id": "3fa8f02f-21fd-4043-b22e-08dbdb851562",
        "latitude": 45.80401,
        "longitude": 15.97453,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:22.7562386"
      },
      {
        "id": "ae0d5144-d7bd-4f1c-b22f-08dbdb851562",
        "latitude": 45.80402,
        "longitude": 15.97477,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:17:00.7562476"
      },
      {
        "id": "79fcc019-2af0-45fb-b230-08dbdb851562",
        "latitude": 45.80404,
        "longitude": 15.97497,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:14:57.7562555"
      },
      {
        "id": "0122799b-1d6c-450a-b231-08dbdb851562",
        "latitude": 45.80404,
        "longitude": 15.97504,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:09:09.7562722"
      },
      {
        "id": "6cb67724-a9fe-4df3-b232-08dbdb851562",
        "latitude": 45.80392,
        "longitude": 15.97503,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:24.7563012"
      },
      {
        "id": "9a966509-5122-4ac6-b233-08dbdb851562",
        "latitude": 45.80382,
        "longitude": 15.97499,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:21:57.756309"
      },
      {
        "id": "9e846df3-6584-4fc6-b234-08dbdb851562",
        "latitude": 45.80373,
        "longitude": 15.97493,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:25.7563183"
      },
      {
        "id": "d5d3941f-68d2-4aca-b235-08dbdb851562",
        "latitude": 45.80394,
        "longitude": 15.97526,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:16.7563338"
      },
      {
        "id": "184a7073-d325-4555-b236-08dbdb851562",
        "latitude": 45.80386,
        "longitude": 15.97523,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:23:00.7563411"
      },
      {
        "id": "67e041f0-21ea-4ec4-b237-08dbdb851562",
        "latitude": 45.8037,
        "longitude": 15.97521,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:17:40.7563448"
      },
      {
        "id": "8e8c0ad1-f82e-4ecf-b238-08dbdb851562",
        "latitude": 45.8008,
        "longitude": 15.97643,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:08:34.7563451"
      },
      {
        "id": "8e83cb78-293b-4dc9-b239-08dbdb851562",
        "latitude": 45.80082,
        "longitude": 15.9766,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:46.7563688"
      },
      {
        "id": "ae675a04-0036-4c65-b23a-08dbdb851562",
        "latitude": 45.80083,
        "longitude": 15.97687,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:02.756376"
      },
      {
        "id": "e15b8016-3108-4f39-b23b-08dbdb851562",
        "latitude": 45.80082,
        "longitude": 15.97707,
        "parkingSpotZone": "Zone2",
        "occupied": false,
        "occupiedTimestamp": "2023-11-04T17:16:28.7563833"
      },
      {
        "id": "f92ad851-512c-46fd-b23c-08dbdb851562",
        "latitude": 45.8013,
        "longitude": 15.9777,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:53.7564066"
      },
      {
        "id": "10da06d5-28a4-440b-b23d-08dbdb851562",
        "latitude": 45.8013,
        "longitude": 15.97784,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:19:48.7564193"
      },
      {
        "id": "b713ed1a-2ec7-4ff6-b23e-08dbdb851562",
        "latitude": 45.80131,
        "longitude": 15.97801,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:07:01.756427"
      },
      {
        "id": "a5a157a3-9d05-468d-b23f-08dbdb851562",
        "latitude": 45.8013,
        "longitude": 15.97817,
        "parkingSpotZone": "Zone2",
        "occupied": true,
        "occupiedTimestamp": "2023-11-04T17:16:20.7564371"
      }]
        commit('setParkingSpots', parkingSpots);
      
    }
  }
};
