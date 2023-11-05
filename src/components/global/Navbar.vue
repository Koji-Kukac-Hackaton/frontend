<template>
  <div class="navbar">
    <RouterLink class="navbar-title" to="/">ParkingSpotter</RouterLink>

    <div class="navbar-end">
      <NSpace class="flex-row" :size="[30, 0]">
        <RouterLink
          class="navbar-route"
          :to="{
            name: 'reserve'
          }"
          >Home</RouterLink
        >

        <RouterLink
          class="navbar-route"
          :to="{
            name: 'reserve'
          }"
          >Reserve Parking</RouterLink
        >

        <RouterLink
          class="navbar-route"
          :to="{
            name: 'user-profile'
          }"
          >Profile</RouterLink
        >
      </NSpace>
    </div>

    <!-- HAMBURGER -->
    <div id="nav-icon3" @click="toggleNav">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- MOBILE -->
    <div id="myNav" class="overlay">
      <div class="overlay-content">
        <RouterLink
          class="navbar-route overlay-element"
          @click="toggleNav"
          :to="{
            name: 'reserve'
          }"
          >routeName</RouterLink
        >

        <RouterLink
          class="navbar-route overlay-element"
          @click="toggleNav"
          :to="{
            name: 'reserve'
          }"
          >routeName</RouterLink
        >

        <RouterLink
          class="navbar-route overlay-element"
          @click="toggleNav"
          :to="{
            name: 'reserve'
          }"
          >routeName</RouterLink
        >

        <RouterLink
          class="navbar-route overlay-element"
          @click="toggleNav"
          :to="{
            name: 'reserve'
          }"
          >routeName</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    toggleNav() {
      document.getElementById('nav-icon3').classList.toggle('open')
      if (this.showNav) {
        document.getElementById('myNav').style.height = '0%'
      } else {
        document.getElementById('myNav').style.height = '100%'
      }
      this.showNav = !this.showNav
    }
  },
  data() {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
@import url(../../assets/css/navbar.css);

.flex-row {
  display: flex;
  flex-direction: row;
}
</style>
