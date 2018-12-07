<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body {
  background: #fff;
  &.login {
    background: linear-gradient(-135deg, #ac9fe7, #bbf9ed) fixed;
  }
}
#app {
  font-family: "Helvetica Neue", Helvetica, YuGothic, 'Yu Gothic', 游ゴシック体, '游ゴシック', "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, "MS ゴシック", "MS Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  .login & {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
