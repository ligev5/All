<template>

  <div>
     <el-table
    :data="foodlist"
    style="width: 100%"
   >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="食品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="餐馆名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{ props.row.item_id }}</span>
          </el-form-item>
          <el-form-item label="餐馆ID">
            <span>{{ props.row.restaurant_id }}</span>
          </el-form-item>
          <el-form-item label="食品介绍">
            <span>{{props.row.tips}}</span>
          </el-form-item>
          <el-form-item label="餐馆地址">
            <span>{{props.row.satisfy_rate}}</span>
          </el-form-item>
          <el-form-item label="食品评分">
            <span>{{ props.row.rating}}</span>
          </el-form-item>
          <el-form-item label="食品分类">
            <span>{{props.row.category_id}}</span>
          </el-form-item>
          <el-form-item label="月销量">
            <span>{{ props.row.month_sales}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="食品名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="食品介绍"
      prop="description">
    </el-table-column>
    <el-table-column
      label="评分"
      prop="rating">
    </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
         <el-button
          size="mini"
          @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
       
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


  <!-- /////////// -->
  <el-dialog
  title="修改食品信息"
  :visible.sync="dialogVisible"
  width="50%"
  >
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="食品名称">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="食品介绍">
    <el-input v-model="form.introduce"></el-input>
  </el-form-item>
   <el-form-item label="食品分类">
    <el-select v-model="form.assort" placeholder="请选择食品分类">
      <el-option label="热销榜" value="热销榜"></el-option>
      <el-option label="折扣榜" value="折扣榜"></el-option>
      <el-option label="好吃的" value="好吃的"></el-option>
      <el-option label="招牌" value="招牌"></el-option>
      <el-option label="测试榜" value="测试榜"></el-option>
      <el-option label="tytryu" value="tytryu"></el-option>
      <el-option label="5后天" value="5后天"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="店铺图片" prop="image_path">
          <template slot-scope="scope">
            <img :src="scope.image_path" alt="" />
          </template>
        </el-form-item>
        <!-- 编辑里面的表格 -->
       
  <el-form-item label="">
    <el-button type="primary">添加规格</el-button>
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
        introduce:'',
        assort:''
      },
      eqid:'',
        foodlist:[],
        pagesize:10,
        pagenum:1,
        total:3228,
        dialogVisible:false
    }
  },
  methods: {
    handleEdit(row,index){
      this.dialogVisible=true
      this.form.username=this.foodlist[index].name
      this.form.introduce=this.foodlist[index].description
      this.form.assort=this.foodlist[index].category_id
      this.eqid=index
    },
    onSubmit(){
      this.dialogVisible=false
      this.foodlist[this.eqid].name=this.form.username
      this.foodlist[this.eqid].description=this.form.introduce
      this.foodlist[this.eqid].category_id=this.form.assort
      this.$message({
          message: '修改成功',
          type: 'success'
        });
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
          this.foodlist.splice(index,1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    handleSizeChange(val){
      this.pagesize=val
      this.food()
    },
    handleCurrentChange(val){
      this.pagenum=val
      this.food()
    },
    food(){
        this.$axios.get('https://elm.cangdu.org/shopping/v2/foods?',{params:{offset:this.pagenum,limit:this.pagesize}}).then(res=>{
            console.log(res);
            this.foodlist=res.data
        })
    }
  },
  created () {
    this.food()
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
