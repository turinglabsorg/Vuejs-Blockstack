<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import { UserBus } from './main.js'
  export default {
    name: 'app',
    components: {},
    mounted () {
      const blockstack = this.blockstack
      if (blockstack.isUserSignedIn()) {
        this.userData = blockstack.loadUserData()
        this.user = new blockstack.Person(this.userData.profile)
        this.user.username = this.userData.username
        UserBus.$emit('loggedUser', this.user)
        this.$router.push('dashboard')
      } else if (blockstack.isSignInPending()) {
        blockstack.handlePendingSignIn()
          .then((userData) => {
            window.location = window.location.origin
          })
      }
    },
    data () {
      return {
        blockstack: window.blockstack,
        user: null
      }
    }
  }
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
