<template>
  <div>
    <span>这是store数据：{{storeCount}}</span>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2019-10-28',
        name: 'eleven',
        address: '福州市鼓楼区华博教育 1518 弄'
      }, {
        date: '2019-10-28',
        name: 'eleven',
        address: '福州市鼓楼区华博教育 1517 弄'
      }, {
        date: '2019-10-28',
        name: 'eleven',
        address: '福州市鼓楼区华博教育 1519 弄'
      }, {
        date: '2019-10-28',
        name: 'eleven',
        address: '福州市鼓楼区华博教育 1516 弄'
      }]
    }
  },
  computed: {
    storeCount:function () {
      return this.$store.state.count
    }
  }
}
</script>
<style>

</style>
