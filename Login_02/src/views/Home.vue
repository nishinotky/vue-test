<template>
  <div id="Home" class="home">
    <el-container class="container">
      <el-row class="wrap">
        <el-col :span="12" :offset="6" class="userinfo">
          <div class="logout">
            <el-button type="info" icon="el-icon-delete" @click.native="logout"></el-button>
          </div>
        </el-col>
        <el-col :span="12" :offset="6" class="main">
          <router-view />
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      sysUserName: '',
      sysUserAvatar: ''
    }
  },
  mounted () {
    var user = sessionStorage.getItem('user')
    if (user) {
      user = JSON.parse(user)
      this.sysUserName = user.name || ''
      this.sysUserAvatar = user.avatar || ''
    }
    this.loginRemove()
  },
  methods: {
    loginRemove () {
      var body = document.body
      body.classList.remove('login')
    },
    logout () {
      this.$confirm('Exit?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        sessionStorage.removeItem('user')
        this.$router.push('/login')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Exit canceled'
        })
      })
    }
  }
}
</script>

<style lang="scss">
.container {
  padding: 20px 0;
  width: 100%;
}
.wrap {
  width: 100%;
}
.userinfo {
  text-align: right;
  * {
    margin: 0 10px;
  }
}
.main {
  padding: 20px 0 0;
  text-align: center;
}
</style>
