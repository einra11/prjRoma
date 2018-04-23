import Vue from 'vue'
import App from './App.vue'

import jQuery from 'jquery'
global.jQuery = jQuery


new Vue({
  el: '#app',
  render: h => h(App)
})
