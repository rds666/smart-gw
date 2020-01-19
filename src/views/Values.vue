<template>
  <div class="view view-values">
    <section>
      <h1>Values</h1>

      <div>
        <ul>
          <li>
            <span>Batch Name:</span> {{ batchName }}
          </li>
          <li>
            <span>Batch State:</span> {{ batchState }}
          </li>
          <li>
            <span>Glucose:</span> {{ glucose[glucose.length - 1] }} g/L
          </li>
          <li>
            <span>Acquisition Time:</span> {{ acqTime }}
          </li>
          <li>
            <span>Acquisition Date:</span> {{ acqDate }}
          </li>
        </ul>
        
        <svg width="300" height="120">

          <g class="grid">
            <line x1="60" y1="10" x2="60" y2="110" />

            <text x="27" y="15">30</text>
            <line x1="55" y1="10" x2="350" y2="10" />
  <!--
            <text x="27" y="40">25&deg;</text>
  -->
            <line x1="55" y1="35" x2="350" y2="35" />
            <text x="27" y="65">25</text>
            <line x1="55" y1="60" x2="350" y2="60" />
  <!--
            <text x="27" y="90">15&deg;</text>
  -->
            <line x1="55" y1="85" x2="350" y2="85" />
            <text x="27" y="115">20</text>
            <line x1="55" y1="110" x2="350" y2="110" />
          </g>

          <g v-for="(point, pointId) in glucose" :key="pointId">
            <line v-if="pointId > 0" 
              :x1="`${ 60 + ((pointId - 1) * 7.5) }`"
              :y1="`${ 310 - (glucose[pointId - 1] * 10) }`" 
              :x2="`${ 60 + (pointId * 7.5) }`"
              :y2="`${ 310 - (point * 10) }`"
            />
          </g>
        </svg>
      </div>

    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  name: 'Values',
  computed: mapState(['batchName', 'batchState', 'glucose', 'acqTime', 'acqDate']),
}
</script>