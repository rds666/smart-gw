<template>
  <div class="view view-alerts">
    <section>
      <div v-if="alerts.length == 0">
        No alerts.
      </div>

      <div v-else v-for="(alert, alertId) in alerts" :key="alertId">
        <div>
          <span>{{ alert.code }}</span>
          <div>{{ alert.text }}</div>
        </div>
        <button @click="acknowledge(alertId)"><div>Acknowledge</div></button>
      </div>
    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'Alerts',
  computed: mapState(['alerts']),
  methods: {
    acknowledge(alertId) {
      this.$store.dispatch('removeAlert', alertId);
    }
  },
}
</script>