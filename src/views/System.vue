<template>
  <div class="view view-system">
    <section>
      <h1>System</h1>

      <ul>
        <li>
          <span>Date:</span> {{ date }}
        </li>
        <li>
          <span>Time:</span> {{ time }}
        </li>
        <li>
          <span>Hostname:</span> 
          <div>{{ hostname }}</div>
        </li>
        <li>
          <span>Serial:</span> 
          <div>{{ serial }}</div>
        </li>
        <li>
          <span>Uptime:</span> 
          <div>{{ uptime }}</div>
        </li>
        <li>
          <span>ETH0 IP:</span> 
          <div>{{ eth0Ip }}</div>
        </li>
        <li>
          <span>ETH0 MAC:</span> 
          <div>{{ eth0Mac }}</div>
        </li>
        <li>
          <span>ETH0 Speed:</span> 
          <div>{{ eth0Speed }}</div>
        </li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
      </ul>
    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'System',
  computed: mapState(['date', 'time', 'hostname', 'serial', 'uptime', 'eth0Ip', 'eth0Mac', 'eth0Speed']),
  methods: {
    displayInfo(payload) {
      return payload ? 'running' : 'stopped';
    }
  }
}
</script>