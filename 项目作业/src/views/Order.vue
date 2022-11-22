<template>
  <div>
    <el-table
    :data="orderlist"
    style="width: 100%"
   >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="用户名">
            <span>{{ props.row.order_time }}</span>
          </el-form-item>
          <el-form-item label="店铺名称">
            <span>{{ props.row.restaurant_name }}</span>
          </el-form-item>
          <el-form-item label="收货地址">
            <span>{{ props.row.time_pass }}</span>
          </el-form-item>
          <el-form-item label="店铺ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address_id }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="总价格"
      prop="total_amount">
    </el-table-column>
    <el-table-column
      label="订单状态"
      prop="status_bar.title">
      <template slot-scope="scope">
        {{scope.row.is_brand==0 ? '支付超时' : ''}}
      </template>
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
        orderlist:[],
        total:32686,
      pagesize:10,
      pagenum:1,
    }
  },
  methods: {
    handleCurrentChange(val){
      this.pagenum=val
      this.order()
    },
    handleSizeChange(val){
      this.pagesize=val
      this.order()
    },
    order(){
        this.$axios.get('https://elm.cangdu.org/bos/orders?',{params:{offset:this.pagenum,limit:this.pagesize}}).then(res=>{
            console.log(res);
            this.orderlist=res.data
        })
    }
  },
  created () {
    this.order()
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
   .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
