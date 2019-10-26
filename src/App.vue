<template>
  <div id="app">
    <p>app.vue app</p>
    <div>
      <router-link to="/eleven" >router link 第二页</router-link>
    </div>
    <p></p>
    <div>
      <button-counter></button-counter>
    </div>
    <p></p>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
