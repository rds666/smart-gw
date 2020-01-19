<template>
  <div class="view view-diagnostics">
    <section>
      <h1>Diagnostics</h1>
      <h2>Raman Connectivity</h2>
      <ul>
        <li>
          <span>Reachable:</span> {{ reachable }}
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'Diagnostics',
}
</script>