export const parkingSpotsModule = {
  state: {
    parkingSpots: [],

    parkingZonePrices: {},

    //filters
    filterPrice: 0,
    filterFreeSpace: false,
    filterZone: 0,
    filterDistance: 0
  },
  getters: {
    allParkingSpots: (state) => state.parkingSpots,

    getParkingZonePrices: (state) => state.parkingZonePrices,

    getFilterPrice: (state) => state.filterPrice,
    getFilterFreeSpace: (state) => state.filterFreeSpace,
    getFilterZone: (state) => state.filterZone,
    getFilterDistance: (state) => state.filterDistance
  },
  mutations: {
    setParkingSpots(state, parkingSpots) {
      state.parkingSpots = parkingSpots
    },
    setParkingZonePrices(state, parkingZonePrices) {
      state.parkingZonePrices = parkingZonePrices
    },
    setFilters(state, filters) {
      state.filterPrice = filters.price
      state.filterFreeSpace = filters.freeSpace
      state.filterZone = filters.zone
      state.filterDistance = filters.filterDistance
    }
  },
  actions: {
    async fetchParkingSpots({ state, commit }) {
      let parkingSpots = [
        {
          id: '986d1c84-7b38-45f1-b117-08dbdb851562',
          latitude: 45.80528,
          longitude: 15.96649,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:00.7252676'
        },
        {
          id: '2b6f2fdc-f466-4065-b118-08dbdb851562',
          latitude: 45.80527,
          longitude: 15.96668,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:28.7252775'
        },
        {
          id: 'af327f8a-b8cf-4912-b119-08dbdb851562',
          latitude: 45.80525,
          longitude: 15.96701,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:40.7252819'
        },
        {
          id: '3bec8a94-b25b-4eaa-b11a-08dbdb851562',
          latitude: 45.80524,
          longitude: 15.9674,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:17.7252837'
        },
        {
          id: 'd8f6b4c9-76b9-41a5-b11b-08dbdb851562',
          latitude: 45.80525,
          longitude: 15.96761,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:05.7252947'
        },
        {
          id: '759cb6ce-508b-4ba5-b11c-08dbdb851562',
          latitude: 45.80525,
          longitude: 15.96789,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:25.7253113'
        },
        {
          id: '50b5cc04-0a13-4ed0-b11d-08dbdb851562',
          latitude: 45.80526,
          longitude: 15.96808,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:07.7253272'
        },
        {
          id: 'bd070121-5644-4575-b11e-08dbdb851562',
          latitude: 45.80529,
          longitude: 15.96831,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:53:57.7253594'
        },
        {
          id: '8974eabd-5c38-4a3e-b11f-08dbdb851562',
          latitude: 45.80529,
          longitude: 15.96856,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:35.7253614'
        },
        {
          id: '2412b0c8-9701-4c1e-b120-08dbdb851562',
          latitude: 45.80529,
          longitude: 15.96884,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:49:00.7253775'
        },
        {
          id: '02c2335a-a124-4e05-b121-08dbdb851562',
          latitude: 45.8053,
          longitude: 15.96907,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:43:58.7253956'
        },
        {
          id: '3f862779-69b2-477a-b122-08dbdb851562',
          latitude: 45.80512,
          longitude: 15.96917,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:04.7253987'
        },
        {
          id: '561da2a1-7676-4b1a-b123-08dbdb851562',
          latitude: 45.80491,
          longitude: 15.96918,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:10.7254042'
        },
        {
          id: 'bbaba8c1-a1f6-4b2c-b124-08dbdb851562',
          latitude: 45.80478,
          longitude: 15.96918,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:06.7254117'
        },
        {
          id: 'f956da35-89ae-4492-b125-08dbdb851562',
          latitude: 45.80465,
          longitude: 15.96918,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:04.7254208'
        },
        {
          id: '2c62e064-3159-4338-b126-08dbdb851562',
          latitude: 45.80455,
          longitude: 15.96917,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:32.7254233'
        },
        {
          id: 'c17f8978-7c99-4a32-b127-08dbdb851562',
          latitude: 45.80446,
          longitude: 15.9692,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:49.7254255'
        },
        {
          id: '3e905b3b-b20b-4f28-b128-08dbdb851562',
          latitude: 45.80437,
          longitude: 15.96921,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:33.7254357'
        },
        {
          id: '81216c90-a30e-45c9-b129-08dbdb851562',
          latitude: 45.80717,
          longitude: 15.96789,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:09.7254513'
        },
        {
          id: 'a5369fc4-dc3d-48e7-b12a-08dbdb851562',
          latitude: 45.80717,
          longitude: 15.96808,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:32.7254601'
        },
        {
          id: '34b4c9b1-3113-4e42-b12b-08dbdb851562',
          latitude: 45.80718,
          longitude: 15.96834,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:53:15.7254906'
        },
        {
          id: 'e56d1e63-37f3-4b45-b12c-08dbdb851562',
          latitude: 45.80717,
          longitude: 15.96858,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:28.7254935'
        },
        {
          id: '53d1dc08-9649-4546-b12d-08dbdb851562',
          latitude: 45.80716,
          longitude: 15.96878,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:49:15.7255039'
        },
        {
          id: 'a7dfc1c0-9920-45a6-b12e-08dbdb851562',
          latitude: 45.80716,
          longitude: 15.96898,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:44:12.7255148'
        },
        {
          id: '02a54315-68ea-4255-b12f-08dbdb851562',
          latitude: 45.80716,
          longitude: 15.96913,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:57.7255238'
        },
        {
          id: '5826fd0d-7f72-4609-b130-08dbdb851562',
          latitude: 45.80704,
          longitude: 15.96913,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:59.7255315'
        },
        {
          id: 'ebde6830-17ed-4750-b131-08dbdb851562',
          latitude: 45.80687,
          longitude: 15.96915,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:26.7255468'
        },
        {
          id: '8fa20b6d-3e29-4a75-b132-08dbdb851562',
          latitude: 45.80675,
          longitude: 15.96915,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:15.7255507'
        },
        {
          id: '69aa60b6-5bb5-4bad-b133-08dbdb851562',
          latitude: 45.80663,
          longitude: 15.96914,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:47.725559'
        },
        {
          id: '93b273e3-d8dc-40ad-b134-08dbdb851562',
          latitude: 45.80652,
          longitude: 15.96915,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:44.7255672'
        },
        {
          id: '97e025b5-a909-4823-b135-08dbdb851562',
          latitude: 45.80639,
          longitude: 15.96914,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:47.7255758'
        },
        {
          id: '521543b0-654e-4f81-b136-08dbdb851562',
          latitude: 45.80627,
          longitude: 15.96914,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:49:17.7255936'
        },
        {
          id: 'ed1573a1-23b8-427e-b137-08dbdb851562',
          latitude: 45.8061,
          longitude: 15.96913,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:50.7256075'
        },
        {
          id: '3b7ca0ea-5193-46d4-b138-08dbdb851562',
          latitude: 45.80595,
          longitude: 15.96914,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:44.7256167'
        },
        {
          id: 'aed4cb5d-fb39-40cb-b139-08dbdb851562',
          latitude: 45.80583,
          longitude: 15.96914,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.725626'
        },
        {
          id: 'bd6b60ad-7d81-40cc-b13a-08dbdb851562',
          latitude: 45.80567,
          longitude: 15.96916,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:57.7256375'
        },
        {
          id: 'fa8de515-80b9-4c7f-b13b-08dbdb851562',
          latitude: 45.80719,
          longitude: 15.97077,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:10.7256424'
        },
        {
          id: 'fd8c0e3c-12e7-413d-b13c-08dbdb851562',
          latitude: 45.8072,
          longitude: 15.97058,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:49.7256445'
        },
        {
          id: '53c038fd-a032-450c-b13d-08dbdb851562',
          latitude: 45.8072,
          longitude: 15.97036,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:31.72566'
        },
        {
          id: 'e947dff9-9549-4477-b13e-08dbdb851562',
          latitude: 45.8072,
          longitude: 15.97015,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7256621'
        },
        {
          id: 'a9f6c3a9-647d-4559-b13f-08dbdb851562',
          latitude: 45.80719,
          longitude: 15.96993,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.7256693'
        },
        {
          id: '9a6c859f-d26b-492d-b140-08dbdb851562',
          latitude: 45.80718,
          longitude: 15.96976,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:06.7256704'
        },
        {
          id: 'a4288b0f-1c2f-4df3-b141-08dbdb851562',
          latitude: 45.80719,
          longitude: 15.96951,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:22.7256862'
        },
        {
          id: '886b3599-1aba-4ff6-b142-08dbdb851562',
          latitude: 45.80707,
          longitude: 15.9695,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:24.7256963'
        },
        {
          id: '5be8ba01-83b6-464d-b143-08dbdb851562',
          latitude: 45.80689,
          longitude: 15.9695,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:43.7256978'
        },
        {
          id: '858d95ca-c1e3-4253-b144-08dbdb851562',
          latitude: 45.80677,
          longitude: 15.96949,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.7257069'
        },
        {
          id: '176afb14-7f84-40a6-b145-08dbdb851562',
          latitude: 45.80663,
          longitude: 15.96949,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:49.7257082'
        },
        {
          id: 'ec066a44-49d7-41f5-b146-08dbdb851562',
          latitude: 45.80649,
          longitude: 15.9695,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:55.7257209'
        },
        {
          id: '298236a4-b03d-41e8-b147-08dbdb851562',
          latitude: 45.80633,
          longitude: 15.9695,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7257274'
        },
        {
          id: 'd77db467-53f0-4c86-b148-08dbdb851562',
          latitude: 45.80621,
          longitude: 15.96948,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:10.7257358'
        },
        {
          id: '5fb1a82b-8f83-4784-b149-08dbdb851562',
          latitude: 45.80609,
          longitude: 15.96948,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7257371'
        },
        {
          id: '3974b3d9-3118-495b-b14a-08dbdb851562',
          latitude: 45.80541,
          longitude: 15.96995,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:18.7257444'
        },
        {
          id: '5414deff-306c-40d8-b14b-08dbdb851562',
          latitude: 45.80538,
          longitude: 15.96972,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.7257558'
        },
        {
          id: '3b81da48-57ff-432c-b14c-08dbdb851562',
          latitude: 45.80538,
          longitude: 15.96953,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:14.7257609'
        },
        {
          id: '3e188660-0c30-4521-b14d-08dbdb851562',
          latitude: 45.80529,
          longitude: 15.96949,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:02.7257702'
        },
        {
          id: 'ed98e3ea-a1ee-499a-b14e-08dbdb851562',
          latitude: 45.80707,
          longitude: 15.97082,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:00.7257723'
        },
        {
          id: 'bde3a3f9-fde8-4d10-b14f-08dbdb851562',
          latitude: 45.807,
          longitude: 15.97081,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:15.7257797'
        },
        {
          id: '6ca6d5ab-9808-490b-b150-08dbdb851562',
          latitude: 45.80691,
          longitude: 15.97081,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:28.7257967'
        },
        {
          id: '3093ba12-a1f2-42aa-b151-08dbdb851562',
          latitude: 45.80682,
          longitude: 15.9708,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:38.7257994'
        },
        {
          id: 'b03c43a1-927f-4244-b152-08dbdb851562',
          latitude: 45.80721,
          longitude: 15.97107,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:57.725803'
        },
        {
          id: '69d505b3-8b4d-4c8b-b153-08dbdb851562',
          latitude: 45.80713,
          longitude: 15.9711,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:34.7258065'
        },
        {
          id: 'a3d30b88-3023-4f8e-b154-08dbdb851562',
          latitude: 45.80707,
          longitude: 15.97111,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:36.7258135'
        },
        {
          id: 'df25d08c-346e-480a-b155-08dbdb851562',
          latitude: 45.80696,
          longitude: 15.97111,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:37.7258162'
        },
        {
          id: 'f7c8cfbf-2af8-474f-b156-08dbdb851562',
          latitude: 45.80687,
          longitude: 15.97112,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:25.7258247'
        },
        {
          id: '8d4ad9a2-6f87-4e28-b157-08dbdb851562',
          latitude: 45.80645,
          longitude: 15.97114,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:30.7258401'
        },
        {
          id: '1dbb089b-06f4-4bdc-b158-08dbdb851562',
          latitude: 45.80634,
          longitude: 15.97114,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:18.7258492'
        },
        {
          id: '7b81b140-a084-40d5-b159-08dbdb851562',
          latitude: 45.80625,
          longitude: 15.97114,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:31.725858'
        },
        {
          id: 'a400b62a-17c0-4c48-b15a-08dbdb851562',
          latitude: 45.80615,
          longitude: 15.97114,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7258591'
        },
        {
          id: 'ab68f855-303a-429c-b15b-08dbdb851562',
          latitude: 45.80604,
          longitude: 15.97116,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:38.725866'
        },
        {
          id: 'a50d5572-2b75-4523-b15c-08dbdb851562',
          latitude: 45.80725,
          longitude: 15.97213,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:47.7258753'
        },
        {
          id: '8523396e-f83d-4f8d-b15d-08dbdb851562',
          latitude: 45.80716,
          longitude: 15.97211,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:12.725879'
        },
        {
          id: '0dda5cb5-7e0f-483e-b15e-08dbdb851562',
          latitude: 45.80708,
          longitude: 15.97211,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:32.7258878'
        },
        {
          id: 'af979c1c-db43-47eb-b15f-08dbdb851562',
          latitude: 45.80731,
          longitude: 15.97365,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:05.7258956'
        },
        {
          id: '0a746fbb-737d-413d-b160-08dbdb851562',
          latitude: 45.80722,
          longitude: 15.97362,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:06.7259083'
        },
        {
          id: '0a03f4d2-1e0e-4823-b161-08dbdb851562',
          latitude: 45.80712,
          longitude: 15.97363,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:04.7259097'
        },
        {
          id: 'a71411f6-3902-4c2e-b162-08dbdb851562',
          latitude: 45.80704,
          longitude: 15.97365,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:04.725929'
        },
        {
          id: '1516b530-a251-469c-b163-08dbdb851562',
          latitude: 45.80695,
          longitude: 15.97366,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:30.7259389'
        },
        {
          id: '12ef8079-71c7-48b1-b164-08dbdb851562',
          latitude: 45.80687,
          longitude: 15.97366,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:30:37.7259399'
        },
        {
          id: '9d375287-dae9-4dd7-b165-08dbdb851562',
          latitude: 45.8068,
          longitude: 15.97367,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:55.7259422'
        },
        {
          id: '740a3e99-2113-4296-b166-08dbdb851562',
          latitude: 45.8068,
          longitude: 15.97378,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:38.7259518'
        },
        {
          id: 'c5af8d7e-c84b-4402-b167-08dbdb851562',
          latitude: 45.80657,
          longitude: 15.97409,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:00.7259552'
        },
        {
          id: '97ae10b0-4fe1-42be-b168-08dbdb851562',
          latitude: 45.80658,
          longitude: 15.97429,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:48.7259713'
        },
        {
          id: '38372701-a0dd-47f7-b169-08dbdb851562',
          latitude: 45.80657,
          longitude: 15.9745,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:09.725977'
        },
        {
          id: '125ad77a-618d-4f27-b16a-08dbdb851562',
          latitude: 45.80657,
          longitude: 15.97467,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:31.7259921'
        },
        {
          id: '40d381c0-adeb-4936-b16b-08dbdb851562',
          latitude: 45.80657,
          longitude: 15.97483,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:53.726002'
        },
        {
          id: '3f24a679-ce29-40b1-b16c-08dbdb851562',
          latitude: 45.80645,
          longitude: 15.97411,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:12.726009'
        },
        {
          id: '9037ef7b-dbcf-4544-b16d-08dbdb851562',
          latitude: 45.80644,
          longitude: 15.97431,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:40.7260127'
        },
        {
          id: '22f0b807-231a-4777-b16e-08dbdb851562',
          latitude: 45.80644,
          longitude: 15.97453,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:17.7260198'
        },
        {
          id: '743572bd-8e70-4333-b16f-08dbdb851562',
          latitude: 45.80644,
          longitude: 15.97473,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:16.726025'
        },
        {
          id: '67f8528c-cc3b-482c-b170-08dbdb851562',
          latitude: 45.80644,
          longitude: 15.97489,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:26.7260277'
        },
        {
          id: 'aa740113-537b-43c2-b171-08dbdb851562',
          latitude: 45.80607,
          longitude: 15.97678,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:16.7260352'
        },
        {
          id: '8d6aa7e9-0586-4cea-b172-08dbdb851562',
          latitude: 45.80598,
          longitude: 15.97676,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:23.7260441'
        },
        {
          id: '64a7b713-26d3-4408-b173-08dbdb851562',
          latitude: 45.80589,
          longitude: 15.97679,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:41:18.7260468'
        },
        {
          id: '21c44f61-263b-4b08-b174-08dbdb851562',
          latitude: 45.80532,
          longitude: 15.97543,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:30.7260555'
        },
        {
          id: '84340f17-91a0-402a-b175-08dbdb851562',
          latitude: 45.80532,
          longitude: 15.97556,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:18.7260639'
        },
        {
          id: 'cb1d97d5-62be-4301-b176-08dbdb851562',
          latitude: 45.80527,
          longitude: 15.97537,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:59.7260671'
        },
        {
          id: 'c674b59a-1e1c-45f8-b177-08dbdb851562',
          latitude: 45.80527,
          longitude: 15.97551,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:17.7260688'
        },
        {
          id: '2930c306-61db-450b-b178-08dbdb851562',
          latitude: 45.80519,
          longitude: 15.97537,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:23.7260785'
        },
        {
          id: '976945ef-2cd8-45cf-b179-08dbdb851562',
          latitude: 45.80519,
          longitude: 15.97555,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:37.7260861'
        },
        {
          id: '9fdc99c7-eec8-4996-b17a-08dbdb851562',
          latitude: 45.80513,
          longitude: 15.97538,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:13.7260952'
        },
        {
          id: '8871473b-cd72-453d-b17b-08dbdb851562',
          latitude: 45.80513,
          longitude: 15.97556,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:00.7260969'
        },
        {
          id: '3c23f549-f97e-4727-b17c-08dbdb851562',
          latitude: 45.80518,
          longitude: 15.97956,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:57.726098'
        },
        {
          id: '26e58f29-35ef-43c0-b17d-08dbdb851562',
          latitude: 45.80518,
          longitude: 15.97967,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:14.7261051'
        },
        {
          id: '86f000db-111c-4695-b17e-08dbdb851562',
          latitude: 45.80518,
          longitude: 15.97981,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:17.7261206'
        },
        {
          id: 'd2c2c223-5e02-4c97-b17f-08dbdb851562',
          latitude: 45.80518,
          longitude: 15.97996,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:18.7261335'
        },
        {
          id: 'a10ea368-dd17-4b24-b180-08dbdb851562',
          latitude: 45.80519,
          longitude: 15.98014,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:04.7261414'
        },
        {
          id: '89984111-1a9a-4619-b181-08dbdb851562',
          latitude: 45.80518,
          longitude: 15.98029,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:53:27.7261543'
        },
        {
          id: '35e1af9c-271a-4a37-b182-08dbdb851562',
          latitude: 45.80504,
          longitude: 15.98039,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:40.7261567'
        },
        {
          id: 'dc2ed1b5-1d63-49c8-b183-08dbdb851562',
          latitude: 45.80505,
          longitude: 15.98055,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:13.7261621'
        },
        {
          id: '9b4c7352-ab29-417f-b184-08dbdb851562',
          latitude: 45.80749,
          longitude: 15.98041,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:18.7261709'
        },
        {
          id: '4beab864-155c-48ed-b185-08dbdb851562',
          latitude: 45.80734,
          longitude: 15.9804,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:27.7261827'
        },
        {
          id: '2cb370be-d9f5-4541-b186-08dbdb851562',
          latitude: 45.80723,
          longitude: 15.98041,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:43.726191'
        },
        {
          id: '5e126bba-e752-4675-b187-08dbdb851562',
          latitude: 45.80711,
          longitude: 15.98042,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:38.7262023'
        },
        {
          id: 'ef496c23-0100-4cff-b188-08dbdb851562',
          latitude: 45.807,
          longitude: 15.98042,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:38.7262125'
        },
        {
          id: '7910b760-8eba-4ddb-b189-08dbdb851562',
          latitude: 45.80685,
          longitude: 15.98042,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:50.7262229'
        },
        {
          id: '1dc9b108-42c9-4f62-b18a-08dbdb851562',
          latitude: 45.80675,
          longitude: 15.98044,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:51:27.7262308'
        },
        {
          id: '691b126a-3170-4016-b18b-08dbdb851562',
          latitude: 45.80662,
          longitude: 15.98044,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.7262346'
        },
        {
          id: 'bb1a2bd6-26c8-44c8-b18c-08dbdb851562',
          latitude: 45.80654,
          longitude: 15.98043,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:53.7262364'
        },
        {
          id: 'a8f8cbd3-15d5-4fe9-b18d-08dbdb851562',
          latitude: 45.80651,
          longitude: 15.98056,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:46.7262395'
        },
        {
          id: '81e66ff0-19d6-47f3-b18e-08dbdb851562',
          latitude: 45.80651,
          longitude: 15.98084,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:02.7262409'
        },
        {
          id: '95719897-691a-420a-b18f-08dbdb851562',
          latitude: 45.80652,
          longitude: 15.98102,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:03.7262425'
        },
        {
          id: 'dc154610-c109-4b10-b190-08dbdb851562',
          latitude: 45.80651,
          longitude: 15.98129,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:19.7262516'
        },
        {
          id: '5c591d29-2c3c-4144-b191-08dbdb851562',
          latitude: 45.80651,
          longitude: 15.98152,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:56.7262529'
        },
        {
          id: '7fd4eec3-b813-4996-b192-08dbdb851562',
          latitude: 45.80626,
          longitude: 15.9805,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:27.7262605'
        },
        {
          id: '087b7a83-2f27-473d-b193-08dbdb851562',
          latitude: 45.80626,
          longitude: 15.98068,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:03.7262775'
        },
        {
          id: '2fa26487-049e-46dd-b194-08dbdb851562',
          latitude: 45.80629,
          longitude: 15.98097,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.7262848'
        },
        {
          id: 'f274f434-d7d4-47f5-b195-08dbdb851562',
          latitude: 45.8063,
          longitude: 15.98122,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:23.7262937'
        },
        {
          id: '44044609-5b5b-40eb-b196-08dbdb851562',
          latitude: 45.80628,
          longitude: 15.98151,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:21.7263092'
        },
        {
          id: 'fcc5a95d-d48b-4125-b197-08dbdb851562',
          latitude: 45.80627,
          longitude: 15.98173,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:50.7263115'
        },
        {
          id: '282d26f5-fc5e-46ec-b198-08dbdb851562',
          latitude: 45.80629,
          longitude: 15.98188,
          parkingSpotZone: 'Zone1',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:15.7263176'
        },
        {
          id: '9c23b7a5-03df-4023-b199-08dbdb851562',
          latitude: 45.80713,
          longitude: 15.96143,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:53:57.7263348'
        },
        {
          id: 'a04926a0-64ec-4296-b19a-08dbdb851562',
          latitude: 45.80699,
          longitude: 15.9616,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:09.7263545'
        },
        {
          id: 'b0059e1a-3ffb-4bf8-b19b-08dbdb851562',
          latitude: 45.80689,
          longitude: 15.96175,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:35.7263648'
        },
        {
          id: '1555b04a-405a-4938-b19c-08dbdb851562',
          latitude: 45.80705,
          longitude: 15.96126,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:03.7263737'
        },
        {
          id: '7f88dc85-df03-46aa-b19d-08dbdb851562',
          latitude: 45.80699,
          longitude: 15.96134,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:27.7263829'
        },
        {
          id: 'c96c2c2f-8166-43e0-b19e-08dbdb851562',
          latitude: 45.80686,
          longitude: 15.96141,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:02.7263924'
        },
        {
          id: '33a0aa8f-d890-4f75-b19f-08dbdb851562',
          latitude: 45.80672,
          longitude: 15.96143,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:08.7264105'
        },
        {
          id: 'c280a5cd-02ba-4ff4-b1a0-08dbdb851562',
          latitude: 45.8066,
          longitude: 15.96147,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:17.7264179'
        },
        {
          id: '07936656-ff35-4f4b-b1a1-08dbdb851562',
          latitude: 45.8056,
          longitude: 15.96332,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:36.7264251'
        },
        {
          id: '8d551dec-6ae8-45d8-b1a2-08dbdb851562',
          latitude: 45.8055,
          longitude: 15.96349,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:27.7264371'
        },
        {
          id: 'e8b19268-b0db-4f0b-b1a3-08dbdb851562',
          latitude: 45.80538,
          longitude: 15.9634,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:28.7264499'
        },
        {
          id: '85ad2bec-9e7f-4232-b1a4-08dbdb851562',
          latitude: 45.80526,
          longitude: 15.96332,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:08.7264507'
        },
        {
          id: '74715239-6e00-42b8-b1a5-08dbdb851562',
          latitude: 45.80538,
          longitude: 15.9637,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:08.7264658'
        },
        {
          id: '7df102f5-3fce-47d4-b1a6-08dbdb851562',
          latitude: 45.80524,
          longitude: 15.96362,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:18.7264817'
        },
        {
          id: '2532a477-7d85-4f44-b1a7-08dbdb851562',
          latitude: 45.80511,
          longitude: 15.96353,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:43:30.7264877'
        },
        {
          id: '42782b52-59a4-4fef-b1a8-08dbdb851562',
          latitude: 45.805,
          longitude: 15.96347,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:17.7264966'
        },
        {
          id: '5a76a654-f169-45eb-b1a9-08dbdb851562',
          latitude: 45.80524,
          longitude: 15.96383,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:04.7264977'
        },
        {
          id: '017c35f6-d73b-4df7-b1aa-08dbdb851562',
          latitude: 45.80511,
          longitude: 15.96379,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:47.7265165'
        },
        {
          id: '5929fd9a-4642-4f7b-b1ab-08dbdb851562',
          latitude: 45.80499,
          longitude: 15.96375,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:45.7265307'
        },
        {
          id: 'cc6f1995-4d24-4632-b1ac-08dbdb851562',
          latitude: 45.80488,
          longitude: 15.96373,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:31.7265505'
        },
        {
          id: '8751c250-bce2-4b95-b1ad-08dbdb851562',
          latitude: 45.80478,
          longitude: 15.96368,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:19.7265612'
        },
        {
          id: 'c5033e3a-f396-4983-b1ae-08dbdb851562',
          latitude: 45.80461,
          longitude: 15.96364,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:50:09.7265637'
        },
        {
          id: 'e143c235-9876-4757-b1af-08dbdb851562',
          latitude: 45.80451,
          longitude: 15.9636,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:02.7265727'
        },
        {
          id: '0827112f-e421-4ea7-b1b0-08dbdb851562',
          latitude: 45.80485,
          longitude: 15.96433,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:02.7265821'
        },
        {
          id: '3b8aa206-629f-4f0a-b1b1-08dbdb851562',
          latitude: 45.80479,
          longitude: 15.96428,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:19.7265915'
        },
        {
          id: 'd1c1c34d-98c3-4505-b1b2-08dbdb851562',
          latitude: 45.80478,
          longitude: 15.96437,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:54.7265972'
        },
        {
          id: 'c1fa1df0-4c9f-4cce-b1b3-08dbdb851562',
          latitude: 45.80473,
          longitude: 15.96461,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:01.7266133'
        },
        {
          id: 'f3ece83b-97b8-4ed6-b1b4-08dbdb851562',
          latitude: 45.80472,
          longitude: 15.96476,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:06.7266233'
        },
        {
          id: '922679fa-78e5-49f4-b1b5-08dbdb851562',
          latitude: 45.80476,
          longitude: 15.96506,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:09.7266371'
        },
        {
          id: 'a4ae2822-b7e7-4357-b1b6-08dbdb851562',
          latitude: 45.80473,
          longitude: 15.96516,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T18:01:41.7499268'
        },
        {
          id: '297bfbcc-7f49-4b1f-b1b7-08dbdb851562',
          latitude: 45.80467,
          longitude: 15.96533,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:24.7266561'
        },
        {
          id: 'df4e9d2c-7feb-4151-b1b8-08dbdb851562',
          latitude: 45.80466,
          longitude: 15.96493,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:24.7266856'
        },
        {
          id: 'd58b8a80-6ed3-45a3-b1b9-08dbdb851562',
          latitude: 45.80455,
          longitude: 15.96482,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:24.726686'
        },
        {
          id: '50090af5-c8e5-4a82-b1ba-08dbdb851562',
          latitude: 45.80447,
          longitude: 15.96478,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:01.7267168'
        },
        {
          id: '8a269b8c-94c3-4cec-b1bb-08dbdb851562',
          latitude: 45.80439,
          longitude: 15.96491,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:05.7267247'
        },
        {
          id: 'fcc33a30-a268-411d-b1bc-08dbdb851562',
          latitude: 45.80424,
          longitude: 15.96583,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:57.7267366'
        },
        {
          id: 'a144b00c-450a-4295-b1bd-08dbdb851562',
          latitude: 45.8042,
          longitude: 15.966,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:32:55.7267398'
        },
        {
          id: '8de93233-8418-4704-b1be-08dbdb851562',
          latitude: 45.80414,
          longitude: 15.96621,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:42.7267502'
        },
        {
          id: 'c6413abf-f8e6-4971-b1bf-08dbdb851562',
          latitude: 45.80414,
          longitude: 15.96564,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:55.7267577'
        },
        {
          id: '166284c8-5bd3-4e9d-b1c0-08dbdb851562',
          latitude: 45.80409,
          longitude: 15.96579,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:16.7267734'
        },
        {
          id: 'c052e7fa-eb59-4544-b1c1-08dbdb851562',
          latitude: 45.80403,
          longitude: 15.966,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:07.726791'
        },
        {
          id: '71a3e8fa-474f-4c01-b1c2-08dbdb851562',
          latitude: 45.80403,
          longitude: 15.96643,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:08.7267923'
        },
        {
          id: '16b12b4b-db59-45ac-b1c3-08dbdb851562',
          latitude: 45.804,
          longitude: 15.9666,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:24.7267959'
        },
        {
          id: '210e4f56-f10b-4c3f-b1c4-08dbdb851562',
          latitude: 45.80405,
          longitude: 15.96699,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:36.7268046'
        },
        {
          id: 'f4a9a6bf-f746-42cf-b1c5-08dbdb851562',
          latitude: 45.804,
          longitude: 15.96716,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:50.7268204'
        },
        {
          id: '08e6c3e6-d5c0-4cac-b1c6-08dbdb851562',
          latitude: 45.80396,
          longitude: 15.96733,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:08.7268363'
        },
        {
          id: 'e54a3a51-9aea-42cc-b1c7-08dbdb851562',
          latitude: 45.80391,
          longitude: 15.9675,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:52:46.7268522'
        },
        {
          id: '58cf486c-7f49-4d94-b1c8-08dbdb851562',
          latitude: 45.80384,
          longitude: 15.96776,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:48.7268658'
        },
        {
          id: 'df1eab16-509c-40f6-b1c9-08dbdb851562',
          latitude: 45.80239,
          longitude: 15.96515,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:12.7268762'
        },
        {
          id: '50420c25-76e7-4f24-b1ca-08dbdb851562',
          latitude: 45.80228,
          longitude: 15.96515,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:19.7268913'
        },
        {
          id: '4a47789c-47f3-4a23-b1cb-08dbdb851562',
          latitude: 45.80216,
          longitude: 15.96517,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:17.7269145'
        },
        {
          id: 'e361a121-b8fe-4de5-b1cc-08dbdb851562',
          latitude: 45.80202,
          longitude: 15.9652,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:05.7269264'
        },
        {
          id: '265b78d6-ea70-4647-b1cd-08dbdb851562',
          latitude: 45.80189,
          longitude: 15.96523,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:42:05.7269384'
        },
        {
          id: 'a9ff5d04-ba17-4078-b1ce-08dbdb851562',
          latitude: 45.8018,
          longitude: 15.96526,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:44.7269423'
        },
        {
          id: '9475887a-9c2f-4b65-b1cf-08dbdb851562',
          latitude: 45.80165,
          longitude: 15.96528,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:37.7269599'
        },
        {
          id: '1762ff14-e34b-4b0f-b1d0-08dbdb851562',
          latitude: 45.80174,
          longitude: 15.96682,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:03.726977'
        },
        {
          id: '22bae199-b87f-456f-b1d1-08dbdb851562',
          latitude: 45.80179,
          longitude: 15.96702,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:20.7269995'
        },
        {
          id: '5ae6ddac-cd7a-4c20-b1d2-08dbdb851562',
          latitude: 45.80254,
          longitude: 15.96631,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:24.7270151'
        },
        {
          id: '09dd8a7d-212c-4231-b1d3-08dbdb851562',
          latitude: 45.8031,
          longitude: 15.9688,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:51.7270227'
        },
        {
          id: 'bdf9aedd-19a9-4e03-b1d4-08dbdb851562',
          latitude: 45.80305,
          longitude: 15.96888,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:19.7270339'
        },
        {
          id: '08142051-1cc5-4c7e-b1d5-08dbdb851562',
          latitude: 45.80307,
          longitude: 15.96902,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:49.7270521'
        },
        {
          id: 'f84a95b9-8804-4f9d-b1d6-08dbdb851562',
          latitude: 45.80307,
          longitude: 15.9691,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:33.7270595'
        },
        {
          id: '32567665-6fc2-45aa-b1d7-08dbdb851562',
          latitude: 45.80307,
          longitude: 15.96919,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:05.7270758'
        },
        {
          id: '3e0371b2-8c82-428c-b1d8-08dbdb851562',
          latitude: 45.80307,
          longitude: 15.96926,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:13.7270839'
        },
        {
          id: 'ad401839-4569-4f5d-b1d9-08dbdb851562',
          latitude: 45.8032,
          longitude: 15.96952,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:37.7270918'
        },
        {
          id: '40d6eb61-73d5-4fe0-b1da-08dbdb851562',
          latitude: 45.8032,
          longitude: 15.96964,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:27.7270989'
        },
        {
          id: 'c19d19c4-e752-420a-b1db-08dbdb851562',
          latitude: 45.80319,
          longitude: 15.96969,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:52.7271227'
        },
        {
          id: 'a7b4b49c-809f-4a08-b1dc-08dbdb851562',
          latitude: 45.80316,
          longitude: 15.96976,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:46.7271385'
        },
        {
          id: 'e2f67daa-7a8b-4b20-b1dd-08dbdb851562',
          latitude: 45.80319,
          longitude: 15.96985,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:37.7271473'
        },
        {
          id: '40186091-59d2-40ab-b1de-08dbdb851562',
          latitude: 45.80332,
          longitude: 15.9699,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:05.7271559'
        },
        {
          id: '2f355ab2-890a-4c26-b1df-08dbdb851562',
          latitude: 45.8026,
          longitude: 15.96975,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:54.7271631'
        },
        {
          id: 'fc5ac458-f123-4a1a-b1e0-08dbdb851562',
          latitude: 45.80257,
          longitude: 15.96971,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:11.7271799'
        },
        {
          id: 'd97c9cef-2b82-4c75-b1e1-08dbdb851562',
          latitude: 45.80252,
          longitude: 15.96973,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:55.7271912'
        },
        {
          id: '64291710-6416-4933-b1e2-08dbdb851562',
          latitude: 45.80248,
          longitude: 15.96975,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:42.7272005'
        },
        {
          id: '34cc3f5d-98ca-4fe8-b1e3-08dbdb851562',
          latitude: 45.80244,
          longitude: 15.96979,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:53.7272173'
        },
        {
          id: '83dc5f8e-ed4f-4696-b1e4-08dbdb851562',
          latitude: 45.80213,
          longitude: 15.96872,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:39.7272188'
        },
        {
          id: '07a7233a-cf24-48ce-b1e5-08dbdb851562',
          latitude: 45.80208,
          longitude: 15.96872,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:25.7272334'
        },
        {
          id: '7a537db8-5426-4471-b1e6-08dbdb851562',
          latitude: 45.80211,
          longitude: 15.96848,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:16.7272522'
        },
        {
          id: '9ba2e72f-500e-4e49-b1e7-08dbdb851562',
          latitude: 45.80204,
          longitude: 15.96848,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:11.7272616'
        },
        {
          id: '3abf546a-8ae0-4720-b1e8-08dbdb851562',
          latitude: 45.80197,
          longitude: 15.96847,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:46.7272779'
        },
        {
          id: 'c930d401-bdbf-452c-b1e9-08dbdb851562',
          latitude: 45.80203,
          longitude: 15.96807,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:34.727286'
        },
        {
          id: 'c685ab5a-40d8-482a-b1ea-08dbdb851562',
          latitude: 45.80197,
          longitude: 15.96807,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:49.7272893'
        },
        {
          id: '1de83c91-aff3-4dfa-b1eb-08dbdb851562',
          latitude: 45.80191,
          longitude: 15.96807,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:20.7273077'
        },
        {
          id: 'bb1c65bf-772e-454a-b1ec-08dbdb851562',
          latitude: 45.80165,
          longitude: 15.96793,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:20.727323'
        },
        {
          id: 'cf8051ba-0371-49bd-b1ed-08dbdb851562',
          latitude: 45.80165,
          longitude: 15.96774,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7273304'
        },
        {
          id: '4c09cca4-bd82-4138-b1ee-08dbdb851562',
          latitude: 45.80168,
          longitude: 15.96757,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:09.7273406'
        },
        {
          id: 'cf1319a8-ef74-4e8e-b1ef-08dbdb851562',
          latitude: 45.80156,
          longitude: 15.96809,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:45.7273499'
        },
        {
          id: 'cbe4a7f7-eea9-4eb6-b1f0-08dbdb851562',
          latitude: 45.80156,
          longitude: 15.96792,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:07.7273712'
        },
        {
          id: 'fa1f33cd-4c9b-4785-b1f1-08dbdb851562',
          latitude: 45.80159,
          longitude: 15.96776,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:02.7273775'
        },
        {
          id: 'bc3670d8-97bb-417c-b1f2-08dbdb851562',
          latitude: 45.80159,
          longitude: 15.96763,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:59.7273809'
        },
        {
          id: '2e0a115d-f38d-4503-b1f3-08dbdb851562',
          latitude: 45.80027,
          longitude: 15.96847,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:21.7273971'
        },
        {
          id: '7660c032-5743-4a9a-b1f4-08dbdb851562',
          latitude: 45.80026,
          longitude: 15.96833,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:02.7274142'
        },
        {
          id: '75dead59-9eda-4941-b1f5-08dbdb851562',
          latitude: 45.80026,
          longitude: 15.96813,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:12.7274236'
        },
        {
          id: 'adffba27-9951-4d99-b1f6-08dbdb851562',
          latitude: 45.80019,
          longitude: 15.96812,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:34:35.7274284'
        },
        {
          id: '888822d1-fb12-438d-b1f7-08dbdb851562',
          latitude: 45.80019,
          longitude: 15.96826,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:41:55.7274386'
        },
        {
          id: '62ff798e-9de0-4fa0-b1f8-08dbdb851562',
          latitude: 45.8002,
          longitude: 15.96844,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:37.7274515'
        },
        {
          id: '4de28aaf-86eb-43ac-b1f9-08dbdb851562',
          latitude: 45.80127,
          longitude: 15.97033,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:48.7274654'
        },
        {
          id: '1d4be2cb-80f0-4550-b1fa-08dbdb851562',
          latitude: 45.8013,
          longitude: 15.97046,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:21.7274808'
        },
        {
          id: '15ad2869-94af-4286-b1fb-08dbdb851562',
          latitude: 45.80123,
          longitude: 15.97044,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:43:28.7274945'
        },
        {
          id: '99772b41-ec40-406d-b1fc-08dbdb851562',
          latitude: 45.80127,
          longitude: 15.97065,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:58.7275032'
        },
        {
          id: 'a5c73fd0-bd30-4860-b1fd-08dbdb851562',
          latitude: 45.80109,
          longitude: 15.97045,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:24.7275164'
        },
        {
          id: '5cc379a1-11f8-4191-b1fe-08dbdb851562',
          latitude: 45.80111,
          longitude: 15.97062,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:52.7275301'
        },
        {
          id: '5edb738e-baf5-44d0-b1ff-08dbdb851562',
          latitude: 45.80105,
          longitude: 15.97012,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:18.7275403'
        },
        {
          id: '134b454d-6e09-4230-b200-08dbdb851562',
          latitude: 45.80108,
          longitude: 15.9703,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:52:28.7275614'
        },
        {
          id: '6c7479c5-bc78-4d04-b201-08dbdb851562',
          latitude: 45.80096,
          longitude: 15.97016,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:21.7275637'
        },
        {
          id: 'b69127c2-cadb-44a3-b202-08dbdb851562',
          latitude: 45.80096,
          longitude: 15.97033,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:21.7275747'
        },
        {
          id: '900956aa-1ec2-44fa-b203-08dbdb851562',
          latitude: 45.80098,
          longitude: 15.97053,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:08.7275841'
        },
        {
          id: '38174e0d-5f5b-4842-b204-08dbdb851562',
          latitude: 45.80098,
          longitude: 15.97071,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:35.7275917'
        },
        {
          id: '5c82f710-b7d3-4d72-b205-08dbdb851562',
          latitude: 45.80081,
          longitude: 15.97016,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:07.727612'
        },
        {
          id: 'e767a9df-787b-4e19-b206-08dbdb851562',
          latitude: 45.80083,
          longitude: 15.97032,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:33.7276276'
        },
        {
          id: '7516df0e-7e9b-4537-b207-08dbdb851562',
          latitude: 45.80085,
          longitude: 15.97054,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:21.7276287'
        },
        {
          id: '5ec0db21-c4a2-40f5-b208-08dbdb851562',
          latitude: 45.80085,
          longitude: 15.97068,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:30.727652'
        },
        {
          id: '5ea31d48-1456-4edb-b209-08dbdb851562',
          latitude: 45.8007,
          longitude: 15.97021,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:51.7276666'
        },
        {
          id: 'd3ea98f0-62cc-4931-b20a-08dbdb851562',
          latitude: 45.80069,
          longitude: 15.97034,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:42.7276781'
        },
        {
          id: '3beb3f36-fabf-4195-b20b-08dbdb851562',
          latitude: 45.80071,
          longitude: 15.97053,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:38.7276792'
        },
        {
          id: 'c247d2b8-aa06-458c-b20c-08dbdb851562',
          latitude: 45.80074,
          longitude: 15.97069,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7276946'
        },
        {
          id: '7d135654-13a2-4c02-b20d-08dbdb851562',
          latitude: 45.80081,
          longitude: 15.9717,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:04.7276955'
        },
        {
          id: '0ab72442-0157-4b20-b20e-08dbdb851562',
          latitude: 45.80075,
          longitude: 15.9717,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:16:14.7558817'
        },
        {
          id: 'e65ac08a-3597-4884-b20f-08dbdb851562',
          latitude: 45.80071,
          longitude: 15.97169,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:09.7277281'
        },
        {
          id: '09586f43-c8a4-42e6-b210-08dbdb851562',
          latitude: 45.80067,
          longitude: 15.9717,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:17.7277368'
        },
        {
          id: '6abbe8a0-2dc8-456e-b211-08dbdb851562',
          latitude: 45.80061,
          longitude: 15.97173,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:07.7277473'
        },
        {
          id: '2ae67b86-068d-4c90-b212-08dbdb851562',
          latitude: 45.80041,
          longitude: 15.97222,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:52.7277513'
        },
        {
          id: 'f6f0a8c3-2614-482e-b213-08dbdb851562',
          latitude: 45.80035,
          longitude: 15.97223,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:45.7277551'
        },
        {
          id: '50cc7f04-832f-4f2a-b214-08dbdb851562',
          latitude: 45.80027,
          longitude: 15.97223,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:06.7277709'
        },
        {
          id: '0181a1a3-bb2d-4342-b215-08dbdb851562',
          latitude: 45.80117,
          longitude: 15.97331,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:05.7277739'
        },
        {
          id: 'c8149314-f315-4a79-b216-08dbdb851562',
          latitude: 45.80117,
          longitude: 15.97317,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:49.7277816'
        },
        {
          id: '828399b1-de7a-495d-b217-08dbdb851562',
          latitude: 45.80116,
          longitude: 15.97296,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.7277981'
        },
        {
          id: '9b8093f7-a4ed-491d-b218-08dbdb851562',
          latitude: 45.80115,
          longitude: 15.97266,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:18.7278003'
        },
        {
          id: 'fdfbb135-b420-47d0-b219-08dbdb851562',
          latitude: 45.80018,
          longitude: 15.97349,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:32.7278251'
        },
        {
          id: '1f661237-e5fa-4d40-b21a-08dbdb851562',
          latitude: 45.80018,
          longitude: 15.97332,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:17.7278304'
        },
        {
          id: '9298ba8a-b494-4697-b21b-08dbdb851562',
          latitude: 45.80017,
          longitude: 15.97312,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:50.7278451'
        },
        {
          id: '03a27922-704f-4ac7-b21c-08dbdb851562',
          latitude: 45.80019,
          longitude: 15.97294,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:30.7278475'
        },
        {
          id: '90c2cbde-2130-46f7-b21d-08dbdb851562',
          latitude: 45.80019,
          longitude: 15.97274,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:42.7278649'
        },
        {
          id: 'f9c69d40-c90d-48d1-b21e-08dbdb851562',
          latitude: 45.80017,
          longitude: 15.9724,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:53.727886'
        },
        {
          id: '6090f12e-d531-4c93-b21f-08dbdb851562',
          latitude: 45.80112,
          longitude: 15.97532,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:27.7279029'
        },
        {
          id: '88ce1e80-cdc4-4cc9-b220-08dbdb851562',
          latitude: 45.80115,
          longitude: 15.97548,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:08.7279053'
        },
        {
          id: '3311fd5a-ff48-4ef4-b221-08dbdb851562',
          latitude: 45.80105,
          longitude: 15.97532,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:11.7279231'
        },
        {
          id: '662449b3-836c-47da-b222-08dbdb851562',
          latitude: 45.80103,
          longitude: 15.97543,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:44:48.7279457'
        },
        {
          id: 'd4ca3e9a-907a-4c60-b223-08dbdb851562',
          latitude: 45.80269,
          longitude: 15.97478,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:13.727948'
        },
        {
          id: '95192a6d-66b9-40be-b224-08dbdb851562',
          latitude: 45.80268,
          longitude: 15.97492,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:49:15.7279509'
        },
        {
          id: 'b0131ee5-bcb5-4978-b225-08dbdb851562',
          latitude: 45.80267,
          longitude: 15.97505,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:50.7279571'
        },
        {
          id: 'ee8aef71-7e83-4b8e-b226-08dbdb851562',
          latitude: 45.80265,
          longitude: 15.97519,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:18.7279731'
        },
        {
          id: 'b4c12c88-ced5-43c5-b227-08dbdb851562',
          latitude: 45.80261,
          longitude: 15.97534,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:28.7279826'
        },
        {
          id: '576b0d80-3a3e-4dc5-b228-08dbdb851562',
          latitude: 45.8026,
          longitude: 15.97541,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:14.7279841'
        },
        {
          id: 'c2c89f70-1990-4a8c-b229-08dbdb851562',
          latitude: 45.80387,
          longitude: 15.97303,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:27.7280002'
        },
        {
          id: '2a6f973f-7cfe-4df4-b22a-08dbdb851562',
          latitude: 45.8039,
          longitude: 15.97327,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:31.7280162'
        },
        {
          id: '7e03ff42-3e31-478d-b22b-08dbdb851562',
          latitude: 45.80394,
          longitude: 15.97357,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:52.7280247'
        },
        {
          id: 'fde6ccbc-6564-486c-b22c-08dbdb851562',
          latitude: 45.80396,
          longitude: 15.97382,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:40.7280338'
        },
        {
          id: '22cafadf-d3f0-4490-b22d-08dbdb851562',
          latitude: 45.80398,
          longitude: 15.97402,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:51.7280511'
        },
        {
          id: '3fa8f02f-21fd-4043-b22e-08dbdb851562',
          latitude: 45.80401,
          longitude: 15.97453,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:16.7280539'
        },
        {
          id: 'ae0d5144-d7bd-4f1c-b22f-08dbdb851562',
          latitude: 45.80402,
          longitude: 15.97477,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:56.7280639'
        },
        {
          id: '79fcc019-2af0-45fb-b230-08dbdb851562',
          latitude: 45.80404,
          longitude: 15.97497,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:22.7280793'
        },
        {
          id: '0122799b-1d6c-450a-b231-08dbdb851562',
          latitude: 45.80404,
          longitude: 15.97504,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:09.7280858'
        },
        {
          id: '6cb67724-a9fe-4df3-b232-08dbdb851562',
          latitude: 45.80392,
          longitude: 15.97503,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:40.7281107'
        },
        {
          id: '9a966509-5122-4ac6-b233-08dbdb851562',
          latitude: 45.80382,
          longitude: 15.97499,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:47.7281187'
        },
        {
          id: '9e846df3-6584-4fc6-b234-08dbdb851562',
          latitude: 45.80373,
          longitude: 15.97493,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:07.7281432'
        },
        {
          id: 'd5d3941f-68d2-4aca-b235-08dbdb851562',
          latitude: 45.80394,
          longitude: 15.97526,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:55.7281547'
        },
        {
          id: '184a7073-d325-4555-b236-08dbdb851562',
          latitude: 45.80386,
          longitude: 15.97523,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7281677'
        },
        {
          id: '67e041f0-21ea-4ec4-b237-08dbdb851562',
          latitude: 45.8037,
          longitude: 15.97521,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:10.7281714'
        },
        {
          id: '8e8c0ad1-f82e-4ecf-b238-08dbdb851562',
          latitude: 45.8008,
          longitude: 15.97643,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:27.7281936'
        },
        {
          id: '8e83cb78-293b-4dc9-b239-08dbdb851562',
          latitude: 45.80082,
          longitude: 15.9766,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:36.7281988'
        },
        {
          id: 'ae675a04-0036-4c65-b23a-08dbdb851562',
          latitude: 45.80083,
          longitude: 15.97687,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:18.7282003'
        },
        {
          id: 'e15b8016-3108-4f39-b23b-08dbdb851562',
          latitude: 45.80082,
          longitude: 15.97707,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:45.7282085'
        },
        {
          id: 'f92ad851-512c-46fd-b23c-08dbdb851562',
          latitude: 45.8013,
          longitude: 15.9777,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:38.7282273'
        },
        {
          id: '10da06d5-28a4-440b-b23d-08dbdb851562',
          latitude: 45.8013,
          longitude: 15.97784,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.728235'
        },
        {
          id: 'b713ed1a-2ec7-4ff6-b23e-08dbdb851562',
          latitude: 45.80131,
          longitude: 15.97801,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:29.7282372'
        },
        {
          id: 'a5a157a3-9d05-468d-b23f-08dbdb851562',
          latitude: 45.8013,
          longitude: 15.97817,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:18.7282617'
        },
        {
          id: '45977114-f0e3-4c61-b240-08dbdb851562',
          latitude: 45.80118,
          longitude: 15.97772,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:25.7282696'
        },
        {
          id: '99486edb-93fc-41b4-b241-08dbdb851562',
          latitude: 45.80117,
          longitude: 15.97795,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:53.7282792'
        },
        {
          id: 'ed711b40-5cc6-4181-b242-08dbdb851562',
          latitude: 45.80118,
          longitude: 15.97813,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:06.7282813'
        },
        {
          id: '42cb1483-ecc5-4ac6-b243-08dbdb851562',
          latitude: 45.80119,
          longitude: 15.97831,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:42.7282889'
        },
        {
          id: '650e6d8f-3091-42a7-b244-08dbdb851562',
          latitude: 45.80225,
          longitude: 15.9776,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:52:45.7283169'
        },
        {
          id: 'd5cc76c1-0e4c-472d-b245-08dbdb851562',
          latitude: 45.80225,
          longitude: 15.97772,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:13.7283255'
        },
        {
          id: 'c195c5bc-df84-4629-b246-08dbdb851562',
          latitude: 45.80225,
          longitude: 15.97785,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:20.7283417'
        },
        {
          id: '4e4212a3-140b-40de-b247-08dbdb851562',
          latitude: 45.80226,
          longitude: 15.978,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:42.7283495'
        },
        {
          id: '834d646a-365a-4e9f-b248-08dbdb851562',
          latitude: 45.80212,
          longitude: 15.97757,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:00.7283571'
        },
        {
          id: '9fa34ee3-f302-4820-b249-08dbdb851562',
          latitude: 45.80212,
          longitude: 15.97774,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:15.7283647'
        },
        {
          id: 'a51f9ddc-dabe-42a6-b24a-08dbdb851562',
          latitude: 45.8021,
          longitude: 15.97792,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:22.7283804'
        },
        {
          id: '10339470-5ad8-4795-b24b-08dbdb851562',
          latitude: 45.79867,
          longitude: 15.97743,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:24.728389'
        },
        {
          id: '34ef0a8d-8815-4056-b24c-08dbdb851562',
          latitude: 45.79867,
          longitude: 15.97729,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:18.7284053'
        },
        {
          id: 'e1b3725a-789b-4cff-b24d-08dbdb851562',
          latitude: 45.79866,
          longitude: 15.97714,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:34.7284087'
        },
        {
          id: '2e5c331d-0926-436f-b24e-08dbdb851562',
          latitude: 45.79845,
          longitude: 15.97742,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:02.7284105'
        },
        {
          id: '746f70a3-40aa-44cf-b24f-08dbdb851562',
          latitude: 45.79833,
          longitude: 15.97737,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:08.7284322'
        },
        {
          id: 'c0f36b79-040b-438d-b250-08dbdb851562',
          latitude: 45.79823,
          longitude: 15.97731,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:24.7284326'
        },
        {
          id: 'efc4de88-1be9-4a04-b251-08dbdb851562',
          latitude: 45.79814,
          longitude: 15.97721,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:36.7284494'
        },
        {
          id: 'f5cb17d3-8899-4a2e-b252-08dbdb851562',
          latitude: 45.7978,
          longitude: 15.97588,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:40:07.7284721'
        },
        {
          id: 'c4d33c11-fb7b-43ac-b253-08dbdb851562',
          latitude: 45.7978,
          longitude: 15.97597,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:19.7284736'
        },
        {
          id: '4493b213-2e34-4ac1-b254-08dbdb851562',
          latitude: 45.7978,
          longitude: 15.97607,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:00.7284934'
        },
        {
          id: '34f2388f-c9e2-4d36-b255-08dbdb851562',
          latitude: 45.79781,
          longitude: 15.97625,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:33:28.7284973'
        },
        {
          id: '14070db0-6019-4f6f-b256-08dbdb851562',
          latitude: 45.79783,
          longitude: 15.97641,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:51:23.728502'
        },
        {
          id: '0948607b-3382-4fc2-b257-08dbdb851562',
          latitude: 45.79782,
          longitude: 15.97653,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:37.7285179'
        },
        {
          id: 'efdf2206-9d4a-4a17-b258-08dbdb851562',
          latitude: 45.79755,
          longitude: 15.976,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:25.7285272'
        },
        {
          id: '6b815f83-d8b5-41c2-b259-08dbdb851562',
          latitude: 45.79754,
          longitude: 15.97617,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:49:19.7285319'
        },
        {
          id: 'b34d9fee-a6c2-4873-b25a-08dbdb851562',
          latitude: 45.79754,
          longitude: 15.97633,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:25.728552'
        },
        {
          id: '94f8e91e-30d1-4770-b25b-08dbdb851562',
          latitude: 45.79756,
          longitude: 15.97652,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:15:31.7567196'
        },
        {
          id: '2e4c2696-ab25-41d6-b25c-08dbdb851562',
          latitude: 45.79593,
          longitude: 15.9739,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:32.7285897'
        },
        {
          id: 'd3e79b48-3b49-4e7b-b25d-08dbdb851562',
          latitude: 45.79593,
          longitude: 15.9741,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:15.7286'
        },
        {
          id: 'bff4071c-9bf0-4222-b25e-08dbdb851562',
          latitude: 45.79595,
          longitude: 15.9743,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:47.7286091'
        },
        {
          id: '130495ad-5281-4dc7-b25f-08dbdb851562',
          latitude: 45.79595,
          longitude: 15.9745,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:41:52.7286225'
        },
        {
          id: '69970a18-d75e-4acd-b260-08dbdb851562',
          latitude: 45.79595,
          longitude: 15.97467,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:13.7286402'
        },
        {
          id: 'a2c94535-1aa1-4a44-b261-08dbdb851562',
          latitude: 45.79595,
          longitude: 15.97484,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:10.7286432'
        },
        {
          id: '62e5612e-5a7a-4e20-b262-08dbdb851562',
          latitude: 45.79584,
          longitude: 15.97485,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:04.7286658'
        },
        {
          id: '841d9f99-6949-4a9d-b263-08dbdb851562',
          latitude: 45.79576,
          longitude: 15.97484,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:43.7286788'
        },
        {
          id: '266a3e33-8e81-4cf4-b264-08dbdb851562',
          latitude: 45.79571,
          longitude: 15.97484,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:50.7286907'
        },
        {
          id: 'bc1423e4-627e-4f2b-b265-08dbdb851562',
          latitude: 45.79567,
          longitude: 15.97701,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:37.7286971'
        },
        {
          id: '94451d8d-47bb-410e-b266-08dbdb851562',
          latitude: 45.7957,
          longitude: 15.97717,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:54.7286993'
        },
        {
          id: 'e3244768-615f-497c-b267-08dbdb851562',
          latitude: 45.7957,
          longitude: 15.97731,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:52:23.7287194'
        },
        {
          id: 'd2df5d5f-5313-4719-b268-08dbdb851562',
          latitude: 45.79569,
          longitude: 15.97748,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:13.7287305'
        },
        {
          id: '9d5315ad-7e62-4017-b269-08dbdb851562',
          latitude: 45.79567,
          longitude: 15.97768,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:49.7287392'
        },
        {
          id: '0e933107-bf72-4d94-b26a-08dbdb851562',
          latitude: 45.79558,
          longitude: 15.97698,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:26.7287545'
        },
        {
          id: '88de0bb5-b496-4d84-b26b-08dbdb851562',
          latitude: 45.79557,
          longitude: 15.97718,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:39.7287587'
        },
        {
          id: 'dee3bf47-c0c8-489b-b26c-08dbdb851562',
          latitude: 45.79558,
          longitude: 15.97734,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:54.7287723'
        },
        {
          id: '47f0af1c-c3b2-4e44-b26d-08dbdb851562',
          latitude: 45.79559,
          longitude: 15.9775,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:23.7287735'
        },
        {
          id: 'ee135004-ad5b-4c38-b26e-08dbdb851562',
          latitude: 45.79561,
          longitude: 15.9777,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:36.7287918'
        },
        {
          id: 'c0e4907a-41a2-4e7d-b26f-08dbdb851562',
          latitude: 45.79496,
          longitude: 15.97322,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:48.728794'
        },
        {
          id: '4f96f018-752d-437a-b270-08dbdb851562',
          latitude: 45.79493,
          longitude: 15.97336,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:34.728807'
        },
        {
          id: '10f385ec-f856-4f9a-b271-08dbdb851562',
          latitude: 45.7949,
          longitude: 15.97358,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:27.7288188'
        },
        {
          id: '8c91f1dc-506c-4886-b272-08dbdb851562',
          latitude: 45.79488,
          longitude: 15.97375,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7288198'
        },
        {
          id: 'c8f0fbdd-a5c6-4aac-b273-08dbdb851562',
          latitude: 45.79487,
          longitude: 15.97396,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:05.728828'
        },
        {
          id: '4db88fba-25a2-4026-b274-08dbdb851562',
          latitude: 45.79483,
          longitude: 15.97409,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:01.7288423'
        },
        {
          id: 'f93cee83-4f93-4d17-b275-08dbdb851562',
          latitude: 45.79822,
          longitude: 15.97463,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:04.7288512'
        },
        {
          id: 'b7552b2d-98cd-49dc-b276-08dbdb851562',
          latitude: 45.7981,
          longitude: 15.97464,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:58.728852'
        },
        {
          id: 'd53f04e6-6deb-44ae-b277-08dbdb851562',
          latitude: 45.79804,
          longitude: 15.97465,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:52.7288678'
        },
        {
          id: '92339689-6009-40eb-b278-08dbdb851562',
          latitude: 45.79793,
          longitude: 15.97465,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:54.7288847'
        },
        {
          id: '030c0619-c2ff-4fe2-b279-08dbdb851562',
          latitude: 45.79784,
          longitude: 15.97464,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:27.7288934'
        },
        {
          id: '131e2f7e-da0a-4ede-b27a-08dbdb851562',
          latitude: 45.79774,
          longitude: 15.97465,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:02.7289083'
        },
        {
          id: '8fbf8365-9de4-4654-b27b-08dbdb851562',
          latitude: 45.7976,
          longitude: 15.97464,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:21.7289242'
        },
        {
          id: '36f8e92d-2332-4655-b27c-08dbdb851562',
          latitude: 45.79753,
          longitude: 15.97464,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:32.7289417'
        },
        {
          id: 'c762e862-835e-4e49-b27d-08dbdb851562',
          latitude: 45.79744,
          longitude: 15.97464,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:07.728954'
        },
        {
          id: '1928a309-0e1c-4e28-b27e-08dbdb851562',
          latitude: 45.797,
          longitude: 15.97409,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:20.7289579'
        },
        {
          id: 'c2c130d6-8e64-4579-b27f-08dbdb851562',
          latitude: 45.79701,
          longitude: 15.97393,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:47.7289616'
        },
        {
          id: '74b45cd6-3d6c-4d9b-b280-08dbdb851562',
          latitude: 45.79704,
          longitude: 15.97379,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:42.7289779'
        },
        {
          id: '424c5df2-be57-4025-b281-08dbdb851562',
          latitude: 45.79664,
          longitude: 15.97294,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:43.7289939'
        },
        {
          id: '1bfd3f51-5847-4c62-b282-08dbdb851562',
          latitude: 45.79657,
          longitude: 15.97281,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:19.7290012'
        },
        {
          id: '752c906e-dd99-43e7-b283-08dbdb851562',
          latitude: 45.79653,
          longitude: 15.9727,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:19.7290182'
        },
        {
          id: '223f1de8-8f11-46d4-b284-08dbdb851562',
          latitude: 45.79648,
          longitude: 15.97263,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:35.7290377'
        },
        {
          id: '6e02a6c4-f0de-4dec-b285-08dbdb851562',
          latitude: 45.7964,
          longitude: 15.97255,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:42.7290481'
        },
        {
          id: '8b6593b3-ffb6-404a-b286-08dbdb851562',
          latitude: 45.79632,
          longitude: 15.97249,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:29.7290485'
        },
        {
          id: 'c9663899-3b16-4f6c-b287-08dbdb851562',
          latitude: 45.79624,
          longitude: 15.97241,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:40.7290665'
        },
        {
          id: '023cf19a-4295-428b-b288-08dbdb851562',
          latitude: 45.79615,
          longitude: 15.97233,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:51:14.7290867'
        },
        {
          id: '72b0510a-9056-43a0-b289-08dbdb851562',
          latitude: 45.79608,
          longitude: 15.97226,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:04.7290986'
        },
        {
          id: 'd7c5fe64-6cb6-45da-b28a-08dbdb851562',
          latitude: 45.79741,
          longitude: 15.97189,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:51.7291211'
        },
        {
          id: '4f0200cc-014d-422a-b28b-08dbdb851562',
          latitude: 45.7974,
          longitude: 15.97171,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:56.7291354'
        },
        {
          id: '2f0224f7-7c6f-450d-b28c-08dbdb851562',
          latitude: 45.79731,
          longitude: 15.97168,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:04.7291495'
        },
        {
          id: 'c4fe3e0f-045d-4b2e-b28d-08dbdb851562',
          latitude: 45.79725,
          longitude: 15.97168,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:44.729159'
        },
        {
          id: '6fbbb144-acf0-4f16-b28e-08dbdb851562',
          latitude: 45.7972,
          longitude: 15.97167,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:29.7291719'
        },
        {
          id: '38532821-1096-4e46-b28f-08dbdb851562',
          latitude: 45.7972,
          longitude: 15.97176,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:21.7291819'
        },
        {
          id: '645107fa-7ede-4777-b290-08dbdb851562',
          latitude: 45.7972,
          longitude: 15.97188,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:56.7291899'
        },
        {
          id: '5a104513-af86-4f75-b291-08dbdb851562',
          latitude: 45.797,
          longitude: 15.97107,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:50:23.7292172'
        },
        {
          id: '94031319-2995-436f-b292-08dbdb851562',
          latitude: 45.79693,
          longitude: 15.97105,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:50:11.729232'
        },
        {
          id: 'b9c44955-81cc-4949-b293-08dbdb851562',
          latitude: 45.79685,
          longitude: 15.97106,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:09:22.7574011'
        },
        {
          id: '7b06e3bf-8dce-4b14-b294-08dbdb851562',
          latitude: 45.79678,
          longitude: 15.97106,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:29.7292667'
        },
        {
          id: '04f4ec81-6bf3-4c17-b295-08dbdb851562',
          latitude: 45.79673,
          longitude: 15.97106,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:44:15.7292777'
        },
        {
          id: 'dda98167-0e44-4ff0-b296-08dbdb851562',
          latitude: 45.79701,
          longitude: 15.97088,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:00.7292884'
        },
        {
          id: 'f428e283-569c-4946-b297-08dbdb851562',
          latitude: 45.79694,
          longitude: 15.97087,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:34.7292911'
        },
        {
          id: '51376821-575e-4008-b298-08dbdb851562',
          latitude: 45.79688,
          longitude: 15.97086,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:14.7293049'
        },
        {
          id: '4ba8bd2b-a75b-4149-b299-08dbdb851562',
          latitude: 45.7968,
          longitude: 15.97086,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:58.7293171'
        },
        {
          id: '3cc171b0-05b6-4623-b29a-08dbdb851562',
          latitude: 45.79675,
          longitude: 15.97086,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:48.729346'
        },
        {
          id: '377cbe1a-86b3-4de6-b29b-08dbdb851562',
          latitude: 45.7967,
          longitude: 15.97084,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:55.7293594'
        },
        {
          id: '3ad99843-1282-4cbf-b29c-08dbdb851562',
          latitude: 45.79787,
          longitude: 15.96964,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:39.7293821'
        },
        {
          id: 'cba417ac-bf53-489a-b29d-08dbdb851562',
          latitude: 45.79785,
          longitude: 15.96949,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:00.7293959'
        },
        {
          id: '4df55613-f791-44ee-b29e-08dbdb851562',
          latitude: 45.79784,
          longitude: 15.96934,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:58.7294058'
        },
        {
          id: 'd9253f1f-3f52-4e80-b29f-08dbdb851562',
          latitude: 45.79784,
          longitude: 15.96918,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:52:21.7294197'
        },
        {
          id: 'fd7f2a22-c682-4ffd-b2a0-08dbdb851562',
          latitude: 45.79766,
          longitude: 15.96968,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:27.7294207'
        },
        {
          id: '6a3ecd6c-f240-4df1-b2a1-08dbdb851562',
          latitude: 45.79766,
          longitude: 15.96948,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:42:04.7294329'
        },
        {
          id: '0f46883a-b7b7-474b-b2a2-08dbdb851562',
          latitude: 45.79758,
          longitude: 15.96969,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:31.7294511'
        },
        {
          id: 'b253d93b-125a-4d18-b2a3-08dbdb851562',
          latitude: 45.79759,
          longitude: 15.96946,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:39.7294745'
        },
        {
          id: 'd5f15a4b-3ee7-403d-b2a4-08dbdb851562',
          latitude: 45.79744,
          longitude: 15.96972,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:11.7294848'
        },
        {
          id: '5ee277e4-2290-4a47-b2a5-08dbdb851562',
          latitude: 45.79742,
          longitude: 15.96949,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:34.7295091'
        },
        {
          id: '8eef3f81-aa8e-4f0c-b2a6-08dbdb851562',
          latitude: 45.79733,
          longitude: 15.96973,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:57.7295242'
        },
        {
          id: 'f170f83b-3baa-45de-b2a7-08dbdb851562',
          latitude: 45.79733,
          longitude: 15.96951,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:51.7295447'
        },
        {
          id: '3b2d6f09-d471-4c4a-b2a8-08dbdb851562',
          latitude: 45.79771,
          longitude: 15.96824,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:06.7295474'
        },
        {
          id: 'd982fd09-a65f-4b82-b2a9-08dbdb851562',
          latitude: 45.79762,
          longitude: 15.96825,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:39:46.7295559'
        },
        {
          id: '2472e28d-582b-4414-b2aa-08dbdb851562',
          latitude: 45.79756,
          longitude: 15.96825,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:27.7295636'
        },
        {
          id: '1af97ce5-edc9-4796-b2ab-08dbdb851562',
          latitude: 45.7975,
          longitude: 15.96825,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:21.7295651'
        },
        {
          id: 'b02a8650-8c33-47f8-b2ac-08dbdb851562',
          latitude: 45.79742,
          longitude: 15.96827,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:15.7295777'
        },
        {
          id: 'c3521a42-9f26-485a-b2ad-08dbdb851562',
          latitude: 45.79736,
          longitude: 15.96828,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:11.7295868'
        },
        {
          id: '01dd2a27-4ca4-4e48-b2ae-08dbdb851562',
          latitude: 45.79724,
          longitude: 15.96828,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:46.7295971'
        },
        {
          id: 'ebc3059e-dd3b-4f63-b2af-08dbdb851562',
          latitude: 45.79567,
          longitude: 15.96749,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:18.7296066'
        },
        {
          id: '36ca12ee-3d83-47c3-b2b0-08dbdb851562',
          latitude: 45.79568,
          longitude: 15.96765,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:53:15.7296204'
        },
        {
          id: '28b8f913-da6d-4143-b2b1-08dbdb851562',
          latitude: 45.79568,
          longitude: 15.96773,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:47.729622'
        },
        {
          id: '6d21f19b-0100-4b26-b2b2-08dbdb851562',
          latitude: 45.79564,
          longitude: 15.96795,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:46.7296408'
        },
        {
          id: '5bbb06ea-5fba-47d6-b2b3-08dbdb851562',
          latitude: 45.79564,
          longitude: 15.96804,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:58.7296534'
        },
        {
          id: '094a8198-f42a-4f88-b2b4-08dbdb851562',
          latitude: 45.79561,
          longitude: 15.96817,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:35.7296565'
        },
        {
          id: '84eb1fa1-f17f-430e-b2b5-08dbdb851562',
          latitude: 45.79622,
          longitude: 15.96904,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:25.7296792'
        },
        {
          id: '6e8a9c26-fa70-4929-b2b6-08dbdb851562',
          latitude: 45.79617,
          longitude: 15.96917,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:28.7296891'
        },
        {
          id: 'dbee2cca-5231-46f6-b2b7-08dbdb851562',
          latitude: 45.79613,
          longitude: 15.96928,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:42:20.729701'
        },
        {
          id: '8df0bac0-b9fb-4317-b2b8-08dbdb851562',
          latitude: 45.79608,
          longitude: 15.96937,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:08.729722'
        },
        {
          id: 'ca920806-e127-4acd-b2b9-08dbdb851562',
          latitude: 45.79602,
          longitude: 15.96943,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:03.7297244'
        },
        {
          id: 'fe12b62e-2bc3-4a45-b2ba-08dbdb851562',
          latitude: 45.79594,
          longitude: 15.96948,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:53.729737'
        },
        {
          id: '46512c33-b62b-4ed4-b2bb-08dbdb851562',
          latitude: 45.79873,
          longitude: 15.96528,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:40.7297515'
        },
        {
          id: '27d7c570-ca1b-4008-b2bc-08dbdb851562',
          latitude: 45.79863,
          longitude: 15.96528,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:20.7297526'
        },
        {
          id: '85cdf0f1-6a34-46f8-b2bd-08dbdb851562',
          latitude: 45.79856,
          longitude: 15.96529,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:15.7297635'
        },
        {
          id: 'f0efe5fa-8905-4304-b2be-08dbdb851562',
          latitude: 45.79849,
          longitude: 15.9653,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:13.7297653'
        },
        {
          id: '7c6c1036-0359-4ecb-b2bf-08dbdb851562',
          latitude: 45.79842,
          longitude: 15.96531,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:05.7297766'
        },
        {
          id: 'eb6d9995-5a0b-4fef-b2c0-08dbdb851562',
          latitude: 45.79836,
          longitude: 15.96531,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7297839'
        },
        {
          id: '9fa77eac-e076-41db-b2c1-08dbdb851562',
          latitude: 45.79828,
          longitude: 15.96532,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:20.7297997'
        },
        {
          id: '44beb668-c6aa-4964-b2c2-08dbdb851562',
          latitude: 45.79819,
          longitude: 15.96532,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:00.7298024'
        },
        {
          id: '4feb2e39-3b1b-40a7-b2c3-08dbdb851562',
          latitude: 45.79814,
          longitude: 15.96533,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T18:01:29.7530776'
        },
        {
          id: 'a6b96bd8-3d39-4f78-b2c4-08dbdb851562',
          latitude: 45.79807,
          longitude: 15.96533,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:03.7298338'
        },
        {
          id: '922122fc-b6c9-4f22-b2c5-08dbdb851562',
          latitude: 45.79801,
          longitude: 15.96534,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:49:42.7298591'
        },
        {
          id: '47cee346-36b6-4d81-b2c6-08dbdb851562',
          latitude: 45.79795,
          longitude: 15.96536,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:00.7298721'
        },
        {
          id: 'e130c308-fb08-4c71-b2c7-08dbdb851562',
          latitude: 45.79789,
          longitude: 15.96536,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:32.7298941'
        },
        {
          id: '91e0e17e-5c08-4d3c-b2c8-08dbdb851562',
          latitude: 45.7978,
          longitude: 15.96536,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:31.7298957'
        },
        {
          id: '340df302-b62b-47c6-b2c9-08dbdb851562',
          latitude: 45.79605,
          longitude: 15.96598,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:43:49.7299099'
        },
        {
          id: 'fa47059f-ff60-449f-b2ca-08dbdb851562',
          latitude: 45.79605,
          longitude: 15.96589,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:54.7299212'
        },
        {
          id: 'cb2e3842-3ba1-479f-b2cb-08dbdb851562',
          latitude: 45.7956,
          longitude: 15.96297,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:31.7299358'
        },
        {
          id: '8a02e5a3-42c5-4980-b2cc-08dbdb851562',
          latitude: 45.79562,
          longitude: 15.96321,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:22.7299555'
        },
        {
          id: '2861f431-35c0-4786-b2cd-08dbdb851562',
          latitude: 45.79562,
          longitude: 15.96349,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:57.7299571'
        },
        {
          id: 'ca2816af-e0c5-4fb6-b2ce-08dbdb851562',
          latitude: 45.79561,
          longitude: 15.96378,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:07.7299681'
        },
        {
          id: '526a506a-82eb-430f-b2cf-08dbdb851562',
          latitude: 45.79564,
          longitude: 15.96401,
          parkingSpotZone: 'Zone2',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:56.7299776'
        },
        {
          id: '6ef7e15e-9b81-44c3-b2d0-08dbdb851562',
          latitude: 45.7954,
          longitude: 15.96296,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:32.7299927'
        },
        {
          id: '3a88bc7a-b86f-4a01-b2d1-08dbdb851562',
          latitude: 45.7954,
          longitude: 15.96325,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:37.7299989'
        },
        {
          id: '1ce85762-3576-4771-b2d2-08dbdb851562',
          latitude: 45.79541,
          longitude: 15.96348,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:51.730008'
        },
        {
          id: 'a2c5f7d6-e834-4b17-b2d3-08dbdb851562',
          latitude: 45.7954,
          longitude: 15.96371,
          parkingSpotZone: 'Zone2',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:01.730019'
        },
        {
          id: 'a6f13359-358a-4544-b2d4-08dbdb851562',
          latitude: 45.79372,
          longitude: 15.96801,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:43.7300278'
        },
        {
          id: 'b279ca44-5caf-452e-b2d5-08dbdb851562',
          latitude: 45.79364,
          longitude: 15.96799,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:52.730051'
        },
        {
          id: '19c6227f-bf89-45cf-b2d6-08dbdb851562',
          latitude: 45.79351,
          longitude: 15.96801,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:48.7300684'
        },
        {
          id: 'de10ec8c-6885-416c-b2d7-08dbdb851562',
          latitude: 45.7934,
          longitude: 15.968,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:41.7300791'
        },
        {
          id: '7c981533-e11d-4659-b2d8-08dbdb851562',
          latitude: 45.79328,
          longitude: 15.96801,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:17.7301043'
        },
        {
          id: 'de849800-581b-4614-b2d9-08dbdb851562',
          latitude: 45.79319,
          longitude: 15.96802,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:15:43.7582631'
        },
        {
          id: 'c99918f8-b7a9-453a-b2da-08dbdb851562',
          latitude: 45.7931,
          longitude: 15.96802,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:52:43.7301435'
        },
        {
          id: '4e5625c6-797b-4c63-b2db-08dbdb851562',
          latitude: 45.79298,
          longitude: 15.96803,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:05.730153'
        },
        {
          id: '309a25e7-038a-49d1-b2dc-08dbdb851562',
          latitude: 45.79287,
          longitude: 15.96803,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:53:38.7301776'
        },
        {
          id: '4620df88-c9d2-426c-b2dd-08dbdb851562',
          latitude: 45.79276,
          longitude: 15.96805,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:59.7301789'
        },
        {
          id: '2ee60882-6e98-4f5f-b2de-08dbdb851562',
          latitude: 45.79265,
          longitude: 15.96805,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:24.7301967'
        },
        {
          id: '4ef2f3c6-a908-4aa2-b2df-08dbdb851562',
          latitude: 45.79261,
          longitude: 15.96806,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:45.7302138'
        },
        {
          id: '58efc432-a49d-4690-b2e0-08dbdb851562',
          latitude: 45.79263,
          longitude: 15.96824,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:43.7302214'
        },
        {
          id: '2ed202bf-b319-40ba-b2e1-08dbdb851562',
          latitude: 45.79265,
          longitude: 15.96843,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.7302469'
        },
        {
          id: 'c183bede-07c4-468a-b2e2-08dbdb851562',
          latitude: 45.79265,
          longitude: 15.96864,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:53.7302554'
        },
        {
          id: 'ea929ef7-8f8e-460f-b2e3-08dbdb851562',
          latitude: 45.79378,
          longitude: 15.9677,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:32.7302784'
        },
        {
          id: 'a5b759a5-f66b-4bec-b2e4-08dbdb851562',
          latitude: 45.79365,
          longitude: 15.96771,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:16.7302889'
        },
        {
          id: 'be894902-a826-492b-b2e5-08dbdb851562',
          latitude: 45.79355,
          longitude: 15.9677,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:41:07.7303071'
        },
        {
          id: '9045b8e8-ce44-4bc7-b2e6-08dbdb851562',
          latitude: 45.79346,
          longitude: 15.96772,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:39.7303151'
        },
        {
          id: '51c5d8bb-7805-417d-b2e7-08dbdb851562',
          latitude: 45.79337,
          longitude: 15.96772,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:17:42.7584518'
        },
        {
          id: 'e666a950-fe43-4dd1-b2e8-08dbdb851562',
          latitude: 45.7933,
          longitude: 15.96773,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:18.7303554'
        },
        {
          id: '322494cb-148b-488c-b2e9-08dbdb851562',
          latitude: 45.79322,
          longitude: 15.96773,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:17:13.7584826'
        },
        {
          id: '10ca478c-b12a-4ef4-b2ea-08dbdb851562',
          latitude: 45.79311,
          longitude: 15.96773,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:45.7304042'
        },
        {
          id: '4f555880-fe01-42a6-b2eb-08dbdb851562',
          latitude: 45.79299,
          longitude: 15.96774,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:08:36.7585065'
        },
        {
          id: '9bff081e-12ff-4eec-b2ec-08dbdb851562',
          latitude: 45.79291,
          longitude: 15.96774,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.7304495'
        },
        {
          id: 'f69a87b7-a78f-40db-b2ed-08dbdb851562',
          latitude: 45.79282,
          longitude: 15.96773,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:38.7304664'
        },
        {
          id: 'cfd73579-80c4-4f3f-b2ee-08dbdb851562',
          latitude: 45.79273,
          longitude: 15.96774,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:32.7304743'
        },
        {
          id: '4c033bf6-20f8-4761-b2ef-08dbdb851562',
          latitude: 45.79265,
          longitude: 15.96774,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:28.7304882'
        },
        {
          id: '91311d01-3fbd-405a-b2f0-08dbdb851562',
          latitude: 45.79375,
          longitude: 15.96683,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:08.7305032'
        },
        {
          id: 'bdc8f6fe-cc32-4e2f-b2f1-08dbdb851562',
          latitude: 45.79361,
          longitude: 15.96685,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:58.730521'
        },
        {
          id: '5036d681-505c-48ed-b2f2-08dbdb851562',
          latitude: 45.79346,
          longitude: 15.96686,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:42:26.7305359'
        },
        {
          id: 'f691afdf-6c1a-4941-b2f3-08dbdb851562',
          latitude: 45.79331,
          longitude: 15.96688,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:52:38.7305593'
        },
        {
          id: '02e872e2-814d-4d91-b2f4-08dbdb851562',
          latitude: 45.79322,
          longitude: 15.96688,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:44.7305701'
        },
        {
          id: 'a1d28afe-989b-4e6b-b2f5-08dbdb851562',
          latitude: 45.79308,
          longitude: 15.96689,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:09.7305787'
        },
        {
          id: 'c2319663-dbc3-4c47-b2f6-08dbdb851562',
          latitude: 45.79296,
          longitude: 15.96691,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.7305964'
        },
        {
          id: 'e7d22346-74c2-4435-b2f7-08dbdb851562',
          latitude: 45.7929,
          longitude: 15.96692,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:11.7306048'
        },
        {
          id: 'fc36822d-3315-43aa-b2f8-08dbdb851562',
          latitude: 45.79279,
          longitude: 15.96692,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:19.7306206'
        },
        {
          id: 'b5c27d14-6044-4387-b2f9-08dbdb851562',
          latitude: 45.79268,
          longitude: 15.96692,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:47.7306406'
        },
        {
          id: '49da6253-778e-4991-b2fa-08dbdb851562',
          latitude: 45.79259,
          longitude: 15.96692,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:45.7306553'
        },
        {
          id: '203d6396-5151-46ef-b2fb-08dbdb851562',
          latitude: 45.79375,
          longitude: 15.9666,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:12.730657'
        },
        {
          id: '6b197a48-3634-4078-b2fc-08dbdb851562',
          latitude: 45.79364,
          longitude: 15.96659,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:15:40.7588032'
        },
        {
          id: '05045a01-d486-4d0d-b2fd-08dbdb851562',
          latitude: 45.79351,
          longitude: 15.96656,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:32.7306971'
        },
        {
          id: 'f2cfb6bf-22c1-4ff3-b2fe-08dbdb851562',
          latitude: 45.7934,
          longitude: 15.96656,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:41.7307098'
        },
        {
          id: '46361c63-f908-438a-b2ff-08dbdb851562',
          latitude: 45.79329,
          longitude: 15.96655,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:10:45.7588405'
        },
        {
          id: '91706102-a2e8-44fe-b300-08dbdb851562',
          latitude: 45.79313,
          longitude: 15.9666,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:37.7307419'
        },
        {
          id: '2999c7e3-22d2-45b5-b301-08dbdb851562',
          latitude: 45.79301,
          longitude: 15.96658,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:00.7307559'
        },
        {
          id: 'd3f40dc4-d8f2-4ca9-b302-08dbdb851562',
          latitude: 45.7929,
          longitude: 15.96658,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:06.7307674'
        },
        {
          id: '120e9bd5-b313-4ed9-b303-08dbdb851562',
          latitude: 45.7928,
          longitude: 15.96658,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:17:41.7589051'
        },
        {
          id: '82d35a1e-da98-4859-b304-08dbdb851562',
          latitude: 45.79268,
          longitude: 15.96658,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:56.7308064'
        },
        {
          id: '68bcb739-d909-4808-b305-08dbdb851562',
          latitude: 45.79259,
          longitude: 15.96655,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:56.7308382'
        },
        {
          id: 'c60c6642-7a16-41d0-b306-08dbdb851562',
          latitude: 45.7937,
          longitude: 15.96575,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:21.7308478'
        },
        {
          id: '6276a5b6-b40b-4c0f-b307-08dbdb851562',
          latitude: 45.79355,
          longitude: 15.96574,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:27.7308565'
        },
        {
          id: '4b6ffd4a-3104-42e7-b308-08dbdb851562',
          latitude: 45.79346,
          longitude: 15.96575,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:27.7308726'
        },
        {
          id: '559b3699-4020-4ef6-b309-08dbdb851562',
          latitude: 45.79334,
          longitude: 15.96575,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:28.7308893'
        },
        {
          id: 'c6872c82-834c-4121-b30a-08dbdb851562',
          latitude: 45.79322,
          longitude: 15.96577,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:15:16.759036'
        },
        {
          id: 'be382e14-bbe1-45bf-b30b-08dbdb851562',
          latitude: 45.79307,
          longitude: 15.96577,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:41.7309388'
        },
        {
          id: '3315ddaf-be3e-48b2-b30c-08dbdb851562',
          latitude: 45.79297,
          longitude: 15.96577,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:21.7309553'
        },
        {
          id: '0f01f262-7df7-47fd-b30d-08dbdb851562',
          latitude: 45.79284,
          longitude: 15.96577,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:12.7309656'
        },
        {
          id: '987b770b-e3bd-4736-b30e-08dbdb851562',
          latitude: 45.79275,
          longitude: 15.96579,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:35.7309763'
        },
        {
          id: '68ef6af8-d1fa-43e6-b30f-08dbdb851562',
          latitude: 45.79268,
          longitude: 15.9658,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:03.7309838'
        },
        {
          id: 'ca260a93-b26b-4591-b310-08dbdb851562',
          latitude: 45.79258,
          longitude: 15.96581,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:07.7309858'
        },
        {
          id: 'c92eb3ef-e88e-4fe7-b311-08dbdb851562',
          latitude: 45.79378,
          longitude: 15.96544,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:28.7310086'
        },
        {
          id: 'e3595d91-005c-4185-b312-08dbdb851562',
          latitude: 45.79362,
          longitude: 15.96543,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:15.7310089'
        },
        {
          id: 'c75e7c3b-f233-4579-b313-08dbdb851562',
          latitude: 45.79352,
          longitude: 15.96543,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:20.7310328'
        },
        {
          id: 'fc7693bc-6da3-444b-b314-08dbdb851562',
          latitude: 45.79335,
          longitude: 15.96542,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:58.7310493'
        },
        {
          id: 'b7c26a47-3b8a-429b-b315-08dbdb851562',
          latitude: 45.79319,
          longitude: 15.96541,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:17.7310624'
        },
        {
          id: 'fc3ef953-c902-4f82-b316-08dbdb851562',
          latitude: 45.7931,
          longitude: 15.96539,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:17.7310792'
        },
        {
          id: '0ceba36a-8d38-46c2-b317-08dbdb851562',
          latitude: 45.793,
          longitude: 15.96539,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:10.7310889'
        },
        {
          id: 'bf4e851e-ede7-4600-b318-08dbdb851562',
          latitude: 45.7929,
          longitude: 15.96543,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:04.7310965'
        },
        {
          id: 'b3c1c725-d9fd-4c17-b319-08dbdb851562',
          latitude: 45.7928,
          longitude: 15.96544,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:53:13.7311129'
        },
        {
          id: 'aae3197c-3492-4a0e-b31a-08dbdb851562',
          latitude: 45.7927,
          longitude: 15.96545,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:04.7311219'
        },
        {
          id: 'dc84cea7-f51d-46b3-b31b-08dbdb851562',
          latitude: 45.7926,
          longitude: 15.96544,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:48.731137'
        },
        {
          id: '5f3c562e-2d07-4346-b31c-08dbdb851562',
          latitude: 45.79248,
          longitude: 15.96543,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:16.7311522'
        },
        {
          id: '26750946-2c84-485b-b31d-08dbdb851562',
          latitude: 45.7918,
          longitude: 15.96817,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:04.7311765'
        },
        {
          id: 'c402b0bd-47ec-47a6-b31e-08dbdb851562',
          latitude: 45.79166,
          longitude: 15.96815,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:41:11.7311963'
        },
        {
          id: '77931b1f-ba66-4c76-b31f-08dbdb851562',
          latitude: 45.79184,
          longitude: 15.96791,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:32.7312205'
        },
        {
          id: 'a42f36f7-c2e7-45ac-b320-08dbdb851562',
          latitude: 45.79171,
          longitude: 15.96791,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:52.7312305'
        },
        {
          id: '68ca0c7d-2170-425e-b321-08dbdb851562',
          latitude: 45.79184,
          longitude: 15.96704,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:06.7312538'
        },
        {
          id: '56a37c08-7986-43d3-b322-08dbdb851562',
          latitude: 45.79169,
          longitude: 15.96703,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:04.7312615'
        },
        {
          id: '7c5dac1c-f9cb-4f3b-b323-08dbdb851562',
          latitude: 45.79275,
          longitude: 15.96225,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:13.7312718'
        },
        {
          id: 'e2f34e89-509a-4854-b324-08dbdb851562',
          latitude: 45.79276,
          longitude: 15.96237,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:28.7312873'
        },
        {
          id: '459ebfff-0967-47fe-b325-08dbdb851562',
          latitude: 45.79276,
          longitude: 15.9625,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:13.7312941'
        },
        {
          id: '19169e47-8753-466a-b326-08dbdb851562',
          latitude: 45.79276,
          longitude: 15.96267,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:50:07.7313293'
        },
        {
          id: 'd92f088b-c603-4dfd-b327-08dbdb851562',
          latitude: 45.79262,
          longitude: 15.96226,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:27.7313411'
        },
        {
          id: '94c150ea-8754-409e-b328-08dbdb851562',
          latitude: 45.79262,
          longitude: 15.96241,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:02.7313579'
        },
        {
          id: 'bc833043-8460-4a94-b329-08dbdb851562',
          latitude: 45.7926,
          longitude: 15.96255,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:14.7313654'
        },
        {
          id: '979f7f23-f3f3-4f67-b32a-08dbdb851562',
          latitude: 45.7926,
          longitude: 15.96271,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:51.7313824'
        },
        {
          id: '7205a655-c4f6-45ef-b32b-08dbdb851562',
          latitude: 45.79221,
          longitude: 15.96222,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:44:58.7314042'
        },
        {
          id: 'cbf81108-e31a-4a0e-b32c-08dbdb851562',
          latitude: 45.79212,
          longitude: 15.96221,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:33.7314195'
        },
        {
          id: 'b9a68161-e684-493b-b32d-08dbdb851562',
          latitude: 45.79207,
          longitude: 15.96221,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:05.7314225'
        },
        {
          id: '400b80cf-3735-4a42-b32e-08dbdb851562',
          latitude: 45.79201,
          longitude: 15.96223,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:55.731433'
        },
        {
          id: 'b6e0afb7-8bf2-4ce7-b32f-08dbdb851562',
          latitude: 45.79193,
          longitude: 15.96223,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:34.7314437'
        },
        {
          id: 'b5fb513a-4ac1-47af-b330-08dbdb851562',
          latitude: 45.79185,
          longitude: 15.96223,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.7314659'
        },
        {
          id: 'b1593863-ee3c-4224-b331-08dbdb851562',
          latitude: 45.79179,
          longitude: 15.96222,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:26.7314742'
        },
        {
          id: '900724f6-d103-483f-b332-08dbdb851562',
          latitude: 45.79171,
          longitude: 15.96223,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:26.7314834'
        },
        {
          id: 'e1ed590d-9f3d-4815-b333-08dbdb851562',
          latitude: 45.79161,
          longitude: 15.96223,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:37:54.7315054'
        },
        {
          id: '0e084ab7-8dbd-41c8-b334-08dbdb851562',
          latitude: 45.79153,
          longitude: 15.96222,
          parkingSpotZone: 'Zone3',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:30.7315408'
        },
        {
          id: 'dd8d9d72-2558-44f7-b335-08dbdb851562',
          latitude: 45.79147,
          longitude: 15.96224,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:51:54.7315488'
        },
        {
          id: '29824802-65bb-4077-b336-08dbdb851562',
          latitude: 45.79137,
          longitude: 15.96222,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:58.731553'
        },
        {
          id: '94d7e5e6-c135-445e-b337-08dbdb851562',
          latitude: 45.79129,
          longitude: 15.96223,
          parkingSpotZone: 'Zone3',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:34.7315634'
        },
        {
          id: '2ee4c06c-f5c6-4c78-b338-08dbdb851562',
          latitude: 45.80213,
          longitude: 15.97033,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:58.7315801'
        },
        {
          id: '824c0c85-db00-461c-b339-08dbdb851562',
          latitude: 45.80209,
          longitude: 15.97035,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:59.7315964'
        },
        {
          id: '0934bd71-3981-4d26-b33a-08dbdb851562',
          latitude: 45.80206,
          longitude: 15.97039,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:16.7316133'
        },
        {
          id: 'c8118efd-d9b5-4db5-b33b-08dbdb851562',
          latitude: 45.80202,
          longitude: 15.97042,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:57.7316149'
        },
        {
          id: '38303aa2-63aa-47ce-b33c-08dbdb851562',
          latitude: 45.802,
          longitude: 15.97045,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:07.7316235'
        },
        {
          id: '8a0ded7c-d644-4c35-b33d-08dbdb851562',
          latitude: 45.80197,
          longitude: 15.97046,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:37.7316323'
        },
        {
          id: '94c36d13-b35f-476c-b33e-08dbdb851562',
          latitude: 45.80194,
          longitude: 15.97048,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:07.7316377'
        },
        {
          id: '9e297c5c-b829-47da-b33f-08dbdb851562',
          latitude: 45.80191,
          longitude: 15.9705,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:01.7316453'
        },
        {
          id: 'cc692981-63fc-4055-b340-08dbdb851562',
          latitude: 45.80187,
          longitude: 15.97053,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.7316564'
        },
        {
          id: '3b52e938-9d9b-4e9f-b341-08dbdb851562',
          latitude: 45.80185,
          longitude: 15.97054,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:43:20.7316622'
        },
        {
          id: '8de0145b-dc18-41b8-b342-08dbdb851562',
          latitude: 45.80182,
          longitude: 15.97057,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:19.7316703'
        },
        {
          id: 'fb497c82-8ce5-474b-b343-08dbdb851562',
          latitude: 45.80178,
          longitude: 15.97059,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:13.7316823'
        },
        {
          id: '4a20d76f-9fb5-4bf9-b344-08dbdb851562',
          latitude: 45.80176,
          longitude: 15.97061,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:39.731692'
        },
        {
          id: 'dfbb03ea-9a92-4689-b345-08dbdb851562',
          latitude: 45.80173,
          longitude: 15.97063,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:53:14.7317026'
        },
        {
          id: '8846381d-7bbb-4477-b346-08dbdb851562',
          latitude: 45.80218,
          longitude: 15.9705,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:57.7317062'
        },
        {
          id: '771e9fdd-2d01-4313-b347-08dbdb851562',
          latitude: 45.80215,
          longitude: 15.97053,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:02.7317169'
        },
        {
          id: '0204fb5a-2d97-45ab-b348-08dbdb851562',
          latitude: 45.80212,
          longitude: 15.97055,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:38.7317244'
        },
        {
          id: '19a54597-8db5-4caf-b349-08dbdb851562',
          latitude: 45.80209,
          longitude: 15.97056,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:30.7317359'
        },
        {
          id: 'c7d46e44-24c8-4516-b34a-08dbdb851562',
          latitude: 45.80206,
          longitude: 15.97058,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:09.7317453'
        },
        {
          id: '2f30acd6-f858-432e-b34b-08dbdb851562',
          latitude: 45.80204,
          longitude: 15.9706,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:51:43.7317652'
        },
        {
          id: '2ffe7960-4103-4e65-b34c-08dbdb851562',
          latitude: 45.80201,
          longitude: 15.97063,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:06.7317693'
        },
        {
          id: '439e3ad9-5038-4087-b34d-08dbdb851562',
          latitude: 45.80199,
          longitude: 15.97065,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:11.7317697'
        },
        {
          id: 'cae1f4fd-5158-45ee-b34e-08dbdb851562',
          latitude: 45.80197,
          longitude: 15.97067,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:50:16.7317902'
        },
        {
          id: '1b8b6e0b-2da0-4093-b34f-08dbdb851562',
          latitude: 45.80195,
          longitude: 15.97068,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:10.7318038'
        },
        {
          id: '7eae27d4-adab-4ac7-b350-08dbdb851562',
          latitude: 45.80192,
          longitude: 15.97069,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:12.7318122'
        },
        {
          id: 'b168895d-f085-4f59-b351-08dbdb851562',
          latitude: 45.8019,
          longitude: 15.97071,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:50:57.7318341'
        },
        {
          id: 'e95fe0f4-519e-48f1-b352-08dbdb851562',
          latitude: 45.80187,
          longitude: 15.97074,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:11.7318465'
        },
        {
          id: '165a6f9a-ef7e-466f-b353-08dbdb851562',
          latitude: 45.80185,
          longitude: 15.97075,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:42.73186'
        },
        {
          id: '7b9ce727-0b7f-42f0-b354-08dbdb851562',
          latitude: 45.80183,
          longitude: 15.97077,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:22.7318693'
        },
        {
          id: 'f92b4f64-2aab-4d8d-b355-08dbdb851562',
          latitude: 45.80182,
          longitude: 15.97078,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:20.7318797'
        },
        {
          id: '7885c41c-6fef-4dfb-b356-08dbdb851562',
          latitude: 45.80225,
          longitude: 15.9707,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:00.7318842'
        },
        {
          id: 'ebb04734-cc6d-4af8-b357-08dbdb851562',
          latitude: 45.80221,
          longitude: 15.97071,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:44:48.7318996'
        },
        {
          id: 'ddff9fe2-130a-4a07-b358-08dbdb851562',
          latitude: 45.80218,
          longitude: 15.97073,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:50.7319074'
        },
        {
          id: '92d243b4-a641-42b0-b359-08dbdb851562',
          latitude: 45.80216,
          longitude: 15.97075,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:03.7319242'
        },
        {
          id: '4f4c8e12-020f-4eed-b35a-08dbdb851562',
          latitude: 45.80213,
          longitude: 15.97076,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:05.7319395'
        },
        {
          id: '6d70eeb1-94c4-490b-b35b-08dbdb851562',
          latitude: 45.80211,
          longitude: 15.97078,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:48.7319479'
        },
        {
          id: 'd92bc48e-a6c7-4711-b35c-08dbdb851562',
          latitude: 45.80208,
          longitude: 15.97081,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:14.731963'
        },
        {
          id: '4815c22b-c3cd-4a84-b35d-08dbdb851562',
          latitude: 45.80206,
          longitude: 15.97082,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:32.7319786'
        },
        {
          id: '4d02a86d-82e9-4f8a-b35e-08dbdb851562',
          latitude: 45.80204,
          longitude: 15.97084,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.7319862'
        },
        {
          id: '3276a14b-48eb-4bf5-b35f-08dbdb851562',
          latitude: 45.80202,
          longitude: 15.97085,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:55.7319905'
        },
        {
          id: 'da4408ab-fd2c-427a-b360-08dbdb851562',
          latitude: 45.802,
          longitude: 15.97087,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:30.7320073'
        },
        {
          id: '54d7e3d0-f67b-4a87-b361-08dbdb851562',
          latitude: 45.80197,
          longitude: 15.9709,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:44.7320196'
        },
        {
          id: '71666612-aedd-4064-b362-08dbdb851562',
          latitude: 45.80194,
          longitude: 15.97091,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:51:31.7320407'
        },
        {
          id: '2ab19ec6-439e-4e73-b363-08dbdb851562',
          latitude: 45.80191,
          longitude: 15.97093,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:18.7320477'
        },
        {
          id: '40b64176-bfc2-4031-b364-08dbdb851562',
          latitude: 45.80188,
          longitude: 15.97095,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.7320515'
        },
        {
          id: 'ba8c70f5-113b-4bc8-b365-08dbdb851562',
          latitude: 45.80228,
          longitude: 15.97085,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:25.7320603'
        },
        {
          id: 'f7238ae0-71e0-41f5-b366-08dbdb851562',
          latitude: 45.80225,
          longitude: 15.97088,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:21.732069'
        },
        {
          id: 'f0c0b596-e589-41c6-b367-08dbdb851562',
          latitude: 45.80222,
          longitude: 15.97089,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:39.7320792'
        },
        {
          id: '2ff9e90a-a097-45a0-b368-08dbdb851562',
          latitude: 45.80221,
          longitude: 15.97091,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:52.7320906'
        },
        {
          id: 'ea140f01-2f73-4e5e-b369-08dbdb851562',
          latitude: 45.80219,
          longitude: 15.97092,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:52:59.7321081'
        },
        {
          id: '1d8f0a16-746f-4b25-b36a-08dbdb851562',
          latitude: 45.80217,
          longitude: 15.97094,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.7321089'
        },
        {
          id: '0d501cce-d063-414f-b36b-08dbdb851562',
          latitude: 45.80215,
          longitude: 15.97095,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:45.7321192'
        },
        {
          id: 'cacf1623-d219-4cd4-b36c-08dbdb851562',
          latitude: 45.80215,
          longitude: 15.97097,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:59.7321201'
        },
        {
          id: 'b9abc411-8cc1-4733-b36d-08dbdb851562',
          latitude: 45.80212,
          longitude: 15.97098,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:29.7321354'
        },
        {
          id: 'ce6013a9-b024-44bc-b36e-08dbdb851562',
          latitude: 45.80209,
          longitude: 15.971,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:39.7321581'
        },
        {
          id: '95464dfa-7fd7-4ce9-b36f-08dbdb851562',
          latitude: 45.80206,
          longitude: 15.97101,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:55.7321594'
        },
        {
          id: '5af43577-e7cc-4bff-b370-08dbdb851562',
          latitude: 45.80203,
          longitude: 15.97103,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.7321754'
        },
        {
          id: 'da68a188-1910-46f2-b371-08dbdb851562',
          latitude: 45.80201,
          longitude: 15.97105,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:49.7321768'
        },
        {
          id: '0c0e7b8c-4a8f-495b-b372-08dbdb851562',
          latitude: 45.80199,
          longitude: 15.97106,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:20.732185'
        },
        {
          id: '5f758671-0eb6-411d-b373-08dbdb851562',
          latitude: 45.80195,
          longitude: 15.97108,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:07.7321927'
        },
        {
          id: '4ca839e4-2774-4b29-b374-08dbdb851562',
          latitude: 45.80327,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:53.7322041'
        },
        {
          id: '194a03f9-d055-409f-b375-08dbdb851562',
          latitude: 45.80323,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:27.7322276'
        },
        {
          id: '9268411c-2e54-44a0-b376-08dbdb851562',
          latitude: 45.8032,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T18:01:51.7553884'
        },
        {
          id: 'd994ebcf-ff5e-4b8c-b377-08dbdb851562',
          latitude: 45.80316,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:34.7322559'
        },
        {
          id: 'ef7ec755-2d7b-440d-b378-08dbdb851562',
          latitude: 45.80312,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:59.7322719'
        },
        {
          id: '03e88950-d333-498f-b379-08dbdb851562',
          latitude: 45.80308,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.7322958'
        },
        {
          id: '3ad13cda-0a00-4716-b37a-08dbdb851562',
          latitude: 45.80302,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:01.7322962'
        },
        {
          id: 'cb978c10-cb28-44cc-b37b-08dbdb851562',
          latitude: 45.80299,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:13.7323147'
        },
        {
          id: '2ceb1fc2-ca7c-4a13-b37c-08dbdb851562',
          latitude: 45.80294,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:31.7323225'
        },
        {
          id: 'e64f322f-38c4-41f2-b37d-08dbdb851562',
          latitude: 45.80288,
          longitude: 15.979,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:05.7323377'
        },
        {
          id: 'f02ed995-a17f-40d0-b37e-08dbdb851562',
          latitude: 45.80284,
          longitude: 15.979,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:44:29.7323464'
        },
        {
          id: '5457471d-3bb8-48f2-b37f-08dbdb851562',
          latitude: 45.8028,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:18.7323548'
        },
        {
          id: '8796e1c6-5c55-424a-b380-08dbdb851562',
          latitude: 45.80276,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:41.7323641'
        },
        {
          id: '17368082-b20c-49e1-b381-08dbdb851562',
          latitude: 45.80272,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:40:06.7323801'
        },
        {
          id: '54fd69fc-7b60-4e84-b382-08dbdb851562',
          latitude: 45.80269,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:43.732405'
        },
        {
          id: '37afaa67-6879-4be6-b383-08dbdb851562',
          latitude: 45.80265,
          longitude: 15.97902,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:04.7324199'
        },
        {
          id: 'c9d30aa6-cc4c-462f-b384-08dbdb851562',
          latitude: 45.80263,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:52.7324365'
        },
        {
          id: '7752529c-0287-48b4-b385-08dbdb851562',
          latitude: 45.80259,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.732444'
        },
        {
          id: '8544a42b-8c88-4850-b386-08dbdb851562',
          latitude: 45.80255,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:53.7324475'
        },
        {
          id: 'e0e30e61-bd1a-4b59-b387-08dbdb851562',
          latitude: 45.8025,
          longitude: 15.97901,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:12.7324486'
        },
        {
          id: '49142846-aeee-41a7-b388-08dbdb851562',
          latitude: 45.80327,
          longitude: 15.97928,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:02.7324641'
        },
        {
          id: '1ccc6f5b-c09b-41bf-b389-08dbdb851562',
          latitude: 45.80321,
          longitude: 15.97926,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:58.7324682'
        },
        {
          id: 'e9e986d7-df36-42cd-b38a-08dbdb851562',
          latitude: 45.80318,
          longitude: 15.97927,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:34.732478'
        },
        {
          id: '9981514f-6263-498f-b38b-08dbdb851562',
          latitude: 45.80316,
          longitude: 15.97926,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:44.7324796'
        },
        {
          id: '72cda5a6-0d36-43b9-b38c-08dbdb851562',
          latitude: 45.80313,
          longitude: 15.97926,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:24.7324959'
        },
        {
          id: 'f61b5b34-451a-4091-b38d-08dbdb851562',
          latitude: 45.80311,
          longitude: 15.97926,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:47.7324978'
        },
        {
          id: 'bf5ec74e-bc5c-499b-b38e-08dbdb851562',
          latitude: 45.80308,
          longitude: 15.97926,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:43.7325136'
        },
        {
          id: 'b04e9bfd-1e6d-4218-b38f-08dbdb851562',
          latitude: 45.80304,
          longitude: 15.97925,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:06.7325305'
        },
        {
          id: '62ed1be3-30bd-4cdb-b390-08dbdb851562',
          latitude: 45.803,
          longitude: 15.97925,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:06.7325393'
        },
        {
          id: 'de03afde-01ff-46c3-b391-08dbdb851562',
          latitude: 45.80296,
          longitude: 15.97924,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.732549'
        },
        {
          id: '9856190c-cc1a-4e76-b392-08dbdb851562',
          latitude: 45.80292,
          longitude: 15.97924,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:04.7325573'
        },
        {
          id: 'cb01d13b-14c3-49f1-b393-08dbdb851562',
          latitude: 45.80288,
          longitude: 15.97923,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.7325608'
        },
        {
          id: 'eedf69c6-54f5-4ff5-b394-08dbdb851562',
          latitude: 45.80284,
          longitude: 15.97923,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:26.7325689'
        },
        {
          id: '6ce9f6f1-6816-4fd9-b395-08dbdb851562',
          latitude: 45.80279,
          longitude: 15.97923,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:33:47.7325809'
        },
        {
          id: 'c4f2f97d-085e-4db8-b396-08dbdb851562',
          latitude: 45.80276,
          longitude: 15.97923,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:52:12.7325892'
        },
        {
          id: 'db6912e1-b1b2-4894-b397-08dbdb851562',
          latitude: 45.80272,
          longitude: 15.97923,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:59.7326032'
        },
        {
          id: '9ac0f07c-c58a-4b57-b398-08dbdb851562',
          latitude: 45.80269,
          longitude: 15.97923,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:28.7326116'
        },
        {
          id: '03874ab3-b35d-4db3-b399-08dbdb851562',
          latitude: 45.80265,
          longitude: 15.97922,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:46.732613'
        },
        {
          id: '3bae7fae-dff1-44dd-b39a-08dbdb851562',
          latitude: 45.80261,
          longitude: 15.97924,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:42:49.7326411'
        },
        {
          id: '0e17f4a4-cb9a-46fd-b39b-08dbdb851562',
          latitude: 45.80256,
          longitude: 15.97923,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:26.7326431'
        },
        {
          id: 'ef2ad61e-38da-4478-b39c-08dbdb851562',
          latitude: 45.80302,
          longitude: 15.9795,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:31.7326542'
        },
        {
          id: '893875be-c331-4a29-b39d-08dbdb851562',
          latitude: 45.80299,
          longitude: 15.9795,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:34.7326645'
        },
        {
          id: 'cf059699-8069-4fbe-b39e-08dbdb851562',
          latitude: 45.80296,
          longitude: 15.9795,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:56.7326671'
        },
        {
          id: '038a0891-6b23-4f6d-b39f-08dbdb851562',
          latitude: 45.80293,
          longitude: 15.9795,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:08.7326699'
        },
        {
          id: '74f5c778-e408-4a65-b3a0-08dbdb851562',
          latitude: 45.80288,
          longitude: 15.97948,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:57.7326793'
        },
        {
          id: '1c8ccb11-7528-4951-b3a1-08dbdb851562',
          latitude: 45.80285,
          longitude: 15.97947,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:21.7326944'
        },
        {
          id: 'c0aa5882-0057-44b4-b3a2-08dbdb851562',
          latitude: 45.80282,
          longitude: 15.97946,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:06.7327108'
        },
        {
          id: '649d0ca7-40ad-4d59-b3a3-08dbdb851562',
          latitude: 45.80278,
          longitude: 15.97946,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:16.732712'
        },
        {
          id: 'd96924a1-7229-4934-b3a4-08dbdb851562',
          latitude: 45.80275,
          longitude: 15.97946,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:48.732738'
        },
        {
          id: 'd966994d-8b05-4d48-b3a5-08dbdb851562',
          latitude: 45.80271,
          longitude: 15.97945,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:41.7327395'
        },
        {
          id: '83b2fec7-7fb5-4580-b3a6-08dbdb851562',
          latitude: 45.80269,
          longitude: 15.97945,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:35.732758'
        },
        {
          id: 'ab948932-e56f-4fd8-b3a7-08dbdb851562',
          latitude: 45.80265,
          longitude: 15.97944,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:23.7327606'
        },
        {
          id: 'e73ee61a-29f8-413f-b3a8-08dbdb851562',
          latitude: 45.8026,
          longitude: 15.97946,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:52.7327701'
        },
        {
          id: 'c9b18032-7b32-4be8-b3a9-08dbdb851562',
          latitude: 45.80256,
          longitude: 15.97945,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:38.7327725'
        },
        {
          id: '01ac471a-928e-4033-b3aa-08dbdb851562',
          latitude: 45.80252,
          longitude: 15.97945,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:09.7327806'
        },
        {
          id: '457feba3-e453-496e-b3ab-08dbdb851562',
          latitude: 45.80305,
          longitude: 15.97973,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:34.7328024'
        },
        {
          id: '5f5488ce-9193-4737-b3ac-08dbdb851562',
          latitude: 45.80301,
          longitude: 15.97973,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:52.7328046'
        },
        {
          id: '65f45e38-f824-4d42-b3ad-08dbdb851562',
          latitude: 45.80299,
          longitude: 15.97972,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:22.7328147'
        },
        {
          id: 'd6e5e6c9-92b0-48f7-b3ae-08dbdb851562',
          latitude: 45.80296,
          longitude: 15.97973,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:44:49.7328218'
        },
        {
          id: 'fcdf25a8-97d1-4098-b3af-08dbdb851562',
          latitude: 45.80291,
          longitude: 15.97972,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:54.7328418'
        },
        {
          id: 'd24f0a60-7bba-4316-b3b0-08dbdb851562',
          latitude: 45.80287,
          longitude: 15.97971,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:20.7328426'
        },
        {
          id: 'a0d13902-183e-495d-b3b1-08dbdb851562',
          latitude: 45.80284,
          longitude: 15.9797,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:32.7328516'
        },
        {
          id: '8f95115b-54e0-4868-b3b2-08dbdb851562',
          latitude: 45.80281,
          longitude: 15.97969,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:39.7328674'
        },
        {
          id: 'efba1b7a-bb39-477b-b3b3-08dbdb851562',
          latitude: 45.80276,
          longitude: 15.97968,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:20.7328692'
        },
        {
          id: 'd0101dc6-b24d-4513-b3b4-08dbdb851562',
          latitude: 45.80274,
          longitude: 15.97968,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:40.7328793'
        },
        {
          id: 'eb97e623-7692-4bbc-b3b5-08dbdb851562',
          latitude: 45.80271,
          longitude: 15.97968,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:02.7328952'
        },
        {
          id: '2ddc73c7-c570-4eae-b3b6-08dbdb851562',
          latitude: 45.80266,
          longitude: 15.97969,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:49.7329075'
        },
        {
          id: 'eb87abf3-95f3-45cf-b3b7-08dbdb851562',
          latitude: 45.80265,
          longitude: 15.9797,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:43.7329159'
        },
        {
          id: '373a6875-d18d-415d-b3b8-08dbdb851562',
          latitude: 45.80262,
          longitude: 15.9797,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:22.7329312'
        },
        {
          id: '2278934e-a177-4c55-b3b9-08dbdb851562',
          latitude: 45.80259,
          longitude: 15.97969,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:32.7329481'
        },
        {
          id: 'fcf67652-0ff9-4694-b3ba-08dbdb851562',
          latitude: 45.80238,
          longitude: 15.979,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:34.7329563'
        },
        {
          id: '052bcf53-6134-40b7-b3bb-08dbdb851562',
          latitude: 45.80238,
          longitude: 15.97907,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:10.7329687'
        },
        {
          id: 'b9168372-0816-4b76-b3bc-08dbdb851562',
          latitude: 45.80238,
          longitude: 15.97917,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:20.7329791'
        },
        {
          id: 'f8b273fe-efe5-40d7-b3bd-08dbdb851562',
          latitude: 45.80238,
          longitude: 15.97925,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:22.7329934'
        },
        {
          id: '4c4d3f36-a3aa-4a7e-b3be-08dbdb851562',
          latitude: 45.80239,
          longitude: 15.97932,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:45.732997'
        },
        {
          id: '9d1d8152-ad89-4304-b3bf-08dbdb851562',
          latitude: 45.80239,
          longitude: 15.9794,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:15.7330061'
        },
        {
          id: '28ab7b34-2e62-4e4a-b3c0-08dbdb851562',
          latitude: 45.80239,
          longitude: 15.97946,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:45.733026'
        },
        {
          id: '03f6445b-34b2-434e-b3c1-08dbdb851562',
          latitude: 45.80239,
          longitude: 15.97954,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:52.7330305'
        },
        {
          id: 'd14a3242-1187-4a24-b3c2-08dbdb851562',
          latitude: 45.80239,
          longitude: 15.97961,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:40.7330381'
        },
        {
          id: '285e7225-3127-4943-b3c3-08dbdb851562',
          latitude: 45.8024,
          longitude: 15.9797,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:28.7330613'
        },
        {
          id: 'ecfc8d2e-8b9b-4e5a-b3c4-08dbdb851562',
          latitude: 45.80228,
          longitude: 15.97898,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:14.7330708'
        },
        {
          id: 'af9c2135-e9e9-411e-b3c5-08dbdb851562',
          latitude: 45.80228,
          longitude: 15.97905,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:51.7330815'
        },
        {
          id: '66adf4b0-7728-4f35-b3c6-08dbdb851562',
          latitude: 45.80228,
          longitude: 15.97914,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:15.733102'
        },
        {
          id: '9cdd248a-75fb-434d-b3c7-08dbdb851562',
          latitude: 45.80228,
          longitude: 15.97921,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:37.7331111'
        },
        {
          id: '9701d330-212b-43d1-b3c8-08dbdb851562',
          latitude: 45.80228,
          longitude: 15.97929,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:23.7331136'
        },
        {
          id: '55cf319d-a4cd-499c-b3c9-08dbdb851562',
          latitude: 45.80229,
          longitude: 15.97938,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:49.7331229'
        },
        {
          id: 'c4fbecc9-babb-4fe3-b3ca-08dbdb851562',
          latitude: 45.80229,
          longitude: 15.97946,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.7331395'
        },
        {
          id: 'd54b0a56-9abf-46d1-b3cb-08dbdb851562',
          latitude: 45.80229,
          longitude: 15.97952,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:04.733141'
        },
        {
          id: 'ea0a8f53-9839-4cac-b3cc-08dbdb851562',
          latitude: 45.80229,
          longitude: 15.9796,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:10.7331571'
        },
        {
          id: 'c051fd05-2790-4c43-b3cd-08dbdb851562',
          latitude: 45.80229,
          longitude: 15.97967,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:45.7331597'
        },
        {
          id: '7a6d1219-c9b2-493f-b3ce-08dbdb851562',
          latitude: 45.79569,
          longitude: 15.97697,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:04.7331715'
        },
        {
          id: '80d28f3a-5459-40d1-b3cf-08dbdb851562',
          latitude: 45.79569,
          longitude: 15.97705,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:08.7331813'
        },
        {
          id: '97934778-e773-44d7-b3d0-08dbdb851562',
          latitude: 45.7957,
          longitude: 15.97714,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:07.7331835'
        },
        {
          id: 'a02649cf-dc93-4cad-b3d1-08dbdb851562',
          latitude: 45.7957,
          longitude: 15.97723,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:36.7331864'
        },
        {
          id: '8bbde706-de41-428b-b3d2-08dbdb851562',
          latitude: 45.7957,
          longitude: 15.97733,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:16.7331971'
        },
        {
          id: '08560878-6d05-43a6-b3d3-08dbdb851562',
          latitude: 45.7957,
          longitude: 15.97742,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:32.7332117'
        },
        {
          id: '830bf660-9eb1-484b-b3d4-08dbdb851562',
          latitude: 45.79571,
          longitude: 15.97751,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:57.7332139'
        },
        {
          id: '211260d4-ab82-4a42-b3d5-08dbdb851562',
          latitude: 45.79571,
          longitude: 15.97759,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:48:37.7332218'
        },
        {
          id: 'b3ce85b4-95d8-4817-b3d6-08dbdb851562',
          latitude: 45.79571,
          longitude: 15.97769,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:44.7332295'
        },
        {
          id: '82eb7bb7-d461-417d-b3d7-08dbdb851562',
          latitude: 45.79572,
          longitude: 15.97779,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:36:43.7332373'
        },
        {
          id: '1757cee4-8bb6-41a2-b3d8-08dbdb851562',
          latitude: 45.79561,
          longitude: 15.977,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:40.7332637'
        },
        {
          id: 'bc962217-af35-4a18-b3d9-08dbdb851562',
          latitude: 45.79561,
          longitude: 15.97707,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:20.7332673'
        },
        {
          id: '0169158d-493a-4e2d-b3da-08dbdb851562',
          latitude: 45.79561,
          longitude: 15.97716,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:39:39.7332687'
        },
        {
          id: 'dc241477-def6-4d8d-b3db-08dbdb851562',
          latitude: 45.79562,
          longitude: 15.97726,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:02.7332865'
        },
        {
          id: 'e254feee-b6b9-4e28-b3dc-08dbdb851562',
          latitude: 45.79563,
          longitude: 15.97734,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:14.7332875'
        },
        {
          id: '98da02f4-a629-47f7-b3dd-08dbdb851562',
          latitude: 45.79563,
          longitude: 15.97743,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:22.7333042'
        },
        {
          id: 'd7f04607-a6ff-4b5b-b3de-08dbdb851562',
          latitude: 45.79563,
          longitude: 15.9775,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T18:00:47.7565837'
        },
        {
          id: 'f4fbb336-4c1d-4e63-b3df-08dbdb851562',
          latitude: 45.79563,
          longitude: 15.97758,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:57.7333162'
        },
        {
          id: 'ec165790-6bff-4feb-b3e0-08dbdb851562',
          latitude: 45.79563,
          longitude: 15.97767,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:16.7333265'
        },
        {
          id: '79178e86-791c-4e4c-b3e1-08dbdb851562',
          latitude: 45.79563,
          longitude: 15.97777,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:17.7333285'
        },
        {
          id: '55662e6e-5475-4ae7-b3e2-08dbdb851562',
          latitude: 45.79554,
          longitude: 15.97701,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:45:36.733347'
        },
        {
          id: '90943574-b71b-491b-b3e3-08dbdb851562',
          latitude: 45.79554,
          longitude: 15.97709,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:03.733358'
        },
        {
          id: 'a36b98e3-2a85-413e-b3e4-08dbdb851562',
          latitude: 45.79554,
          longitude: 15.97716,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:07.7333597'
        },
        {
          id: '56abdfc1-3324-4790-b3e5-08dbdb851562',
          latitude: 45.79555,
          longitude: 15.97725,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:43.7333681'
        },
        {
          id: '7c7c5820-5811-43e5-b3e6-08dbdb851562',
          latitude: 45.79556,
          longitude: 15.97735,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:40.7333761'
        },
        {
          id: 'e0b4a1b3-1799-488a-b3e7-08dbdb851562',
          latitude: 45.79556,
          longitude: 15.97743,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:38:18.733377'
        },
        {
          id: '575c84c9-c9c0-4e29-b3e8-08dbdb851562',
          latitude: 45.79556,
          longitude: 15.97752,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:45:46.7333954'
        },
        {
          id: '256f427b-6078-40f6-b3e9-08dbdb851562',
          latitude: 45.79557,
          longitude: 15.97763,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:20.7334115'
        },
        {
          id: 'db8e7e91-8ae9-4193-b3ea-08dbdb851562',
          latitude: 45.79557,
          longitude: 15.9777,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:51:16.7334164'
        },
        {
          id: '34113cb7-8d44-474e-b3eb-08dbdb851562',
          latitude: 45.79558,
          longitude: 15.97779,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:26.7334218'
        },
        {
          id: '0f496b48-9e0f-4d8b-b3ec-08dbdb851562',
          latitude: 45.79546,
          longitude: 15.977,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:50:56.7334339'
        },
        {
          id: 'd808c994-fce7-4d56-b3ed-08dbdb851562',
          latitude: 45.79546,
          longitude: 15.97708,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:36.7334423'
        },
        {
          id: 'ff442978-a4fa-47b7-b3ee-08dbdb851562',
          latitude: 45.79546,
          longitude: 15.97717,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:41:15.7334475'
        },
        {
          id: '6852cbcc-0840-441d-b3ef-08dbdb851562',
          latitude: 45.79547,
          longitude: 15.97729,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:46:14.7334641'
        },
        {
          id: '32034d55-97c3-4ca0-b3f0-08dbdb851562',
          latitude: 45.79547,
          longitude: 15.97736,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:54.7334763'
        },
        {
          id: '2cde85fa-167d-42f2-b3f1-08dbdb851562',
          latitude: 45.79547,
          longitude: 15.97743,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:49:45.7334791'
        },
        {
          id: 'd76018ac-3a77-4130-b3f2-08dbdb851562',
          latitude: 45.79547,
          longitude: 15.97752,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:23.7334817'
        },
        {
          id: '04e10316-4bb6-47c5-b3f3-08dbdb851562',
          latitude: 45.79547,
          longitude: 15.97761,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:40:50.7334923'
        },
        {
          id: 'f3d5c99f-8d6c-4c02-b3f4-08dbdb851562',
          latitude: 45.79547,
          longitude: 15.97771,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:03.733515'
        },
        {
          id: 'e96d823c-0d20-41a5-b3f5-08dbdb851562',
          latitude: 45.79547,
          longitude: 15.97779,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:53.7335188'
        },
        {
          id: 'ed48252a-bedf-4efd-b3f6-08dbdb851562',
          latitude: 45.79538,
          longitude: 15.97704,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:51.7335232'
        },
        {
          id: 'fc421deb-1ac4-4623-b3f7-08dbdb851562',
          latitude: 45.79539,
          longitude: 15.97713,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:01.7335325'
        },
        {
          id: 'e07a8ae8-9d40-4f1b-b3f8-08dbdb851562',
          latitude: 45.79539,
          longitude: 15.97721,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:37:02.7335403'
        },
        {
          id: '6d799398-659f-4754-b3f9-08dbdb851562',
          latitude: 45.7954,
          longitude: 15.97731,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:47:45.7335445'
        },
        {
          id: '122a4a76-2054-4280-b3fa-08dbdb851562',
          latitude: 45.79539,
          longitude: 15.9774,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:00.7335482'
        },
        {
          id: '2e9df2cc-37a2-4bc1-b3fb-08dbdb851562',
          latitude: 45.79539,
          longitude: 15.97748,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:35.7335573'
        },
        {
          id: 'e1ace0b2-b04c-4482-b3fc-08dbdb851562',
          latitude: 45.79539,
          longitude: 15.97756,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:17.7335616'
        },
        {
          id: '9059c7a0-69eb-494f-b3fd-08dbdb851562',
          latitude: 45.7954,
          longitude: 15.97766,
          parkingSpotZone: 'Zone4',
          occupied: false,
          occupiedTimestamp: '2023-11-04T17:47:12.7335661'
        },
        {
          id: '3b037300-4db2-4d89-b3fe-08dbdb851562',
          latitude: 45.7954,
          longitude: 15.97774,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:46:50.7335838'
        },
        {
          id: 'cc49c782-b296-406a-b3ff-08dbdb851562',
          latitude: 45.7954,
          longitude: 15.97782,
          parkingSpotZone: 'Zone4',
          occupied: true,
          occupiedTimestamp: '2023-11-04T17:48:14.7335867'
        },
        {
          id: '9b01806e-1713-4f9b-ac7f-08dbdd4fd078',
          latitude: 40.712776,
          longitude: -74.005974,
          parkingSpotZone: 'Zone1',
          occupied: false,
          occupiedTimestamp: null
        }
      ]

      if (state.filterFreeSpace) {
        parkingSpots = parkingSpots.filter((spot) => !spot.occupied)
      }

      if (state.filterZone) {
        parkingSpots = parkingSpots.filter((spot) => spot.parkingSpotZone === state.filterZone)
      }
      commit('setParkingSpots', parkingSpots)
    },
    async fetchParkingZonePrices({ commit }) {
      let parkingZonePrices = { ZONE1: 4.25, ZONE2: 3.34, ZONE3: 2.25, ZONE4: 1.31 }

      let updatedParkingZonePrices = Object.keys(parkingZonePrices).reduce((newObj, key) => {
        const newKey = key.charAt(0) + key.slice(1).toLowerCase()
        newObj[newKey] = parkingZonePrices[key]
        return newObj
      }, {})

      commit('setParkingZonePrices', updatedParkingZonePrices)
    }
  }
}
