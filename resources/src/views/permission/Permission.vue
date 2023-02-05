<template>
	<div>
		<div class="top">
			<el-button type="primary" @click="dialogVisible=true">添加权限</el-button>
		</div>

		<el-table
    :data="list"
    style="width: 100%"
    row-key="id"
    border
    lazy

    :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
		<el-table-column
      prop="name"
      label="姓名"
		align="center"

      >
    </el-table-column>
    <el-table-column
      prop="code"
      label="标识"
		align="center"

      >
    </el-table-column>

    <el-table-column
		align="center"

      prop="description"
      label="描述">
    </el-table-column>

		<el-table-column
		align="center"
      fixed="right"
      label="操作"
      >
      <template scope="scope">
        <el-button  type="text" size="small" @click="add">添加</el-button>
        <el-button type="text" size="small" @click="eqit(scope.row)">编辑</el-button>
        <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>


	<el-dialog
  title="新增权限点"
  :visible.sync="dialogVisible"
  width="50%"
 >
 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="权限名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="权限标识" prop="code">
    <el-input v-model="ruleForm.code"></el-input>
  </el-form-item>
	<el-form-item label="权限描述" prop="description">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>
	<el-form-item label="开启">
		<template>
			<el-switch
  v-model="value"
  active-color="#409eff"
  inactive-color="#dcdfe6">
</el-switch>

		</template>
  </el-form-item>
	<el-form-item align="center">
    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
    <el-button @click="resetForm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
</el-dialog>


	<!-- 编辑 -->
	<el-dialog
  title="编辑权限点"
  :visible.sync="dialogVisibles"
  width="50%"
 >
 <el-form :model="ruleForm1" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="权限名称" prop="name">
    <el-input v-model="ruleForm1.name"></el-input>
  </el-form-item>
	<el-form-item label="权限标识" prop="code">
    <el-input v-model="ruleForm1.code"></el-input>
  </el-form-item>
	<el-form-item label="权限描述" prop="description">
    <el-input v-model="ruleForm1.description"></el-input>
  </el-form-item>
	<el-form-item label="开启">
		<template>
			<el-switch
  v-model="value"
  active-color="#409eff"
  inactive-color="#dcdfe6">
</el-switch>

		</template>
  </el-form-item>
	<el-form-item align="center">
    <el-button type="primary" @click="submitForms('ruleForm')">确定</el-button>
    <el-button @click="resetForms('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>

</el-dialog>




<el-dialog
  title="新增权限点"
  :visible.sync="dialogVisibless"
  width="50%"
 >
 <el-form :model="ruleForm2" :rules="ruless" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="权限名称" prop="name">
    <el-input v-model="ruleForm2.name"></el-input>
  </el-form-item>
	<el-form-item label="权限标识" prop="code">
    <el-input v-model="ruleForm2.code"></el-input>
  </el-form-item>
	<el-form-item label="权限描述" prop="description">
    <el-input v-model="ruleForm2.description"></el-input>
  </el-form-item>
	<el-form-item label="开启">
		<template>
			<el-switch
  v-model="value"
  active-color="#409eff"
  inactive-color="#dcdfe6">
</el-switch>

		</template>
  </el-form-item>
	<el-form-item align="center">
    <el-button type="primary" @click="submitFormm('ruleForm')">确定</el-button>
    <el-button @click="resetFormm('ruleForm')">取消</el-button>
  </el-form-item>
</el-form>
</el-dialog>




 </div>
</template>

<script>
import {getpower,getpush,getremove} from "../../untils/api/power"
export default {
	data () {
		return {
			list:[],
			dialogVisible:false,
			dialogVisibles:false,
			dialogVisibless:false,
			value:false,
			id:'',
			ruleForm:{
					name:'',
					code:'',
					description:''
			},
			ruleForm1:{
				name:'',
				code:'',
				description:''
			},
			ruleForm2:{
				name:'',
				code:'',
				description:''
			},
			rules: {
				name: [
            { required: true, message: '权限名称不能为空', trigger: 'blur' },
          ],
					code: [
            { required: true, message: '权限标识不能为空', trigger: 'blur' },
          ],

			},
			ruless: {
				name: [
            { required: true, message: '权限名称不能为空', trigger: 'blur' },
          ],
					code: [
            { required: true, message: '权限标识不能为空', trigger: 'blur' },
          ],

			}
		}
	},
	methods: {
		submitFormm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetFormm(formName) {
        this.$refs[formName].resetFields();
				this.dialogVisibless=false
      },
		getlist(){
			getpower().then((res)=>{
				console.log(res);
				this.list=res.data.data
			})
		},
		add(){
			this.dialogVisibless=true
		},
		eqit(row){
			console.log(row);
			this.dialogVisibles=true
			this.ruleForm1.name=row.name
			this.ruleForm1.code=row.code
			this.ruleForm1.description=row.description
		},
		del(row){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					console.log(row);
			this.id=row.id
			console.log(this.id);
			getremove(this.id).then((res)=>{
				console.log(res);
				this.getlist()
			})
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
		submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						getpush(this.ruleForm).then((res)=>{
							console.log(res);
							this.dialogVisible = false
							this.getlist()
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
				this.dialogVisible=false
      },
			submitForms(){

			},
			resetForms(){
				this.dialogVisibles=false
			},
	},
	created () {
		this.getlist()
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
	.top{
		margin: 0 auto;
		background: #fff;
		height: 70px;
		margin-top: 10px;
		border-radius: 5px;
		.el-button{
			float: right;
			margin-right: 20px;
			margin-top: 15px;
		}
	}
	.el-table{
		text-align: center;
		margin-top: 10px;
	}
</style>
