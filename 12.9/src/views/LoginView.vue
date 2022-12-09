<template>
  <div class="box">
    <div class="login">
      <img src="123.jpg" alt="" />
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item>
          <el-input v-model="ruleForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="ruleForm.password" prefix-icon="el-icon-shopping-bag-2"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 9, message: '长度在 3 到 9个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http({
            url: '/api/login',
            method: 'post',
            data: this.ruleForm
          }).then((res) => {
            console.log(res)
            this.$router.push('/index')
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  background: url(/public/456.jpg) no-repeat center;
  background-size: 100% 100%;
  overflow: hidden;
}
.login {
  width: 450px;
  height: 300px;
  background-color: #fff;
  margin: 200px auto;
  padding: 40px;
  box-sizing: border-box;
  padding-top: 80px;
  position: relative;
}
img {
  position: absolute;
  top: -40px;
  left: 180px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
