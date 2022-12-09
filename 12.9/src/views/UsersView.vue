<template>
  <div class="box">
    <div>
      <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
      </el-input>
      <el-button type="primary" class="add" @click="dialogFormVisible = true">添加用户</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="list" stripe style="width: 100%">
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="username" label="姓名"> </el-table-column>
      <el-table-column prop="email" label="邮箱"> </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <el-table-column prop="role_name" label="角色"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="change"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row, scope.$index)"></el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(scope.$index)"></el-button>
          <el-button
            type="warning"
            icon="el-icon-setting"
            size="mini"
            @click="cate(scope.row, scope.$index)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.pagenum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="params.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <!-- 添加弹出框 -->
    <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑对话框 -->
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible1">
      <el-form :model="ruleForm1" :rules="rules" ref="ruleForm1" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="ruleForm1.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm1.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="ruleForm1.mobile"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分配对话框 -->
    <el-dialog title="分配角色" :visible.sync="dialogFormVisible2">
      <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" label-width="90px">
        <el-form-item label="当前用户">
          <el-input v-model="ruleForm2.username" class="input"></el-input>
        </el-form-item>
        <el-form-item label="当前的角色">
          <el-input v-model="ruleForm2.role_name" class="input"></el-input>
        </el-form-item>
        <el-form-item label="分配新角色">
          <el-select v-model="ruleForm2.region" placeholder="请选择">
            <el-option label="666" value="shanghai"></el-option>
            <el-option label="999" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      tableData: [],
      tableList: [],
      status: true,
      params: {
        pagesize: 5,
        pagenum: 1
      },
      total: 0,
      Id: -1,
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      ruleForm: {
        username: '',
        email: '',
        mobile: '',
        password: ''
      },
      ruleForm1: {
        username: '',
        email: '',
        mobile: ''
      },
      ruleForm2: {
        username: '',
        role_name: '',
        region: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.params.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.params.pagenum = val
    },
    change(val) {
      console.log(val)
      this.$message({
        message: '修改状态成功',
        type: 'success'
      })
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.tableData.push({ ...this.ruleForm, role_name: '超级管理员', mg_state: false })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    del(index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData.splice(index, 1)
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
    edit(row, index) {
      this.dialogFormVisible1 = true
      this.Id = index
      this.ruleForm1.username = row.username
      this.ruleForm1.mobile = row.mobile
      this.ruleForm1.email = row.email
    },
    update() {
      this.tableData[this.Id].mobile = this.ruleForm1.mobile
      this.tableData[this.Id].email = this.ruleForm1.email
      this.dialogFormVisible1 = false
    },
    cate(row, index) {
      this.dialogFormVisible2 = true
      this.ruleForm2.username = row.username
      this.ruleForm2.role_name = row.role_name
    },
    search() {
      this.tableData = this.tableList.filter((i) => i.username.includes(this.value))
    }
  },
  created() {
    this.$http.get('./api/users', { ...this.params, query: '' }).then((res) => {
      console.log(res)
      this.tableData = res.data.data.users
      this.tableList = res.data.data.users
      this.total = res.data.data.total
    })
  },
  mounted() {},
  components: {},
  computed: {
    list() {
      return this.tableData.slice(
        this.params.pagesize * (this.params.pagenum - 1),
        this.params.pagesize * this.params.pagenum
      )
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.input-with-select {
  width: 400px;
}
.box {
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
.add {
  margin-left: 20px;
}
</style>
