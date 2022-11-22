<template>


  <div>
     <el-table
    :data="shopList"
    style="width: 100%"
   border>
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.description }}</span>
          </el-form-item>
          <el-form-item label="店铺ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="评分">
            <span>{{ props.row.rating }}</span>
          </el-form-item>
          <el-form-item label="销售量">
            <span>{{ props.row.recent_order_num}}</span>
          </el-form-item>
          <el-form-item label="分类">
            <span>{{ props.row.category}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="address">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="description">
    </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
         <el-button
          size="mini"
          @click="handleEdit( scope.row,scope.$index)">编辑</el-button>
        <el-button
          size="mini"
          @click="handleadd(scope.$index, scope.row)">添加商品</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


    <el-dialog
  title="修改店铺信息"
  :visible.sync="dialogVisible"
  width="50%"
  >
  <!-- ////////////////////// -->
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="店铺名称">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
 <el-form-item label="详细地址">
    <el-input v-model="form.location"></el-input>
  </el-form-item>
   <el-form-item label="店铺介绍">
    <el-input v-model="form.intro"></el-input>
  </el-form-item>
  <el-form-item label="联系电话">
    <el-input v-model="form.tel"></el-input>
  </el-form-item>
   <el-form-item label="店铺分类">
          <el-select v-model="form.cate">
            <el-option label="快餐便当" value="快餐便当"></el-option>
            <el-option label="简餐" value="简餐"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="店铺图片" prop="image_path">
          <!-- <template slot-scope="scope"> -->
            <!-- <img  :src="ruleForm.image_path" alt="" /> -->
            <el-image src="ruleForm.image_path"></el-image>
          <!-- </template> -->
        </el-form-item>
  <el-form-item>
     <el-button @click="dialogVisible=false">取消</el-button>
    <el-button type="primary" @click="onSubmit">确定</el-button>
   
  </el-form-item>
</el-form>
</el-dialog>



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
      form:{
        username:'',
        location:'',
        intro:'',
        tel:'',
        eqid:'',
        cate:''
      },
      dialogVisible:false,
        shopList:[],
        pagesize:10,
        pagenum:1,
        total:3889,
        latitude:35.747002,
        longitude:114.297447,
        
    }
  },
  methods: {
    handleEdit(row,index){
      this.dialogVisible=true
    this.form.username=this.shopList[index].name
    this.form.location=this.shopList[index].address
    this.form.intro=this.shopList[index].description
    this.form.tel=this.shopList[index].phone
    this.form.cate=this.shopList[index].category
    this.eqid=index
    },
    onSubmit(){
      this.dialogVisible=false
      this.shopList[this.eqid].name=this.form.username
      this.shopList[this.eqid].address=this.form.location
      this.shopList[this.eqid].description=this.form.intro
      this.shopList[this.eqid].phone=this.form.tel
      this.shopList[this.eqid].category=this.form.cate
       this.$message({
          message: '修改成功',
          type: 'success'
        });
    },
    handleadd(){
      this.$router.push('/add')
    },
    handleDelete(index){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.shopList.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    },
    shop(){
        this.$axios.get('https://elm.cangdu.org/shopping/restaurants?',{params:{
          latitude:this.latitude,
          limit:this.pagesize,
          offset:this.pagenum,
          longitude:this.longitude
          
          }}).then(res=>{
            console.log(res);
            this.shopList=res.data
        })
    },
    handleCurrentChange(val){
      this.pagenum=val
      this.shop()
    },
    handleSizeChange(val){
      this.pagesize=val
      this.shop()
    }
  },
  created () {
    this.shop()
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
