<template>
  <div class="view view-configuration">
    <section>
      Screen width: {{ screenWidth }}
      <br>
      Screen height: {{ screenHeight }}
      <br>
      Window inner width: {{ windowInnerWidth }}
      <br>
      Window inner height: {{ windowInnerHeight }}
      <br>
      Window outer width: {{ windowOuterWidth }}
      <br>
      Window outer height: {{ windowOuterHeight }}
    </section>
  </div>
</template>


<script>
export default {
  name: 'Helpers',
  data() {
    return {
      screenWidth: Number,
      screenHeight: Number,
      windowInnerWidth: Number,
      windowInnerHeight: Number,
      windowOuterWidth: Number,
      windowOuterHeight: Number
    }
  },
  mounted() {
    this.screenWidth = screen.width;
    this.screenHeight = screen.height;
    this.windowInnerWidth = window.innerWidth;
    this.windowInnerHeight = window.innerHeight;
    this.windowOuterWidth = window.outerWidth;
    this.windowOuterHeight = window.outerHeight;
  }
}
</script>
