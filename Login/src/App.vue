<template>
  <div id="app">
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div id="nav" class="">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
          </div>
          <router-view @authenticated="setAuthenticated" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      authenticated: false,
      mockAccount: {
        username: 'admin@email.com',
        password: 'guest'
      }
    }
  },
  mounted () {
    if (!this.authenticated) {
      this.$router.replace({ name: 'login' })
    }
  },
  methods: {
    setAuthenticated (status) {
      this.authenticated = status
    },
    logout () {
      this.authenticated = false
    }
  }
}
</script>

<style>
@import '../node_modules/bulma/css/bulma.min.css';

html,body {
  font-family: 'Open Sans', serif;
  font-size: 14px;
  font-weight: 300;
}
.hero.is-success {
  background-color: #F2F6FA;
}
h1 {
  padding: 0;
  margin-top: 0;
  font-weight: bold;
}
#nav a {
  color: #232323;
}
</style>
