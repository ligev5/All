<template>
  <div class="box">
    <div>
      <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
      <el-button type="primary" class="add" @click="$router.push('/add')">添加商品</el-button>
    </div>
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column label="#" type="index"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
      <el-table-column prop="goods_price" label="商品价格(元)"> </el-table-column>
      <el-table-column prop="goods_number" label="商品重量"> </el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">
          {{ scope.row.add_time | filterTime }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="del(scope.$index)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      tableData: [],
      tableList: [],
      pagesize: 5,
      pagenum: 1,
      total: 0
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.pagenum = val
    },
    search() {
      this.tableData = this.tableList.filter((i) => i.goods_name.includes(this.value))
    },
    del(index) {
      this.tableData.splice(index, 1)
    }
  },
  created() {
    this.$http.get('./api/goods', { pagesize: this.pagesize, pagenum: this.pagenum, query: '' }).then((res) => {
      console.log(res)
      this.tableData = res.data.data.goods
      this.tableList = res.data.data.goods
      this.total = res.data.data.total
    })
  },
  mounted() {},
  components: {},
  computed: {
    list() {
      return this.tableData.slice(this.pagesize * (this.pagenum - 1), this.pagesize * this.pagenum)
    }
  },
  filters: {
    filterTime(val) {
      return new Date(val * 1000).toLocaleString()
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
.add {
  margin-left: 20px;
}
.input-with-select {
  width: 400px;
}
</style>
