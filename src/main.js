// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; //该css需要单独引入

Vue.use(ElementUI);  //全局使用这套饿了组件
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app', //表示该实例要挂载到哪个DOM元素
  router,
  components: { App },//表示注册一个当前页面的局部组件，其APP是通过 import 引入的
  template: '<App/>'//<App></App>简写程<App/>，这是ES6的语法
});
