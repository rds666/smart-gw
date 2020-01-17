import Vue from 'vue';
import App from './App.vue';
import VueTabs from 'vue-nav-tabs';
import 'vue-nav-tabs/themes/vue-tabs.css';
import './assets/scss/style.scss';
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.use(VueTabs);


// Vue.mixin({
//     methods: {
//         closePump: (pumpId) => {
//             this.closePump(pumpId);
//         }
//     }
// });


new Vue({
    el: '#app',
    render: h => h(App),
});