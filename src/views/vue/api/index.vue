<template>
  <div>
    <el-button type="primary" @click="$MessageBox.show()">弹出</el-button>
    <el-button type="warning" @click="$MessageBox.warning()">弹出</el-button>
    <el-button type="success" @click="$MessageBox.success()">弹出</el-button>
  </div>
</template>
<script>
export default {
  name: 'Message',
  components: {},
  // directives: {},
  // filters: {},
  // extends: {},
  // mixins: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //life cycle
  mounted() {},

  methods: {
  },
};
</script>
<style lang="scss" scoped></style>
