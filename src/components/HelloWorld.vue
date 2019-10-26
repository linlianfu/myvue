<template>
  <div class="hello" style="text-align: center">
    <!--<a :href="'http://localhost:9000/#/eleven'" style="float: right"> go ElevenVue</a>-->
    <router-link to="eleven">回首页</router-link>
    <br>
    <br>
    <img src="../assets/logo.png" style="clear: both">
    <h1>
      请输入msg：<input v-model="msg"/><br/>
      <p>msg:<label>{{msg}}</label></p>
    </h1>
    <div style="margin-top: 20px">
      computedReversedMsg:<label>{{computedReversedMsg}}</label> ,date:<label>{{computedNow}}</label><br>
      methodsReversedMsg:<label>{{methodsReversedMessage()}}</label>,date:<label>{{methodsNow()}}</label>
    </div>
    <div style="margin-top: 20px">
      computedUpdateHelloWord:<label>{{computedUpdateHelloWord}}</label> <br>
    </div>
    <h2>Essential Links next is myself title</h2>
    <br>
    <a  :href="'http://'+address" target="_blank">百度</a>
    <br>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWord',
      title:"this is eleven title test v-bind",
      address:"www.baidu.com",
      helloWord:"HelloWord"
    }
  },
  computed:{

    //该方法默认只为该属性体统get方法
    computedNow:function () {
      return Date.now();
    },
    computedReversedMsg:function () {
      return this.msg.split('').reverse().join('');
    },
    //同事提供get 个set属性的方法
    computedUpdateHelloWord:{
      get:function () {
        // `this` 指向 vm 实例
        this.computedUpdateHelloWord = "updateNewHelloWord";
        return this.helloWord
      },
      set:function(newValue){
        console.log("computedUpdateHelloWord setter被调用");
        console.log(newValue);
        this.helloWord = newValue;
      }
    }

  },
  methods:{
    methodsReversedMessage:function () {
      // `this` 指向 vm 实例
      return this.msg.split('').reverse().join('')
    },
    methodsNow:function () {
      // `this` 指向 vm 实例
      return  Date.now();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
