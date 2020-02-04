<template>
  <div class="view view-values">
    <section>
      <h1>Values</h1>

      <div>
        <ul>
          <li>
            <span>Batch Name:</span> 
            <div>{{ batchName }}</div>
          </li>
          <li>
            <span>Batch State:</span> 
            <div>{{ batchState }}</div>
          </li>
          <li>
            <span>Glucose:</span> 
            <div>{{ glucose[glucose.length - 1] }} g/L</div>
          </li>
          <li>
            <span>Acq. Time:</span> 
            <div>{{ acqTime }}</div>
          </li>
          <li>
            <span>Acq. Date:</span> 
            <div>{{ acqDate }}</div>
          </li>
        </ul>
        
        <svg width="390" :height="`${ chartHeight + 20 }`">

          <g class="grid">
            <line x1="60" y1="10" x2="60" y2="210" />

            <text x="27" y="15">{{ chartTo }}</text>
            <text x="27" :y="`${((chartHeight / 4) * 1) + 15}`">15</text>
            <text x="27" :y="`${((chartHeight / 4) * 2) + 15}`">10</text>
            <text x="27" :y="`${((chartHeight / 4) * 3) + 15}`">5</text>
            <text x="27" :y="`${chartHeight + 15}`">{{ chartFrom }}</text>

            <line x1="55" y1="10" x2="380" y2="10" />
            <line x1="55" :y1="`${ (chartHeight / 4) + 10 }`" x2="380" :y2="`${ (chartHeight / 4) + 10 }`" />
            <line x1="55" :y1="`${ (chartHeight / 2) + 10 }`" x2="380" :y2="`${ (chartHeight / 2) + 10 }`" />
            <line x1="55" :y1="`${ (chartHeight / 2) + (chartHeight / 4) + 10 }`" x2="380" :y2="`${ (chartHeight / 2) + (chartHeight / 4) + 10 }`" />
            <line x1="55" :y1="`${ chartHeight + 10 }`" x2="380" :y2="`${ chartHeight + 10 }`" />
          </g>

          <g class="chart">
            <g v-for="(point, pointId) in glucose" :key="pointId">
              <line v-if="pointId > 0" 
                :x1="`${ 60 + ((pointId - 1) * 11) }`"
                :x2="`${ 60 + (pointId * 11) }`"


                

                :y1="`${ chartHeight - (glucose[pointId - 1] - chartFrom) * (chartHeight / chartRange) + 10 }`"
                :y2="`${ chartHeight - (point - chartFrom) * (chartHeight / chartRange) + 10 }`"
              />
            </g>
          </g>

        </svg>
      </div>

      <!-- 
              :x1="`${ 60 + ((pointId - 1) * 7.5) }`"
              :y1="`${ 310 - (glucose[pointId - 1] * 10) }`" 
              :x2="`${ 60 + (pointId * 7.5) }`"
              :y2="`${ 310 - (point * 10) }`"
       -->

    </section>
  </div>
</template>


<script>
import { mapState } from 'vuex';


export default {
  data() {
    return {
      chartFrom: 0,
      chartTo: 20,
      chartRange: Number,
      chartHeight: 200,
    }
  },
  name: 'Values',
  computed: mapState(['batchName', 'batchState', 'glucose', 'acqTime', 'acqDate']),
  mounted() {
    this.chartRange = this.chartTo - this.chartFrom;
    console.log('range: ', this.chartRange);
  }
}
</script>