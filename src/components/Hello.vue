<template>
  <div class="hello">
      Ready to start with Blockstack project
      <button class="btn btn-default" @click.prevent="signInWithBlockstack">Sign In With Blockstack</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      blockstack: window.blockstack
    }
  },
  methods: {
    signInWithBlockstack () {
      const blockstack = this.blockstack
      blockstack.redirectToSignIn(
        process.env.APP_URL + '/#/dashboard',
        process.env.APP_URL + '/static/manifest.json',
        ['store_write']
      )
    }
  }
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
