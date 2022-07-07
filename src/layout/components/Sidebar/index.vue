<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper" style="border-right: 1px solid #E8E8E8;">
      <el-menu
        :default-active="menu"
        :collapse="false"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import variables from '@/styles/variables.scss';
import SidebarItem from './SidebarItem';
export default {
  name: 'SideBar',
  components: { SidebarItem },
  props: {},
  data() {
    return {};
  },
  computed: {
    variables() {
      return variables;
    },
    menu() {
      const route = this.$route;
      const { path } = route;
      // if set path, the sidebar will highlight the path you set
      return path;
    },
    routes() {
      return this.$router.options.routes;
    },
  },
  watch: {},
  //life cycle
  mounted() {
  },

  methods: {},
};
</script>
<style lang="scss" scoped></style>
