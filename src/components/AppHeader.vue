<template>
  <header class="app-header">
    <img src="../assets/images/logo.png" alt="Merck Logo">
  </header>
</template>


<script>
import {mapState} from 'vuex';


export default {
  name: 'AppHeader',
  computed: mapState(['alerts']),
  methods: {
  },
}
</script>