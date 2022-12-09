<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '65px' : '200px'" class="aside">
        <div class="left">
          <p v-if="isCollapse ? false : true">电商后台管理</p>
          <i class="el-icon-s-operation" @click="isCollapse = !isCollapse"></i>
        </div>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          :collapse="isCollapse"
          router
          active-text-color="#ffd04b"
        >
          <el-submenu v-for="(item, index) in menusList" :key="index" :index="item.path">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                v-for="(ele, index) in item.children"
                :key="index"
                :index="ele.path"
                @click="addBread(item, ele)"
                ><i :class="ele.icon"></i>{{ ele.authName }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header"> <el-button type="info" class="log">退出</el-button></el-header>
        <el-main class="content">
          <!-- 面包屑 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in breadList" :key="index" :to="item.path">{{
              item.authName
            }}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menusList: [],
      breadList: []
    }
  },
  methods: {
    addBread(val1, val2) {
      this.breadList = [val1, val2]
    }
  },
  created() {
    this.$http.get('./api/menus').then((res) => {
      console.log(res)
      this.menusList = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #373d41;
  color: white;
}
.content {
  background-color: #eaedf1;
}
.log {
  margin-left: 90%;
}
.aside {
  width: 100%;
  height: 100vh;
  background-color: #333744;
  color: white;
  p {
    text-align: center;
    line-height: 50px;
    font-size: 22px;
  }
}
.el-icon-s-operation {
  height: 60px;
  line-height: 60px;
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>
