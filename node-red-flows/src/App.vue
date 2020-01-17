<template>
    <div id="app">
        <lock v-if="lock"></lock>


        <div class="view">
            <section class="left-column">
                LEFT
            </section>

            <section class="center-column">
                <div class="image-container">
                    <div>
                        <pump v-for="(pump, pumpId) in [pump1, pump2, pump3]" :pump="pump" :pumpId="`${pumpId + 1}`" :key="pumpId"></pump>
                        <button @click="closeAllPumps()" class="close-all-pump">Close all pumps</button>
                    </div>
                    <piping-left :pump1="pump1" :pump2="pump2" :pump3="pump3"></piping-left>
                </div>
            </section>

            <section class="right-column">
                <img src="./assets/images/right-column.jpg">
            </section>
        </div>


        <vue-tabs class="main-tabs">
            <v-tab title="PUMPS">

                <vue-tabs class="sub-tabs">
                    <v-tab :title="`Pump ${pumpId + 1}`" v-for="(pump, pumpId) in [pump1, pump2, pump3]" :key="pumpId">
                        <div>
                            <h2>Pump {{ pumpId + 1}}</h2>
                            <button v-if="pump.enable" @click="closePump(pumpId + 1)">Close pump</button>
                            <span v-else>Pump closed</span>
                        </div>
                        <div>
                            <span> Setpoint: {{ pump.setpoint }}</span>
                            <chart :property="pump.setpoint" :height="100" :color="`white`"></chart>
                        </div>
                        <div>
                            <span> RPM: {{ pump.rpm }}</span>
                            <chart :property="pump.rpm" :height="100" :color="`white`"></chart>
                        </div>
                    </v-tab>
                </vue-tabs>

            </v-tab>
            <v-tab title="AGITATOR &amp; TANK">
                <div>
                    <h2>Agitator &amp; tank</h2>
                </div>
            </v-tab>
            <v-tab title="GAS FLOW">
                <h2>Gas flow</h2>
            </v-tab>
            <v-tab title="SENSORS &amp; CONROL">
                <h2>Sensors &amp; control</h2>
            </v-tab>
        </vue-tabs>


    </div>
</template>


<script>
import uibuilder from './../../../node_modules/node-red-contrib-uibuilder/nodes/src/uibuilderfe.js';
import Lock from './components/Lock.vue';
import Pump from './components/Pump.vue';
import PipingLeft from './components/PipingLeft.vue';
import Chart from './components/Chart.vue';


export default {
    name: 'App',
    data() {
        return {
            lock: false,
            alert: null,
            pump1: { setpoint: 0, rpm: 0, enable: false, },
            pump2: { setpoint: 0, rpm: 0, enable: false, },
            pump3: { setpoint: 0, rpm: 0, enable: false, },
            pump4: { setpoint: 0, rpm: 0, enable: false, },
            pump5: { setpoint: 0, rpm: 0, enable: false, },
        }
    },
    components: {
        'lock': Lock,
        'pump': Pump,
        'piping-left': PipingLeft,
        'chart': Chart,
    },
    methods: {
        closeAllPumps() {
            this.pump1 = { setpoint: 0, rpm: 0, enable: false, };
            this.pump2 = { setpoint: 0, rpm: 0, enable: false, };
            this.pump3 = { setpoint: 0, rpm: 0, enable: false, };
            this.pump4 = { setpoint: 0, rpm: 0, enable: false, };
            this.pump5 = { setpoint: 0, rpm: 0, enable: false, };
            uibuilder.send({
                topic: 'pump1',
                payload: { setpoint: 0, rpm: 0, enable: false, }
            });
            uibuilder.send({
                topic: 'pump2',
                payload: { setpoint: 0, rpm: 0, enable: false, }
            });
            uibuilder.send({
                topic: 'pump3',
                payload: { setpoint: 0, rpm: 0, enable: false, }
            });
        },
        closePump(pumpId) {
            this['pump' + pumpId] = { setpoint: 0, rpm: 0, enable: false, };
            uibuilder.send({
                topic: 'pump' + pumpId,
                payload: { setpoint: 0, rpm: 0, enable: false, }
            });
        }
    },
    mounted: function(){
        uibuilder.onChange('msg' , (newMsg) => {
            this[newMsg.topic] = newMsg.payload;
        });
    },
}
</script>