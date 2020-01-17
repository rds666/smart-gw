<template>
  <div class="view view-control">
    <section>

      <div class="setpoint">
        <div>
          <span>Set setpoint</span>
          <div>
            {{ setpoint }}<span> rpm</span>
          </div>
        </div>

        <button v-if="mode == 'manual'" @click="decreaseSetpoint">
          <div>&minus;</div>
        </button>
        <div v-else class="inactive-button">
          <div>&minus;</div>
        </div>

        <button v-if="mode == 'manual'" @click="increaseSetpoint">
          <div>&plus;</div>
        </button>
        <div v-else class="inactive-button">
          <div>&plus;</div>
        </div>
      </div>

      <div class="running">
        <div>
          {{ actual > 0 ? 'Running' : 'Stopped' }}
        </div>

        <button v-if="mode == 'manual'" @click="stop" class="stop"><div>STOP</div></button>
        <div v-else class="inactive-button"><div>STOP</div></div>

        <button v-if="mode == 'manual'" @click="start" class="start"><div>SET</div></button>
        <div v-else class="inactive-button"><div>SET</div></div>
      </div>

    </section>
  </div>
</template>


<script>
import {mapState} from 'vuex';


export default {
  name: 'Control',
  data() {
    return {
      localSetpoint: 0,
    }
  },
  computed: mapState(['mode', 'enable', 'actual', 'setpoint']),
  methods: {

    increaseSetpoint() {
      if (this.setpoint < 120) {
        this.uibuilderSend('setpoint', this.setpoint + 1);
      }
      // this.$store.dispatch('setSetpoint', this.localSetpoint);
    },

    decreaseSetpoint() {
      if (this.setpoint > 0) {
        this.uibuilderSend('setpoint', this.setpoint - 1);
      }
      // this.$store.dispatch('setSetpoint', this.localSetpoint);
    },

    start() {
      // this.$store.dispatch('setSetpoint', this.localSetpoint);
      // this.uibuilderSend('setpoint', this.localSetpoint);

      // this.$store.dispatch('start');

      if (this.setpoint > 0) {
        this.uibuilderSend('start', true);
      } else {
        this.uibuilderSend('start', false);
      }
    },

    stop() {
      // this.$store.dispatch('stop');
      this.uibuilderSend('stop', true);
    },

  },
}
</script>