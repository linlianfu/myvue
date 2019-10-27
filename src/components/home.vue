<template>

  <div>
    <el-container>
      <el-header>
        <tem-header></tem-header>
      </el-header>
      <el-container>
        <el-aside>
          <tem-left-banner></tem-left-banner>
        </el-aside>
        <el-main>
          <transition name="move" mode="out-in">
            <router-view class="main-container"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>

  import temHeader from './header.vue'
  import temLeftBanner from './leftBanner.vue'
    export default {
      name: "home",
      components:{
        temHeader,
        temLeftBanner
      }
    }
</script>

<style lang="less">

  .el-container{
    height: 100vh;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
