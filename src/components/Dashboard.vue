<template>
  <div class="hello">
      Now you're logged with Blockstack
  </div>
</template>

<script>
import { UserBus } from '../main.js'
export default {
  name: 'dashboard',
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/')
    }
  },
  created () {
    UserBus.$on('loggedUser', user => {
      this.user = user
    })
  }
}
</script>

<style>

</style>
