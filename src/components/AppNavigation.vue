<template>
  <ul class="app-navigation">
    <li>
      <router-link to="/values">Values</router-link>
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
    <li>
      <router-link to="/configuration">Helper</router-link>
    </li>
  </ul>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'AppNavigation',
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