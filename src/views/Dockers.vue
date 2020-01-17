<template>
  <div class="view view-dockers">
    <section>
      <h1>Dockers</h1>

      <ul>
        <li>
          <span>Comm gateway:</span> {{ displayInfo(commGateway) }}
        </li>
        <li>
          <span>Control module:</span> {{ displayInfo(controlModule) }}
        </li>
        <li>
          <span>Configm module:</span> {{ displayInfo(configModule) }}
        </li>
        <li>
          <span>Display module:</span> {{ displayInfo(displayModule) }}
        </li>
        <li>
          <span>Mosquitto:</span> {{ displayInfo(mosquitto) }}
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