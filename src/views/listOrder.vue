<template>
  <div>
    <span>这是store数据：{{storeCount}}</span>
    <button @click="liseUser">数据加载</button>
    <el-table
      :data="commoditySkuList"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="商品名称"
        width="180">
      </el-table-column>
    </el-table>
  </div>
  </template>

<script>
export default {
  data () {
    return {
      commoditySkuList:[],
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
  },
  methods: {
    liseUser () {
      this.axios.get('http://localhost:8080/web/admin/commodityManager/lisCommodityBySkuOr')
        .then(response => {
          debugger
          this.commoditySkuList = response.info;
        }).catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>
<style>

</style>
