<template>
  <div class="event">
    <div @click="boxClick">
      <div class="target1">
        target1
        <div class="target2">target2</div>
      </div>
        <div class="target3">target3</div>
    </div>
    <h1>target:{{event?.target?._prevClass}}</h1>
    <h1>currentTarget:{{event?.currentTarget?._prevClass}}</h1>
    <h1>relatedTarget:{{event?.relatedTarget?._prevClass}}</h1>
  </div>
</template>
<script>
export default {
  name: 'Event',
  components: {},
  // directives: {},
  // filters: {},
  // extends: {},
  // mixins: {},
  props: {},
  data() {
    return {
      event: null
    };
  },
  computed: {},
  watch: {},
  //life cycle
  mounted() {},

  methods: {
    boxClick(event) {
      this.event = event
      console.log(event);
    },
  },
};
</script>
<style lang="scss" scoped>
.event {
  width: 600px;
  height: 200px;
  margin: 0 auto;
  .target1 {
    width: 100px;
    height: 100px;
    background-color: red;
  }
  .target2 {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
  .target3 {
    width: 100px;
    height: 100px;
    background-color: gray;
  }
}
</style>
