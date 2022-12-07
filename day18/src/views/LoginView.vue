<template>
  <div class="title">
    <div class="box">
      <!-- 表单 -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="el-input__icon iconfont icon-3702mima"
            v-model="ruleForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button type="info" @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 表单 -->
    </div>
    <div class="img">
      <img src="c63.jpeg" alt="" />
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
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$http({ method: 'post', data: this.ruleForm, url: '/api/login' }).then((res) => {
            console.log(res)
            localStorage.setItem('token', res.data.data.token)
            this.$router.push('/welcome')
          })
        } else {
          this.$message({
            type: 'error',
            message: '登录失败'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.a {
  margin-top: 0;
}
.title {
  height: 100%;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 460px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px #ccc;
}
.img {
  width: 130px;
  height: 130px;
  position: fixed;
  top: 140px;
  border-radius: 50%;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #efefef;
  }
}
.demo-ruleForm {
  margin-top: 100px;
  margin-right: 100px;
}
</style>
