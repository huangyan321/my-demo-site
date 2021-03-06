// template.js
module.exports = {
  vueTemplate: (componentName) => {
    return `<template>
  <div class="${componentName}">
    组件${componentName}
  </div>
</template>
<script>
export default {
  name: '${componentName}'
}
</script>
<style lang="scss" scoped>
.${componentName} {

}
</style>
`;
  },
  entryTemplate: `import Main from './main.vue'
export default Main`,
};
