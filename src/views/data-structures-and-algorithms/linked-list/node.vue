<template>
  <div class="node">
    <span v-if="isHead" class="head">head</span>
    <div class="val">{{ nodeInfo.element || 'null' }}</div>
    <div class="next">
      <div v-if="nodeInfo.head || nodeInfo.next" class="line"></div>
    </div>
    <Node
      v-if="nodeInfo.head || nodeInfo.next"
      :node-info="nodeInfo.head || nodeInfo.next"
      :is-head="!!nodeInfo.head"
      class="child_node"
    ></Node>
  </div>
</template>
<script>
export default {
  name: 'Node',
  components: {},
  props: {
    nodeInfo: {
      type: Object,
      default: () => ({}),
    },
    isHead: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped>
.node {
  width: 120px;
  height: 100px;
  margin: 20px;
  display: flex;
  border: 1px solid gray;
  position: relative;
  box-sizing: border-box;
  .next {
    width: 35%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid gray;
  }
  .val {
    width: 65%;
    height: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .head {
    color: red;
    position: absolute;
    top: -20px;
    left: 40px;
  }
  .child_node {
    position: absolute;
    right: -150px;
    margin: 0;
    top: -1px;
  }
  .line {
    position: absolute;
    width: 50px;
    height: 2px;
    right: -30px;
    background-color: gray;
  }
}
</style>
