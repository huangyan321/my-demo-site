<template>
  <div class="message">
    <transition mode="out-in">
      <div class="mark">
        <div class="inner">
          <div
            class="title"
            :style="{ backgroundColor: themeMap[theme].background }"
          >
            <span class="text">{{ title }}</span>
            <span class="close" @click="$MessageBox.hide()">x</span>
          </div>
          <div class="content">{{ content }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'MessageBox',
  components: {},
  props: {
    title: {
      type: String,
      default: 'i am title',
    },
    content: {
      type: String,
      default: 'i am content',
    },
    theme: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'warning', 'success'].includes(value);
      },
    },
  },
  data() {
    return {
      themeMap: {
        primary: {
          background: '#409EFF',
        },
        warning: {
          background: '#E6A23C',
        },
        success: {
          background: '#67C23A',
        },
      },
    };
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
.message {
  font-size: 20px;
  .mark {
    position: fixed;
    top: 0;
    left: $sideBarWidth;
    width: calc(100% - #{$sideBarWidth});
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .inner {
    position: absolute;
    left: 50%;
    top: 100px;
    width: 500px;
    height: 200px;
    margin-left: -250px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    .title {
      font-size: 25px;
      font-weight: 600;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
    }
    .content {
      padding: 15px;
    }
  }
}
</style>
