<template>
  <div class="view view-sensors view-sensors-sensor-2">
    <section>
      <nav>
        <router-link to="/sensors/1">
          <div>PH</div>
        </router-link>
        <router-link to="/sensors/2" class="active">Conductivity</router-link>
      </nav>
       <svg width="350" height="120">

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

        <g v-for="(point, pointId) in sensor2" :key="pointId">
          <line v-if="pointId > 0" 
            :x1="`${ 60 + ((pointId - 1) * 10) }`"
            :y1="`${ 310 - (sensor2[pointId - 1] * 10) }`" 
            :x2="`${ 60 + (pointId * 10) }`"
            :y2="`${ 310 - (point * 10) }`"
          />
        </g>
      </svg>
      <p>
        Current conductivity reading: <span>{{ sensor2[sensor2.length - 1] }}</span>
      </p>
    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'Sensor2',
  computed: mapState(['sensor2']),
}
</script>