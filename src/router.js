import Vue from 'vue';
import Router from 'vue-router';

import Values from './views/Values.vue';
import Diagnostics from './views/Diagnostics.vue';
import System from './views/System.vue';
import Dockers from './views/Dockers.vue';

import Configuration from './views/Configuration.vue';


Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Values',
      props: {
        tab: 1
      },
      component: Values
    },
    {
      path: '/values',
      name: 'Values',
      props: {
        tab: 1
      },
      component: Values
    },
    {
      path: '/diagnostics',
      name: 'Diagnostics',
      props: {
        tab: 2
      },
      component: Diagnostics
    },
    {
      path: '/system',
      name: 'System',
      props: {
        tab: 3
      },
      component: System
    },
    {
      path: '/dockers',
      name: 'Dockers',
      props: {
        tab: 4
      },
      component: Dockers
    },
    {
      path: '/configuration',
      name: 'Configuration',
      props: {
        tab: 5
      },
      component: Configuration
    },
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});
