<script>
export default {
  mounted() {
    this.$store.dispatch('connectWebSocket');
    this.$store.dispatch('connectPriceWebSocket');
  },
  beforeDestroy() {
    this.$store.dispatch('disconnectWebSocket');
  },
  computed: {
    parkingSpotEvents() {
      return this.$store.state.parkingSpotEvents;
    },
    prices() {
      return this.$store.state.prices;
    }
  }
}
</script>
