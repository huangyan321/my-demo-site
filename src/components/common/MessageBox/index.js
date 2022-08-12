import MessageBox from './MessageBox.vue';

export default {
  install(Vue) {
    let instance = null;
    Vue.component(MessageBox.name, MessageBox);
    Vue.prototype.$MessageBox = {
      show,
      hide,
      success,
      warning,
    };

    function show(props) {
      const Message = Vue.extend({
        render: (h) =>
          h('message-box', {
            props: props,
          }),
      });
      instance = new Message();
      this.VM = instance.$mount();
      document.body.appendChild(this.VM.$el);
    }
    function hide() {
      this.VM.$destroy();
      document.body.removeChild(this.VM.$el);
      instance ? (instance = null) : '';
      this.VM = null;
    }
    function success() {
      this.show({
        theme: 'success',
      });
    }
    function warning() {
      this.show({
        theme: 'warning',
      });
    }
  },
};
