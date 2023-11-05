<template>
  <div class="login-container">
    <div>
      <NCard class="card">
        <NSpace vertical>
          <NH1 class="text-center">Login</NH1>
          <NText>Email</NText>
          <NInput v-model:value="email" type="text" placeholder="example@email.com" />
          <NText>Password</NText>
          <NInput v-model:value="password" type="password" placeholder="********" :minlength="8" />

          <NButton class="w-full my-4 login-btn" type="primary" @click="login">Login</NButton>
          <div class="text-center w-full">
            <NText>
              Not registered?
              <RouterLink to="signup">Sign Up</RouterLink>
            </NText>
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
      showNav: false
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

@media screen and (max-width: 500px) {
  .card {
    width: 90% !important;
  }
}
</style>
