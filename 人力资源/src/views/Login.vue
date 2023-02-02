<template>
  <div class="Login">
    <div class="center">
      <h1>iHRM 后台登陆系统</h1>
      <!-- 登录表单 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="40px"
        class="demo-ruleForm"
      >
        <el-form-item prop="mobile">
          <el-input
            v-model="ruleForm.mobile"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="ruleForm.password"
            show-password
            prefix-icon="el-icon-s-grid"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="click-login"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <h4 style="text-align: center; color: #ffffff">还没有账号？立即注册</h4>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from '../untils/Status'
/**引入封装的cookie */
import { setToken } from '../untils/auth'
/**引入封装的登录接口 */
import { LoginPost } from '../untils/api/Login'
export default {
  data() {
    return {
      /**账号密码双向绑定 */
      ruleForm: {
        mobile: '13800000002',
        password: '123456'
      },
      /**账号密码的校验 */
      rules: {
        mobile: [
          {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    /**登录按钮 */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (
            this.ruleForm.mobile == '13800000002' &&
            this.ruleForm.password == '123456'
          ) {
            LoginPost(this.ruleForm).then((res) => {
              console.log(res)
              if (res.status == STATUS.SUCCESS) {
                setToken(res.data.data)
                this.$router.push('/dashboard')
                this.$notify({
                  title: '登录成功',
                  message: '登录成功',
                  type: 'success'
                })
              }
            })
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '这是一条错误的提示消息'
          })
        }
      })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**全局 */
.Login {
  width: 100vw;
  height: 100vh;
  background: url(../assets/背景图.jpg);
  background-size: 100% 100%;
}
/**中间内容 */
.center {
  width: 37.5rem;
  height: 31.25rem;
  position: absolute;
  // opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  // box-shadow: 0 0 10px #ddd;
  border-radius: 5%;
  h1 {
    color: #fff;
    font-size: 45px;
    text-align: center;
    margin-top: 10px;
  }
}

/**element-ui样式修改 */
.demo-ruleForm {
  width: 460px;
  margin-top: 20px;
  opacity: 0.5;
  margin-left: 50px;
}
::v-deep .el-input__inner {
  height: 50px;
}
.click-login {
  width: 420px;
  height: 40px;
}
</style>
