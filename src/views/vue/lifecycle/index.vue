<template>
  <div id="lifecycle">
    <h2><span style="color: red">parent data:</span>{{ propsName }}</h2>
    <h2><span style="color: red">parent countName:</span>{{ countName }}</h2>
    <h2>
      <span style="color: red">parent childrenName:</span>{{ childrenName }}
    </h2>
    <button @click="parentClick">点击改变父组件data的propsName</button>
    <Son
      :propsName="propsName"
      @change="childrenClick"
      @change1="childrenClick1"
    />
  </div>
</template>

<script>
import Son from './son';

export default {
  name: 'LifeCycle',
  components: {
    Son,
  },
  watch: {
    childrenName: {
      immediate: true,
      handler(n, o) {
        console.log('------------------watch------------------------');
        console.log(
          `parent watch 侦听到 childrenName 的变化 new: ${n} old: ${o}`
        );
        console.log('------------------watch------------------------');
      },
    },
    propsName: {
      immediate: true,
      handler(n, o) {
        console.log('------------------watch------------------------');
        console.log(`parent watch 侦听到 propsName 的变化 new: ${n} old: ${o}`);
        console.log('------------------watch------------------------');
      },
    },
    countName: {
      immediate: true,
      handler(n, o) {
        console.log('------------------watch------------------------');
        console.log(`parent watch 侦听到 countName 的变化 new: ${n} old: ${o}`);
        console.log('------------------watch------------------------');
      },
    },
  },
  computed: {
    countName() {
      console.log('------------------computed------------------------');
      console.log(
        `parent computed 侦听到的变化,此时propsName: ${this.propsName},此时childrenName: ${this.childrenName}`
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
      propsName: 'unchange parent',
      childrenName: 'unchange childrenName',
      count: 0,
    };
  },
  beforeMount() {
    console.log('parent beforeMount');
  },
  mounted() {
    console.log('parent mounted');
  },
  beforeCreate() {
    console.log('parent beforeCreate');
  },
  created() {
    console.log('parent created');
  },
  beforeUpdate() {
    console.log('parent beforeUpdate');
  },
  updated() {
    console.log('parent updated');
  },
  methods: {
    parentClick() {
      this.propsName = `parent changed propsName ${this.count++}`;
    },
    childrenClick(v) {
      this.propsName = `parent changed propsName ${v}`;
    },
    childrenClick1(v) {
      this.childrenName = `parent changed propsName ${v}`;
    },
  },
};
</script>

<style>
#lifecycle {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
