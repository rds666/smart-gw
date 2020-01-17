<template>
   <div class="chart">
     <apexchart type="bar" :width="`${ width || 200}`" :height="`${ height || 200}`" :options="chartOptions" :series="series"></apexchart>
   </div>
</template>




<script>
import VueApexCharts from 'vue-apexcharts';


export default {
    name: 'chart',
    props: ['property', 'width', 'height', 'color'],
    data() {
      return {
        chartOptions: {
            chart: {
                foreColor: '#555',
                toolbar: { show: false }
            },
            xaxis: {
                labels: { show: false }
            },
            yaxis: {
                    min: 0,
                    max: 100,
            },
            tooltip: {
                enabled: false
            },
            colors: ['#fff'],
            dataLabels: {
                style: {
                    colors: ['none']
                }
            },
            states: { 
                normal: { 
                    filter: { type: 'none' } 
                },
                hover: { 
                    filter: { type: 'none' }
                },
                active: { filter: { type: 'darken' }
                },
            }
        },
        series: [{
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }]
      }
    },
    components: {
        'apexchart': VueApexCharts, 
    },
    methods: {
        updateChart() {
            let newSeries = this.series[0].data;
            newSeries.shift();
            newSeries.push(this.property);
            this.series = [{
                data: newSeries
            }];
        }
    },
    mounted() {
        setInterval( () => {
            this.updateChart();
        }, 3000);
    }
};
</script>