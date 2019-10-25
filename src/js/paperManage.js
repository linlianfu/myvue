// 定义一个名为 button-counter 的新组件
import Vue from 'vue'

console.log("my name isi paper")
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me222 {{ count }} times.</button>'
});
