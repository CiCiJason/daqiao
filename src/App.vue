<template>
  <div id="app" class="container-fluid">
    <div class="nav">
      <Menu :router="$router.options.routes" class="container"></Menu>
    </div>
    
    <router-view />

    <div class="container">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from './views/public/footer'
import Menu from './views/public/menu'
export default {
  name:'app',
  components:{Menu,Footer},
  updated() {
    window.scroll(0,0)
  }
}
</script>

<style lang="scss" scoped>
  .nav{
    height: 62px;
    background-color: #0c3b81;
  }
</style>