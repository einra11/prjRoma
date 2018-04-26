import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import Routes from './routes.js'


Vue.use(VueRouter);


const router = new VueRouter({
    routes:Routes,
    mode:'history'
});
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB8jh_T5MGpdCdC3zRbCoCpUToRhgTez5U',
    libraries: 'directions', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  },

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
})

import jQuery from 'jquery'
global.jQuery = jQuery


new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
