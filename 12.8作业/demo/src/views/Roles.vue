<template>
  <div>
    <div class="card">
      <el-button type="primary" style="margin-top: 15px; margin-left: 15px" @click="dialogVisible=true">添加角色</el-button>
      <el-table :data="roleslist" border style="margin-top: 15px; margin-left: 15px">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <!-- <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item> -->
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="#" type="index"> </el-table-column>
        <el-table-column label="角色名称" prop="roleName"> </el-table-column>
        <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleEdit(scope.row, scope.$index)"
              ><i class="el-icon-edit"></i
            >编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
              ><i class="el-icon-delete"></i
            >删除</el-button>
            <el-button type="warning" size="mini"><i class="el-icon-setting"></i>分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
		<!-- 添加模态框 -->
		<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="50%"
>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名称" prop="roleName">
    <el-input v-model="ruleForm.roleName"></el-input>
  </el-form-item>
 <el-form-item label="角色描述" prop="roleDesc">
    <el-input v-model="ruleForm.roleDesc"></el-input>
  </el-form-item>
  <el-form-item>
		 <el-button @click="dialogVisible=false">取消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>

  </el-form-item>
</el-form>
</el-dialog>



		<el-dialog
  title="修改角色"
  :visible.sync="dialogVisibles"
  width="50%"
>
  <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
  <el-form-item label="角色名称" prop="roleName">
    <el-input v-model="ruleForm1.roleName"></el-input>
  </el-form-item>
 <el-form-item label="角色描述" prop="roleDesc">
    <el-input v-model="ruleForm1.roleDesc"></el-input>
  </el-form-item>
  <el-form-item>
		 <el-button @click="dialogVisibles=false">取消</el-button>
    <el-button type="primary" @click="eqit">确定</el-button>

  </el-form-item>
</el-form>
</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roleslist: [],
			dialogVisible:false,
			dialogVisibles:false,
			ruleForm:{
				roleName:'',
				roleDesc:''
			},
			ruleForm1:{
				roleName:'',
				roleDesc:''
			},
			eqid:-1,
			  rules: {
          roleName: [
            { required: true, message: '请输入角色名称', trigger: 'blur' },
          ],
					roleDesc: [
            { required: true, message: '请输入角色描述', trigger: 'blur' },
          ],
				}
    }
  },
  methods: {
		submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.roleslist.push({...this.ruleForm})
						 this.$message({
          message: '添加成功',
          type: 'success'
        });
						this.dialogVisible=false
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
			handleDelete(index){
				  this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
				this.roleslist.splice(index)
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
			},
			handleEdit(row,index){
				this.dialogVisibles=true
				this.ruleForm1.roleName=this.roleslist[index].roleName
				this.ruleForm1.roleDesc=this.roleslist[index].roleDesc
				this.eqid=index
			},
			eqit(){
				this.roleslist[this.eqid].roleName=this.ruleForm1.roleName
				this.roleslist[this.eqid].roleDesc=this.ruleForm1.roleDesc
				this.dialogVisibles=false
				 this.$message({
          message: '修改成功',
          type: 'success'
        });
			}
	},
  created() {
    this.$http({ method: 'get', url: '/api/roles' }).then((res) => {
      console.log(res)
      this.roleslist = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  height: 500px;
  margin-top: 15px;
  overflow: hidden;
  .el-table {
    width: 97%;
    margin: auto;
  }
}
</style>
