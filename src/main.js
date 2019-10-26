// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  paperManager from './js/paperManage'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app', //表示该实例要挂载到哪个DOM元素
  router,
  components: { App },//表示注册一个当前页面的局部组件，其APP是通过 import 引入的
  template: '<App/>'//<App></App>简写程<App/>，这是ES6的语法
});
