<template>
  <div id="app">
    <div>
      <app-header />
      <main ref="main">
        <router-view :key="$route.fullPath" />
      </main>
      <nav>
        <app-navigation />
      </nav>
    </div>
  </div>
</template>


<script>
// import uibuilder from './../node_modules/node-red-contrib-uibuilder/nodes/src/uibuilderfe.js';
import AppHeader from './components/AppHeader.vue';
import AppNavigation from './components/AppNavigation.vue';
import router from './router';


export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-navigation': AppNavigation,
  },
  beforeMount() {
    this.uibuilderSend('init', true);

    uibuilder.onChange('msg', (msg) => {
      console.log('msg recieved: ', msg);

      // init
      if (msg.topic == 'init') {
        this.$store.dispatch('init', msg.payload);
        return;
      }

      // values
      if (msg.topic == 'batch_name') {
        this.$store.dispatch('setBatchName', msg.payload);
        return;
      }
      if (msg.topic == 'batch_state') {
        this.$store.dispatch('setBatchState', msg.payload);
        return;
      }
      if (msg.topic == 'glucose') {
        this.$store.dispatch('setGlucose', msg.payload);
        return;
      }
      if (msg.topic == 'acq_time') {
        this.$store.dispatch('setAcqTime', msg.payload);
        return;
      }
      if (msg.topic == 'acq_date') {
        this.$store.dispatch('setAcqDate', msg.payload);
        return;
      }

      // diagnostics
      if (msg.topic == 'reachable') {
        this.$store.dispatch('setReachable', msg.payload);
        return;
      }
      if (msg.topic == 'opcua_port_open') {
        this.$store.dispatch('setOpcuaPortOpen', msg.payload);
        return;
      }
      if (msg.topic == 'opcua_port_running') {
        this.$store.dispatch('setOpcuaPortRunning', msg.payload);
        return;
      }
      if (msg.topic == 'binded_with') {
        this.$store.dispatch('setBindedWith', msg.payload);
        return;
      }

      // system
      if (msg.topic == 'date') {
        this.$store.dispatch('setDate', msg.payload);
        return;
      }
      if (msg.topic == 'time') {
        this.$store.dispatch('setTime', msg.payload);
        return;
      }
      if (msg.topic == 'hostname') {
        this.$store.dispatch('setHostname', msg.payload);
        return;
      }
      if (msg.topic == 'serial') {
        this.$store.dispatch('setSerial', msg.payload);
        return;
      }
      if (msg.topic == 'uptime') {
        this.$store.dispatch('setUptime', msg.payload);
        return;
      }
      if (msg.topic == 'eth0_ip') {
        this.$store.dispatch('setEth0Ip', msg.payload);
        return;
      }
      if (msg.topic == 'eth0_mac') {
        this.$store.dispatch('setEth0Mac', msg.payload);
        return;
      }
      if (msg.topic == 'eth0_speed') {
        this.$store.dispatch('setEth0Speed', msg.payload);
        return;
      }

      // dockers
      if (msg.topic == 'comm_gateway') {
        this.$store.dispatch('setCommGateway', msg.payload);
        return;
      }
      if (msg.topic == 'control_module') {
        this.$store.dispatch('setControlModule', msg.payload);
        return;
      }
      if (msg.topic == 'config_module') {
        this.$store.dispatch('setConfigModule', msg.payload);
        return;
      }
      if (msg.topic == 'display_module') {
        this.$store.dispatch('setDisplayModule', msg.payload);
        return;
      }
      if (msg.topic == 'mosquitto') {
        this.$store.dispatch('setMosquitto', msg.payload);
        return;
      }

      // reload
      if (msg.topic == 'reload') {
        this.$router.push('/');
        location.reload();
        return;
      }
      if (msg.topic == 'reload2') {
        this.$forceUpdate();
        return;
      }

    });

  },
  methods: {
    checkRotation() {
      if (window.innerHeight < 641) {
        setTimeout( () => {
          let headerHeight = document.querySelector('.app-header').offsetHeight;
          let navHeight = document.querySelector('.app-navigation').offsetHeight;
          let mainHeight = window.innerHeight - headerHeight - navHeight;
          this.$refs.main.style.height = mainHeight + 'px';
        }, 50);
      }
    }
  },
  mounted() {
    this.checkRotation();
    window.addEventListener('resize', () => {
      this.checkRotation();
    });
  }
}
</script>