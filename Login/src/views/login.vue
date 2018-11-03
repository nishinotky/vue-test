<template>
  <div id="login" class="column is-4 is-offset-4">
    <h1 class="title has-text-grey">Login</h1>
    <p class="subtitle has-text-grey">Please login to proceed.</p>
    <div class="box">
      <figure class="avatar">
        <img src="//placehold.it/128x128" alt="">
      </figure>
      <form>
        <div class="field">
          <div class="control">
            <input type="email" class="input is-large" name="username" v-model="input.username" placeholder="Your Email" autofocus="" />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <input type="password" class="input is-large" name="password" v-model="input.password" placeholder="Your Password" />
          </div>
        </div>
        <div class="field">
          <label class="checkbox">
          <input type="checkbox">
            Remember me
          </label>
        </div>
        <button class="button is-block is-info is-large is-fullwidth" type="button" v-on:click="login()">Login</button>
      </form>
      </div>
      <p class="has-text-grey">
        <a href="../">Sign Up</a> &nbsp;·&nbsp;
        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a>
      </p>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style scoped>
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
  font-weight: normal;
}
</style>
