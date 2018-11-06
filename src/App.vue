<template>
  <div id="app">
     <router-view/>
  </div>
</template>sd
<style lang="scss">

@import '@/../assets/scss/main.scss';


</style>
<script>
import SlideHome from './views/Home.vue'
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import Toasted from 'vue-toasted'

Vue.use(VueRouter); 
Vue.use(Toasted)
Vue.use(BootstrapVue);

export default {
  data () {
    return {
      // selected: 'en',
    }
  }
}
</script>


