<template>
  <div>
    <h1>Dashboard</h1>
    <el-button @click="click">点击</el-button>
    <el-form :disabled="true">
      <el-button :disabled="disabled">点击1</el-button>
    </el-form>
    <el-link icon="el-icon-edit"
      ><i slot="icon" class="el-icon-view"></i>链接</el-link
    >
    <el-button @click="shift">切换</el-button>
    <label role="button">
      <input type="radio" />
    </label>
    <label role="button">
      <input type="radio" />
    </label>
    <br />
    <el-radio-group v-model="radio" ref="btn">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
    <div class="slider_plus">
      <div>
        <el-slider
          v-model="value"
          :disabled="disabled"
          :show-input="false"
          @change="slideChange"
        ></el-slider>
      </div>
      <div class="slider_val">{{ value }}%</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {},
  props: {
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 100,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: true,
      radio: 3,
      value: 50,
    };
  },
  computed: {},
  watch: {},
  mounted() {},

  methods: {
    shift() {
      this.model = !this.model;
    },
    click() {
      this.disabled = !this.disabled;
      // console.log(this.$refs.btn);
    },
    slideChange(value) {
      this.$emit('slideChanged', value, () => {
        // console.log('slidev4错误回调')
        this.value = this.curValue
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.slider_plus {
  width: 780px;
  height: 150px;
  display: flex;
  align-items: center;
  font-size: 42px;
  font-family: Source Han Sans CN;
  font-weight: 600;
  color: #333333;
}
.slider_val {
  margin-left: 20px;
}
.slider_plus ::v-deep .el-slider__runway {
  width: 840px;
  background: linear-gradient(94deg, #3f444b 0%, #ffffff 100%) !important;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px !important;
  height: 130px !important;
}
.slider_plus ::v-deep .el-slider__bar {
  background: transparent;
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  height: 130px !important;
}
.slider_plus ::v-deep .el-slider__button-wrapper {
  top: -7px !important;
  height: 150px !important;
}
.slider_plus ::v-deep .el-slider__button {
  transition: none;
  width: 8px !important;
  height: 150px !important;
  background: #dbdbdb;
  border-radius: 3px;
  border: none;
}
</style>
