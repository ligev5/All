<template>
  <div>
    <el-container>
      <el-aside
        :width="isCollapse == false ? '200px' : '65px'"
        :class="isCollapse == false ? 'el-aside1' : 'el-aside2'"
      >
        <div class="aside">
          <img src="../assets/ihrm图标.png" alt="" />
          <el-menu
            default-active="/dashboard"
            class="el-menu-vertical-demo"
            background-color="#5686fe"
            text-color="#fff"
            active-text-color="#fff"
            :collapse="isCollapse"
            router
          >
            <el-menu-item index="/dashboard">
              <i class="el-icon-bangzhu" style="color: #fff"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/departments">
              <i class="el-icon-document-copy" style="color: #fff"></i>
              <span slot="title">组织架构</span>
            </el-menu-item>
            <el-menu-item index="/employees">
              <i class="el-icon-user" style="color: #fff"></i>
              <span slot="title">员工</span>
            </el-menu-item>
            <el-menu-item index="/setting">
              <i class="el-icon-s-cooperation" style="color: #fff"></i>
              <span slot="title">公司设置</span>
            </el-menu-item>
            <el-menu-item index="/permission">
              <i class="el-icon-setting" style="color: #fff"></i>
              <span slot="title">权限管理</span>
            </el-menu-item>
            <el-menu-item index="/social_securitys">
              <i class="el-icon-s-operation" style="color: #fff"></i>
              <span slot="title">社保</span>
            </el-menu-item>
            <el-menu-item index="/approvals">
              <i class="el-icon-s-operation" style="color: #fff"></i>
              <span slot="title">审批</span>
            </el-menu-item>
            <el-menu-item index="/attendances">
              <i class="el-icon-edit-outline" style="color: #fff"></i>
              <span slot="title">考勤</span>
            </el-menu-item>
            <el-menu-item index="/salarys">
              <i class="el-icon-document-copy" style="color: #fff"></i>
              <span slot="title">工资</span>
            </el-menu-item>
          </el-menu>
          <img src="../assets/IHRM下放图标.png" alt="" class="aside-imgs" />
        </div>
      </el-aside>
      <el-container>
        <el-header>
          <div class="home">
            <div class="home-left">
              <i class="el-icon-s-unfold" @click="isCollapse = !isCollapse"></i>
              <h2 style="color: #fff">江苏传智播客教育科技股份有限公司</h2>
              <p class="tyb">体验版</p>
            </div>
            <div class="home-rigth">
              <i class="el-icon-search"></i>
              <img src="../assets/问号图标.png" aloptionst="" />
              <i class="el-icon-full-screen"></i>
              <i class="el-icon-aim"></i>
              <el-color-picker></el-color-picker>
              <img src="../assets/头像.png" alt="" />
              <span>{{ username }}</span>
              <el-dropdown>
                <i class="el-icon-caret-bottom" style="color: #fff"></i>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item @click.native="$router.push('/dashboard')"
                    >首页</el-dropdown-item
                  >
                  <el-dropdown-item
                    @click.native="
                      $router.push('https://gitee.com/shuiruohanyu/hrsaas-sd18')
                    "
                    >项目地址</el-dropdown-item
                  >
                  <el-dropdown-item divided @click.native="logLogin"
                    >退出登录</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from '../untils/Status'
/**引入封装的登录接口 */
import { profilePost } from '../untils/api/index'
/**引入封装的cookie */
import { removeToken } from '../untils/auth'
export default {
  data() {
    return {
      /**左侧内容的展示 */
      isCollapse: false,
      /**昵称 */
      username: ''
    }
  },
  methods: {
    /**退出登录 */
    logLogin() {
      this.$router.push('/login')
      removeToken()
    }
  },
  created() {},
  mounted() {
    profilePost().then((res) => {
      console.log(res)
      if (res.status == STATUS.SUCCESS) {
        this.username = res.data.data.username
      }
    })
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
.el-header,
.el-footer {
  background-color: #5485fd;
  color: #333;
  text-align: center;
}

.el-aside1 {
  background-color: #5485fd;
  color: #333;
  text-align: center;

  height: 100vh;
  .aside {
    width: 12.5rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
    }
    .aside-imgs {
      margin-top: 15.125rem;
    }
  }
}
.el-aside2 {
  background: #5485fd;
  height: 100vh;
  width: 4.0625rem;
  .aside {
    width: 4.6875rem;
    height: 5rem;
    img {
      width: 100%;
      height: 100%;
    }
    .aside-imgs {
      margin-top: 13.75rem;
    }
  }
}
.el-main {
  background-color: #edeff2;
  color: #333;
}
.el-menu {
  border-right: solid 0px;
}

.home {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .home-left {
    margin-top: 0.6875rem;
    width: 31.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .tyb {
      width: 3.75rem;
      height: 1.875rem;
      background: #84a9fe;
      color: #fff;
      text-align: center;
      line-height: 1.875rem;
      border-radius: 0.3125rem;
    }
    .el-icon-s-unfold {
      color: #fff;
      font-size: 1.5625rem;
    }
  }
}
.home-rigth {
  width: 18.75rem;
  // background: red;
  display: flex;
  margin-top: 0.3125rem;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
</style>
