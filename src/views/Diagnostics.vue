<template>
  <div class="view view-diagnostics">
    <section>
      <h1>Diagnostics</h1>
      <h2>Raman Connectivity</h2>
      <ul>
        <li>
          <span>Reachable:</span> {{ reachable }}
        </li>
        <li>
          <span>OPCUA Port Open:</span> {{ opcuaPortOpen }}
        </li>
        <li>
          <span>OPCUA Port Running:</span> {{ opcuaPortRunning }}
        </li>
      </ul>
      <hr>
      <ul>
        <li>
          <span>Binded with:</span> {{ bindedWith }}
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'Diagnostics',
  computed: mapState(['reachable', 'opcuaPortOpen', 'opcuaPortRunning', 'bindedWith']),
}
</script>