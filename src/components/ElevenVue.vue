<template>

  <div style="height: inherit">
    <div style="height: 20px; width:100%;background-color: aquamarine">
      <a :href="'http://localhost:9000'" style="float: left">返回</a>
    </div>

    <div style="width: 15%;min-height: 850px;background-color: coral;float: left;margin-left: -34px">
      <div>
        <ul>
          <li v-for="menu in menuList" style="width: 100%">
            {{menu.name}}
          </li>
        </ul>
      </div>
      <div>
        <button @click = "action++">变换颜色</button>
      </div>
    </div>
    <div style="width: 85%;height: 850px;background-color: cadetblue;float: right" v-if="action %2 === 0">

       <p> 内容部分1</p>
      <div>
        测试使用v-text：<label v-text="count"></label>
      </div>
      <br>
      计数：<label>{{count}}</label>
      <br>
      <button @click="count++">加1</button>
      <button @click="count--">减1</button>
    </div>
    <div style="width: 85%;height: 850px;background-color: chartreuse;float: right" v-if="action %2 === 1">
      <p>内容部分2</p>
    </div>
    <!--<div style="text-align: center">-->
      <!--<h1>欢迎来到ElevenVue</h1>-->
    <!--</div>-->
    <!--<div>-->
      <!--<button v-on:click="outputMessage()">打印消息</button>-->
    <!--</div>-->
  </div>
</template>

<script>
export default {
  name: 'ElevenVue',
  data () {
    return {
      action:1,
      count:0,
      menuList:[
        {
          order:1,
          name:"首页",
          subMenu:[
            {

            }
          ]
        },
        {
          order:1,
          name:"资讯管理",
          subMenu:[
            {
              order:1,
              name:"资讯分类",
            },
            {
              order:2,
              name:"资讯内容",
            }
          ]
        }
      ]
    }
  },
  methods:{
    outputMessage:function () {
      console.log("2222222222222");
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
