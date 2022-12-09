<template>
  <div class="box">
    <el-table :data="tableData" stripe border style="width: 100%">
      <el-table-column label="#" type="index"> </el-table-column>
      <el-table-column prop="authName" label="权限名称"> </el-table-column>
      <el-table-column prop="path" label="路径"> </el-table-column>
      <el-table-column label="权限等级">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" plain v-show="scope.row.level == 0">一级</el-button>
          <el-button type="success" size="mini" plain v-show="scope.row.level == 1">二级</el-button>
          <el-button type="warning" size="mini" plain v-show="scope.row.level == 2">三级</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {},
  created() {
    this.$http.get('./api/rights/:list').then((res) => {
      console.log(res)
      this.tableData = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
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
</style>
