<template>
  <div>Hello,{{ msg }}</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  components: {},
  // directives: {},
  // filters: {},
  // extends: {},
  // mixins: {},
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
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
<style lang="scss" scoped></style>
