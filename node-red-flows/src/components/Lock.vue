<template>
    <div :class="`lock ${animEffect}`">
        <div>
            <label for="lock-password">Please authenticate</label>
            <input type="password" id="lock-passowrd" @keyup.enter="verify()" ref="focus">
        </div>
    </div>
</template>


<script>
export default {
    name: 'Lock',
    data() {
        return {
            animEffect: ''
        }
    },
    methods: {
        verify() {
            this.animEffect = 'fade-out';
            setTimeout( () => this.$parent.lock = false, 250);
        }
    },
    mounted() {
        this.$refs.focus.focus();
    }
}
</script>