<template>
  <section class="app-main">
    <!-- <transition name="fade-transform" mode="out-in"> -->
    <keep-alive :include="['Sandbox']">
      <router-view />
    </keep-alive>
    <!-- </transition> -->
  </section>
</template>
<script>
export default {
  name: 'AppMain',
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
@import '~@/styles/mixin.scss';

.app-main {
  /* 50= navbar  50  */
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: auto;
}
</style>
