<template>
    <div :class="`pump anim anim-speed-${animSpeed(pump.setpoint)} ${pump.enable ? 'pump-enable' : ''}`" :id="`pump-${ pumpId }`">
        <div>
            <div class="pump-rpm">
                <div class="pump__label">Pump {{ pumpId }}</div>
                <div class="pump__value  pump-rpm">{{ pump.rpm }}/{{ pump.rpm }} rpm</div>
            </div>
            <div class="pump-setpoint">
                <div class="pump__label">Output</div>
                <div class="pump__value">{{ pump.setpoint }}%</div>
            </div>
        </div>
        <img v-if="pump.enable" src="./../assets/images/pumps/pump-active.png">
        <img v-else src="./../assets/images/pumps/pump-idle.svg">
    </div>
</template>


<script>
export default {
    name: 'Pump',
    props: ['pump', 'pumpId'],
    methods: {
        animSpeed(value) {
            if (value == 0) {
                return 0;
            } else if (value < 10) {
                return 1;
            } else {
                return Math.round(value / 10);
            }
        }
    }
}
</script>