<template>
  <div>
    <div class="block">
      <div class="absolute">祖先为块级元素在padding边界开始绝对定位</div>
    </div>
    <span class="inline">
      <div class="absolute">祖先为行内元素在内容边界开始绝对定位</div>
    </span>
  </div>
</template>
<script>
export default {
  name: 'Position',
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //life cycle
  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.block {
  width: 200px;
  height: 100px;
  background-color: gray;
  position: relative;
  padding: 30px;
  margin-bottom: 50px;
  .absolute {
    position: absolute;
  }
}
.inline {
  width: 200px;
  background-color: gray;
  position: relative;
  padding: 30px;
  .absolute {
    position: absolute;
  }
}
</style>
