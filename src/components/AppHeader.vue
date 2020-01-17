<template>
  <header class="app-header">
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