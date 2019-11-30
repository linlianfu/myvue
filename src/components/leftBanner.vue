<template>
  <div class="leftBanner-box">
    <el-menu :router="true" class="el-menu-vertical-demo">

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :route="{name: 'listOrder'}" index="1-1">订单列表</el-menu-item>
          <el-menu-item :route="{name: 'listOrder'}" index="1-2">新增订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item :route="{name: 'listOrder'}" index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">活动</span>
      </el-menu-item>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :route="{name: 'userManage'}" index="3-1">用户管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item index="4" :route="{name: 'listOrder'}">
        <i class="el-icon-setting"></i>
        <span slot="title">系统</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    components: { // 组件

    },
    computed: { // 计算

    },
    methods: { // 方法事件

    },
    mounted () { // 加载完成

    },
    created () { // 创建

    }
  }
</script>

<style lang='less'>
  .leftBanner-box{
    height: 100%;
    .el-menu-vertical-demo{
      height: 100%;
      background-color: #D3DCE6;
    }
  }
</style>
