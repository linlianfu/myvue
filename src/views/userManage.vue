<template>
  <div>
    <button @click="pageUserInfo">数据加载</button>
    <el-table
      :data="userList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="identity"
        label="证件号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="region"
        label="地区"
        width="180">
      </el-table-column>
      <el-table-column
        prop="unitName"
        label="工作单位"
        width="180">
      </el-table-column>

    </el-table>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      userList:[],
    }
  },
  computed: {
    storeCount:function () {
      return this.$store.state.count
    }
  },
  mounted(){
    this.pageUserInfo();
  },
  methods: {
    pageUserInfo () {
      this.axios.get('http://localhost:8080/web/admin/userManager/pageUserInfo')
        .then(response => {
          var list = response.data.info;
          list.forEach((item,index)=>{
            item.sex = item.sex === 1 ? "男":"女";
          });
          this.userList = list;
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style>

</style>
