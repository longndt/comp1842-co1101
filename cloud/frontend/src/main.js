import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.css'

import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 2000
  }
})

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
