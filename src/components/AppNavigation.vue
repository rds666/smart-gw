<template>
  <ul :class="`app-navigation active-${ tab }`">
    <li>
      <router-link to="/" exact>Values</router-link>
    </li>
    <li>
      <router-link to="/diagram">Diagnostics</router-link>
    </li>
    <li>
      <router-link to="/system">System</router-link>
    </li>
    <li>
      <router-link to="/dockers">Docekrs</router-link>
    </li>
  </ul>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'AppNavigation',
  props: ['tab'],
  data() {
    return {
      tabControl: true,
      tabAlerts: false,
      tabSensors: false,
    }
  },
  methods: {
  }
}
</script>