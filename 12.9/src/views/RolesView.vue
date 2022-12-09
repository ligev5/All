<template>
  <div class="box">
    <el-button type="primary" class="add" @click="dialogFormVisible = true">添加角色</el-button>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      row-key="id"
    >
      <!-- <el-table-column width="50">></el-table-column> -->
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="roleName" label="角色名称"> </el-table-column>
      <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row, scope.$index)"
            >编辑</el-button
          >
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(scope.$index)">删除</el-button>
          <el-button type="warning" icon="el-icon-setting" size="mini" @click="rights">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加对话框 -->
    <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 修改对话框 -->
    <el-dialog title="添加角色" :visible.sync="dialogFormVisible1">
      <el-form :model="ruleForm1" :rules="rules" ref="ruleForm1" label-width="80px">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="ruleForm1.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="ruleForm1.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      dialogFormVisible1: false,
      ruleForm: {
        roleName: '',
        roleDesc: ''
      },
      ruleForm1: {
        roleName: '',
        roleDesc: ''
      },
      Id: -1,
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.tableData.push(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
        this.dialogFormVisible = false
      })
    },
    edit(row, index) {
      this.dialogFormVisible1 = true
      this.Id = index
      this.ruleForm1.roleName = row.roleName
      this.ruleForm1.roleDesc = row.roleDesc
    },
    del(index) {
      this.tableData.splice(index, 1)
    },
    update() {
      this.tableData[this.Id].roleName = this.ruleForm1.roleName
      this.tableData[this.Id].roleDesc = this.ruleForm1.roleDesc
      this.dialogFormVisible1 = false
    },
    rights() {}
  },
  created() {
    this.$http.get('./api/roles').then((res) => {
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

<style lang='scss' scoped>
.box {
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
}
.add {
  margin-bottom: 20px;
}
</style>
