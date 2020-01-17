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
          <span>Hostname:</span> {{ hostname }}
        </li>
        <li>
          <span>Serial:</span> {{ serial }}
        </li>
        <li>
          <span>Uptime:</span> {{ uptime }}
        </li>
        <li>
          <span>ETH0 IP:</span> {{ eth0Ip }}
        </li>
        <li>
          <span>ETH0 MAC:</span> {{ eth0Mac }}
        </li>
        <li>
          <span>ETH0 Speed:</span> {{ eth0Speed }}
        </li>
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