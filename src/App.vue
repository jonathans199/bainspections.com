<template>
  <div id="app">
     <router-view/>
  </div>
</template>sd
<style lang="scss">

@import '@/../assets/scss/main.scss';

</style>
<script>
import SlideHome from './components/SlideHome'
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'

Vue.use(VueRouter); 

Vue.use(BootstrapVue);

export default {
  
}
</script>


