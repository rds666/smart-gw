import Vue from 'vue';
import App from './App.vue';
import './assets/scss/style.scss';
import router from './router';
import store from './store';
// import uibuilder from './../node_modules/node-red-contrib-uibuilder/nodes/src/uibuilderfe.js';

uibuilder.start()
Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    uibuilderSend(topic, payload) {
      uibuilder.send({
        topic: topic,
        payload: payload
      });
    }
  }
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});