<template>
  <div class="hello">
      Now you're logged with Blockstack as {{user.username}}
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    if (!this.$cookies.get('user')) {
      this.$router.push('/')
    } else {
      this.user = this.$cookies.get('user')
    }
  }
}
</script>

<style>

</style>
