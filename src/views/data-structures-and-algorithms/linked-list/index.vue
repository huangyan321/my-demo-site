<template>
  <div>
    <h1>{{ LinkedList }}</h1>
    <div>
      <input placeholder="输入要添加的值" v-model.number="append1.val" />
      <button @click="append">append</button>
    </div>
    <div>
      <input placeholder="输入要插入的值" v-model.number="insert1.val" />
      <input placeholder="输入要插入的索引" v-model.number="insert1.index" />
      <button @click="insert">insert</button>
    </div>
    <div>
      <input placeholder="输入要移除的索引" v-model.number="del1.index" />
      <button @click="del">delete</button>
    </div>
    <div>
      <div>该节点当前索引{{ indexOf1.index }}</div>
      <input placeholder="输入要查找的节点" v-model.number="indexOf1.element" />
      <button @click="indexOf">indexOf</button>
    </div>
    <div class="grap">
      <Node :node-info="LinkedList"></Node>
    </div>
  </div>
</template>
<script>
import { LinkedList } from './utils';
import Node from './node';
export default {
  name: 'LinkedList',
  components: { Node },
  props: {},
  data() {
    return {
      LinkedList: {},
      append1: {
        val: '',
      },
      insert1: {
        index: '',
        val: '',
      },
      del1: {
        index: '',
      },
      indexOf1: {
        element: '',
        index: '',
      },
    };
  },
  computed: {},
  watch: {},
  //life cycle
  mounted() {
    this.LinkedList = new LinkedList();
  },

  methods: {
    append() {
      this.LinkedList.append(this.append1.val);
    },
    insert() {
      this.LinkedList.appendAt(this.insert1.index, this.insert1.val);
    },
    del() {
      this.LinkedList.remove(this.del1.index);
    },
    indexOf() {
      this.indexOf1.index = this.LinkedList.indexOf(this.indexOf1.element);
    },
  },
};
</script>
<style lang="scss" scoped>
.grap {
  width: 70vw;
  height: 300px;
  overflow: hidden;
  overflow-x: auto;
}
</style>
