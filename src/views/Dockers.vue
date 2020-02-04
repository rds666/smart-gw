<template>
  <div class="view view-dockers">
    <section>
      <h1>Dockers</h1>

      <ul>
        <li>
          <span>Comm gateway:</span> 
          <div>{{ displayInfo(commGateway) }}</div>
        </li>
        <li>
          <span>Control module:</span> 
          <div>{{ displayInfo(controlModule) }}</div>
        </li>
        <li>
          <span>Config module:</span> 
          <div>{{ displayInfo(configModule) }}</div>
        </li>
        <li>
          <span>Display module:</span> 
          <div>{{ displayInfo(displayModule) }}</div>
        </li>
        <li>
          <span>Mosquitto:</span> 
          <div>{{ displayInfo(mosquitto) }}</div>
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'Dockers',
  computed: mapState(['commGateway', 'controlModule', 'configModule', 'displayModule', 'mosquitto']),
  methods: {
    displayInfo(payload) {
      return payload ? 'running' : 'stopped';
    }
  }
}
</script>