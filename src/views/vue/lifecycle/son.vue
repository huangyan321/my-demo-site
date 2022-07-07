<template>
  <div>
    <h2 ref="a">
      <span style="color: red">children data:</span>{{ childrenName }}
    </h2>
    <h2 ref="b">
      <span style="color: red">children props:</span>{{ propsName }}
    </h2>
    <h2 ref="c">
      <span style="color: red">children computed:</span>{{ countName }}
    </h2>

    <button @click="childrenClick">点击改变子组件data的childrenName</button>
    <button @click="parentClick">
      点击从子组件发射事件改变父组件data的propsName
    </button>
    <button @click="parentClick1">
      点击从子组件发射事件改变父组件data的childrenName
    </button>
  </div>
</template>
<script>
export default {
  props: {
    propsName: {
      type: String,
      default: '',
    },
  },
  watch: {
    childrenName: {
      immediate: true,
      handler(n, o) {
        console.log('------------------watch------------------------');
        console.log(
          `children watch 侦听到 childrenName 的变化 new: ${n} old: ${o}`
        );
        console.log('------------------watch------------------------');
      },
    },
    propsName: {
      immediate: true,
      handler(n, o) {
        console.log('------------------watch------------------------');
        console.log(
          `children watch 侦听到 propsName 的变化 new: ${n} old: ${o}`
        );
        console.log('------------------watch------------------------');
      },
    },
    countName: {
      immediate: true,
      handler(n, o) {
        console.log('------------------watch------------------------');
        console.log(
          `children watch 侦听到 countName 的变化 new: ${n} old: ${o}`
        );
        console.log('------------------watch------------------------');
      },
    },
  },
  computed: {
    countName() {
      console.log('------------------computed------------------------');
      console.log(
        `children computed 侦听到的变化,此时propsName: ${this.propsName},此时childrenName: ${this.childrenName}`
      );
      let h2 = document.querySelectorAll('h2');
      console.log(`此时拿到的页面中的h2:`);
      console.log(h2);
      console.log(JSON.parse(JSON.stringify(this.$refs)));
      console.log('------------------computed------------------------');
      return this.propsName + this.childrenName;
    },
  },
  data() {
    return {
      childrenName: 'unchange children',
      count: 0,
    };
  },
  beforeMount() {
    console.log('children beforeMount');
  },
  mounted() {
    console.log('children mounted');
  },
  beforeCreate() {
    console.log('children beforeCreate');
  },
  created() {
    console.log('children created');
  },
  beforeUpdate() {
    console.log('children beforeUpdate');
  },
  updated() {
    console.log('children updated');
  },
  methods: {
    childrenClick() {
      this.childrenName = `children changed childrenName ${this.count++}`;
    },
    parentClick() {
      this.$emit('change', this.count++);
    },
    parentClick1() {
      this.$emit('change1', this.count++);
    },
  },
};
</script>
<style lang="scss" scoped></style>
