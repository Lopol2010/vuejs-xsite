// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import EmbedWrap from './components/EmbedWrap'

import router from './router'

Vue.config.productionTip = false

Vue.component('EmbedWrap', EmbedWrap)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
