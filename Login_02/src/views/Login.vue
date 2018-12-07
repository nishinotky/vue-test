<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="login-container">
    <h3 class="title">System login</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="Account"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="Password"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">Remember me</el-checkbox>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { requestLogin } from '../api/api'
export default {
  data () {
    return {
      logining: false,
      ruleForm: {
        account: '',
        checkPass: ''
      },
      rules: {
        account: [
          {
            required: true,
            message: 'Please input your account.',
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            required: true,
            message: 'Please input your password.',
            trigger: 'blur'
          }
        ]
      },
      checked: true
    }
  },
  mounted () {
    this.loginCheck()
  },
  methods: {
    loginCheck () {
      var body = document.body
      body.classList.add('login')
    },
    handleSubmit (ev) {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.logining = true
          var loginParams = {
            username: this.ruleForm.account,
            password: this.ruleForm.checkPass
          }
          requestLogin(loginParams).then(data => {
            this.logining = false
            let { msg, code, user } = data
            if (code !== 200) {
              this.$message({
                message: msg,
                type: 'error'
              })
            } else {
              sessionStorage.setItem('user', JSON.stringify(user))
              this.$router.push({
                path: '/HelloWorld'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 0;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: rgba(255, 255, 255, .5);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #ddd;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
}
</style>
