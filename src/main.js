// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  paperManager from './js/paperManage'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app', //表示该实例要挂载到那个DOM元素
  router,
  components: { App },//该文件最终会替换el绑定的DOM元素？
  template: '<App/>'
});
