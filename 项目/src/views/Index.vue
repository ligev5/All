<template>
  <div>
<el-container>
  <el-aside width="200px">
     <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      background-color="#324057"
      text-color="#fff"
      active-text-color="#20a0ff">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-folder-opened"></i>
          <span>数据管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="user">用户列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="shop">商家列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="food">食品列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="order">订单列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="admin">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    
      
         <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-plus"></i>
          <span>添加数据</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="add">添加商铺</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="goods">添加商品</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


       <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-star-on"></i>
          <span>图表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="visitor">用户分布</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>编辑</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="edit">文本编辑</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

        <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="adminset">管理员设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-warning-outline"></i>
          <span>说明</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="explain">说明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
        <el-breadcrumb separator="">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.title}}</el-breadcrumb-item>
  <el-breadcrumb-item>{{$route.meta.name}}</el-breadcrumb-item>
</el-breadcrumb>
    </el-header>
    <el-main><router-view></router-view></el-main>
  </el-container>
</el-container>

 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
    .el-breadcrumb{
        margin-top: 25px;
    }
.el-header {
  background-color: #eff2f7;
  color: #333;
  
}
.el-container {
 width: 100%;
 height: 100%;
}
.el-aside {
  background-color: #324057;
  color: #fff;
 line-height: 200px;
 min-height: 100%;
}

.el-main {
  background-color: #fff;
  color: #333;
}
</style>
