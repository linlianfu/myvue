<template>
  <div id="app">
    <label>app.vue app</label>
    <button-component></button-component>
    <router-view/>
  </div>
</template>

<script>
  import ButtonComponent from './components/ButtonComponent.vue'

  export default {
    name: 'App',
    comments:{
      "button-component":  ButtonComponent
    },
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
