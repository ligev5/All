<template>
  <div>
      <el-table
      :data="list"
      border
      style="width: 100%">
        <el-table-column
         type="index"
         width="120"
        label="#">
      </el-table-column>
      <el-table-column
        prop="registe_time"
        label="注册日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户姓名"
        width="250">
      </el-table-column>
      <el-table-column
        prop="city"
        width="650"
        label="注册地址">
      </el-table-column>
    </el-table>

      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[8, 10, 18, 25]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
 </div>
</template>

<script>
export default {
  data() {
    return {
      total:69841,
      list: [],
      pagenum:1,
      pagesize:8
      // gift_amount
    };
  },
  methods: {
    handleSizeChange(val){
      this.pagesize=val
      this.fn()
    },
    handleCurrentChange(val){
      this.pagenum=val
      this.fn()
    },
    fn() {
      this.$axios
        .get("https://elm.cangdu.org/v1/users/list",{params:{offset:this.pagenum,limit:this.pagesize}})
        .then(res => {
          console.log(res);
          this.list = res.data;

        });
    }
  },
  created() {
    this.fn();
  },
  mounted() {},
  components: {},
  computed: {
   
  },
  watch: {}
};
</script>

<style lang='scss' scoped>
</style>
