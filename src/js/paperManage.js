// 定义一个名为 button-counter 的新组件
import Vue from 'vue'

console.log("my name isi paper")
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">这是paperManager 定义的组件，点击可以更新数字：{{ count }}.</button>'
});
