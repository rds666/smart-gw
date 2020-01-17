<template>
  <div class="view view-values">
    <section>
      
      <svg width="350" height="120" style="display: none">

        <g class="grid">
          <line x1="60" y1="10" x2="60" y2="110" />

          <text x="27" y="15">30&deg;</text>
          <line x1="55" y1="10" x2="350" y2="10" />
<!--
          <text x="27" y="40">25&deg;</text>
-->
          <line x1="55" y1="35" x2="350" y2="35" />
          <text x="27" y="65">25&deg;</text>
          <line x1="55" y1="60" x2="350" y2="60" />
<!--
          <text x="27" y="90">15&deg;</text>
-->
          <line x1="55" y1="85" x2="350" y2="85" />
          <text x="27" y="115">20&deg;</text>
          <line x1="55" y1="110" x2="350" y2="110" />
        </g>

        <g v-for="(point, pointId) in sensor1" :key="pointId">
          <line v-if="pointId > 0" 
            :x1="`${ 60 + ((pointId - 1) * 10) }`"
            :y1="`${ 310 - (sensor1[pointId - 1] * 10) }`" 
            :x2="`${ 60 + (pointId * 10) }`"
            :y2="`${ 310 - (point * 10) }`"
          />
        </g>
      </svg>

    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'Values',
  computed: mapState(['sensor1']),
}
</script>