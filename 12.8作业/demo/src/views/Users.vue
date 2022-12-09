<template>
  <div>
    <div class="card">
      <div style="margin-top: 15px">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <el-button type="primary" style="margin-left: 15px" @click="add">添加用户</el-button>
      </div>
      <el-table :data="reslist" border>
        <el-table-column type="index" label="#" width="180"> </el-table-column>
        <el-table-column prop="username" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
        <el-table-column prop="mobile" label="电话" width="180"> </el-table-column>
        <el-table-column prop="role_name" label="超级管理员" width="180"> </el-table-column>
        <el-table-column prop="mg_state" label="状态" width="180">
          <template slot-scope="scope">
            <el-switch
              @change="change(scope.row)"
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button size="mini" type="primary"  @click="handleEdit(scope.row,scope.$index)"
								><i class="el-icon-edit"></i
							></el-button>
							<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
								><i class="el-icon-delete"></i
							></el-button>
							<el-button type="warning" size="mini" @click="share"><i class="el-icon-setting"></i></el-button>
						</template>
					</el-table-column>
      </el-table>
			<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.params.pagenum"
      :page-sizes="[1, 2, 4, 6]"
      :page-size="this.params.pagesize"
			 layout="total, sizes, prev, pager, next, jumper"
      :total="list.length">
    </el-pagination>
    </div>
		<!-- 添加模态框 -->
    <el-dialog title="添加用户" :visible.sync="dialogVisible" width="55%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="身份" prop="role_name">
          <el-input v-model="ruleForm.role_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

	<!-- 编辑模态框 -->
		<el-dialog
  title="编辑用户"
  :visible.sync="dialogVisibles"
  width="50%"
  >
  <el-form :model="ruleForm1" :rules="rules1" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm1.username" disabled></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm1.email"></el-input>
  </el-form-item>
	<el-form-item label="手机" prop="mobile">
    <el-input v-model="ruleForm1.mobile"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="dialogVisibles=false">取消</el-button>
    <el-button type="primary" @click="eqit">确定</el-button>
  </el-form-item>
</el-form>
</el-dialog>

	<!-- 分配模态框 -->
		<el-dialog
  title="分配角色"
  :visible.sync="dialogVisiblea"
  width="50%"
  >

	</el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {

      input: '',
      params: {
        query: '',
        pagenum: 1, //当前页码
        pagesize: 5 //每页多少条
      },
      list: [],
			tablelist:[],
      dialogVisible: false,
			dialogVisibles:false,
			dialogVisiblea:false,
      ruleForm: {
        username: '',
        email: '',
        role_name: '',
        mobile: ''
      },
			ruleForm1:{
				username:'',
				email:'',
				mobile:'',
			},
			eqid:-1,
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        mobile: [{ required: true, message: '请输入电话', trigger: 'blur' }],
        role_name: [{ required: true, message: '请输入管理员身份', trigger: 'blur' }]
      },
			rules1: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
        mobile: [{ required: true, message: '请输入电话', trigger: 'blur' }],
      }
    }
  },
  methods: {
    getlist() {
      this.$http({ method: 'get', params: this.params, url: '/api/users' }).then((res) => {
        console.log(res, '21312321')
        this.list = res.data.data.users
				this.tablelist=res.data.data.users
      })
    },
    add() {
      this.dialogVisible = true
    },
    change(row) {
      let uId = row.id
      let type = row.mg_state
      this.$http({ method: 'put', url: `/api/status/uId=${uId}/type=${type}` }).then((res) => {
        console.log(res)
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: res.data.meta.msg,
            type: 'error'
          })
        }
      })
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.list.push({ ...this.ruleForm })
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.dialogVisible = false
          this.ruleForm = {
            username: '',
            role_name: '',
            email: '',
            mobile: ''
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    handleDelete(index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.list.splice(index)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
		handleEdit(row,index){
			this.dialogVisibles=true
			this.ruleForm1.username=this.list[index].username
			this.ruleForm1.email=this.list[index].email
			this.ruleForm1.mobile=this.list[index].mobile
			this.eqid=index
		},
		eqit(){
			this.dialogVisibles=false
			this.list[this.eqid].email=this.ruleForm1.email
			this.list[this.eqid].mobile=this.ruleForm1.mobile
			 this.$message({
          message: '修改成功',
          type: 'success'
        });
		},
		handleCurrentChange(val){
			console.log(val);
			this.params.pagenum=val
		},
		handleSizeChange(val){
			console.log(val);
			this.params.pagesize=val
		},
		share(){
			this.dialogVisiblea=true
		},
		search(){
			this.list=this.tablelist.filter(i=>i.username.includes(this.input))
		}
  },
  created() {
    this.getlist()
  },
  mounted() {},
  components: {},
  computed: {
			reslist(){
				return this.list.slice(
					this.params.pagesize * (this.params.pagenum-1),
					this.params.pagesize * this.params.pagenum
				)
			}
	},
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
.input-with-select {
  width: 500px;
  margin-left: 20px;
  margin-bottom: 15px;
}
.el-pagination{
	margin-top: 20px;
	margin-left: 20px;
}
</style>
