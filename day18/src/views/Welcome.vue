<template>
  <div>
    <el-container>
      <el-aside :width="flag == true ? '65px' : '200px'">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          router
          :collapse="flag"
          background-color="#0a0f2f"
          text-color="#fff"
          active-text-color="#469ffa"
        >
          <p>后台管理系统</p>
          <el-submenu :index="item.path" v-for="item in menusList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index=" '/' +ele.path " v-for="ele in item.children" :key="ele.id">{{
                ele.authName
              }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="el-icon-s-data" @click="flag = !flag"></span>
          <button @click="eqit">退出</button>
        </el-header>
        <el-main>
					<el-breadcrumb separator="">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.name}}</el-breadcrumb-item>
</el-breadcrumb>
					<router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      menusList: []
    }
  },
  methods: {
    eqit() {
      localStorage.removeItem('token')
      this.$router.push('/')
    },
    fn() {
      this.$http({ method: 'get', url: '/api/menus' }).then((res) => {
        console.log(res)
        this.menusList = res.data.data
      })
    }
  },
  created() {
    this.fn()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #0a0f2f;
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 50px;
    height: 25px;
    line-height: 25px;
    text-align: center;
  }
}

.el-aside {
  background-color: #0a0f2f;
  height: 100vh;
  color: #fff;
  p {
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
  }
}

.el-main {
  background-color: #e9eef3;
}
</style>
