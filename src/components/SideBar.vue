<template>
  <aside class="side-bar">
    <div class="agitator">
      <figure>
        <img src="../assets/images/agitator_bg.png" class="agitator-bg">
        <img src="../assets/images/agitator_rotor.png" class="agitator-rotor" ref="rotor">
      </figure>
    </div>
    <div>
      Actual:
      <div>{{ actual }}<span> rpm</span></div>
    </div>
    <div>
      Setpoint:
      <div>{{ setpoint }}<span> rpm</span></div>
    </div>
    <div class="mode">
      Mode:
      <div>{{ mode }}</div>
    </div>
  </aside>
</template>


<script>
import {mapState} from 'vuex';


export default {
  name: 'SideBar',
  data () {
    return {
      rotorDegreesFrom: 0,
      rotorDegreesTo: 0,
    }
  },
  computed: {
    ...mapState(['actual', 'setpoint', 'mode', 'enable']),
  },

  mounted() {
    let oldActual = 0;

    let rotorAnimation = () => {
      if (this.actual > 0) {
        this.rotorDegreesTo = this.rotorDegreesFrom + ( this.actual * 3 );

        this.$refs.rotor.animate([
          {
            transform: 'rotate(' + this.rotorDegreesFrom + 'deg)'
          },
          {
            transform: 'rotate(' + this.rotorDegreesTo + 'deg)'
          }
        ], {
          duration: 501,
          iterations: 1,
        });

        this.rotorDegreesFrom = this.rotorDegreesTo;
        if (this.rotorDegreesFrom >= 360) {
          this.rotorDegreesFrom = this.rotorDegreesFrom % 360;
        }
      }
      else {
        this.$refs.rotor.style.transform = `rotate(${ this.rotorDegreesTo }deg)`
      }
    }

    let rotorAnimationInterval = setInterval( () => {
      if (oldActual != this.actual) {
        clearInterval(rotorAnimationInterval);
        setInterval(rotorAnimation, 500);
      }
      oldActual = this.actual;
    }, 500);

  },
  
}
</script>