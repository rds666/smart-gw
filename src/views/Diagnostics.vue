<template>
  <div class="view view-diagnostics">
    <section>
      <h1>Diagnostics</h1>
      <h2>Raman Connectivity</h2>
      <ul>
        <li>
          <span>Reachable:</span> 
          <div>{{ reachable }}</div>
        </li>
        <li>
          <span>OPCUA Port Open:</span> 
          <div>{{ opcuaPortOpen }}</div>
        </li>
        <li>
          <span>OPCUA Port Running:</span> 
          <div>{{ opcuaPortRunning }}</div>
        </li>
        <li>
          <span>Binded with:</span> 
          <div>{{ bindedWith }}</div>
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