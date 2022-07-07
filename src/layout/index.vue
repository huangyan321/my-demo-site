<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container"></Sidebar>
    <div class="main-container">
      <AppMain></AppMain>
    </div>
  </div>
</template>
<script>
import { AppMain, Sidebar } from './components';
export default {
  name: 'Layout',
  components: { AppMain, Sidebar },
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
@import '~@/styles/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;

  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}
</style>
