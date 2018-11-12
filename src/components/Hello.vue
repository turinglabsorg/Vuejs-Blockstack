<template>
  <div class="hello">
      <h1>XSight Plaftorm</h1>
      <button class="btn btn-primary" @click.prevent="signInWithBlockstack">Sign In With Blockstack</button>
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
        process.env.APP_URL + '/',
        process.env.APP_URL + '/static/manifest.json',
        ['store_write', 'publish_data']
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
