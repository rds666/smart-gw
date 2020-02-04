import Vue from 'vue';
import Router from 'vue-router';

import Values from './views/Values.vue';
import Diagnostics from './views/Diagnostics.vue';
import System from './views/System.vue';
import Dockers from './views/Dockers.vue';

import Helpers from './views/Helpers.vue';


Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Values',
      component: Values
    },
    {
      path: '/values',
      name: 'Values',
      component: Values
    },
    {
      path: '/diagnostics',
      name: 'Diagnostics',
      component: Diagnostics
    },
    {
      path: '/system',
      name: 'System',
      component: System
    },
    {
      path: '/dockers',
      name: 'Dockers',
      component: Dockers
    },
    {
      path: '/helpers',
      name: 'Helpers',
      component: Helpers
    },
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});
