<script>
export default {
  mounted() {
    this.$store.dispatch('connectWebSocket')
    this.$store.dispatch('connectPriceWebSocket')
  },
  beforeUnmount() {
    this.$store.dispatch('disconnectWebSocket')
  },
  computed: {
    parkingSpotEvents() {
      return this.$store.state.parkingSpotEvents
    },
    prices() {
      return this.$store.state.prices
    }
  }
}
</script>
