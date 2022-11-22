<template>
  <div>
    <el-table
      :data="adminList"
     
      style="width: 100%">
        <el-table-column
         type="index"
         width="120"
           prop="user_name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="注册日期"
        width="250">
      </el-table-column>
      <el-table-column
        prop="city"
        label="地址"
        width="250">
      </el-table-column>
      <el-table-column
        prop="admin"
        width="650"
        label="管理员">
      </el-table-column>
    </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[10, 15, 20, 25]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
 </div>
</template>

<script>
export default {
  data () {
    return {
        adminList:[],
          pagesize:10,
      pagenum:1,
      total:124709,
    }
  },
  methods: {
     handleCurrentChange(val){
      this.pagenum=val
      this.admin()
    },
    handleSizeChange(val){
      this.pagesize=val
      this.admin()
    },
    admin(){
        this.$axios.get('https://elm.cangdu.org/admin/all?',{params:{offset:this.pagenum,limit:this.pagesize}}).then(res=>{
            console.log(res);
            this.adminList=res.data.data
        })
    }
  },
  created () {
    this.admin()
  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
