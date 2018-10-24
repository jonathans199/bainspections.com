// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  // created(){
  //   AOS.init({
  //     duration: 1600,
  //   })
  // },
  router,
  render: h => h(App)
}).$mount('#app')
