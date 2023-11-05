<script>
export default {
  mounted() {
    this.$store.dispatch('connectWebSocket')
  },
  beforeDestroy() {
    this.$store.dispatch('disconnectWebSocket')
  },
  computed: {
    parkingSpotEvents() {
      return this.$store.state.parkingSpotEvents
    }
  }
}
</script>
