<template>
  <div class="login-container">
    <div>
      <NCard class="card">
        <NSpace vertical>
          <NH1 class="text-center">Sign Up</NH1>
          <NText>Name</NText>
          <NInput v-model:value="firstName" type="text" placeholder="Name" />
          <NText>Surname</NText>
          <NInput v-model:value="lastName" type="text" placeholder="Surname" />
          <NText>Email</NText>
          <NInput v-model:value="email" type="text" placeholder="example@gmail.com" />
          <NText>Password</NText>
          <NInput
            v-model:value="password"
            type="password"
            placeholder="********"
            :status="statusPassword"
            :minlength="8"
          />
          <NText>Confirm Password</NText>
          <NInput
            v-model:value="confirmPassword"
            type="password"
            placeholder="********"
            :minlength="8"
          />

          <NButton color="#0b61ab" class="text-center w-full login-btn" @click="signup">
            Signup</NButton
          >

          <div class="text-center">
            <NSpace vertical>
              <NText
                >Already have an account?
                <RouterLink :to="{ name: 'login' }">Login instead </RouterLink>
              </NText>
            </NSpace>
          </div>
        </NSpace>
      </NCard>
    </div>
  </div>
</template>

<script>
import { NButton, NCard, NH1, NInput, NSpace, NText } from 'naive-ui'
export default {
  name: 'LoginView',
  components: {
    NButton,
    NCard,
    NH1,
    NInput,
    NSpace,
    NText
  },
  data() {
    return {
      showNav: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    async signup() {
      const credentials = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('register', credentials)
        this.$router.push({ name: 'reserve' })
      } catch (error) {
        console.error('Login failed:', error)
      }
    }
  }
}
</script>

<style scoped>
.card {
  width: 30em;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.login-btn {
  width: 100%;
}

@media screen and (max-width: 500px) {
  .card {
    margin-top: 5em;
    width: 90% !important;
  }
}
</style>
