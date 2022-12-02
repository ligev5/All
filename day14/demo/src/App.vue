<template>
  <div id="app">
    <nav>
      <router-link to="/">具名插槽</router-link> |
      <router-link to="/about">默认插槽</router-link>|
      <router-link to="/slot">作用域插槽</router-link>|
      <router-link to="/router">路由跳转</router-link>|
      <router-link to="/routers">多级路由跳转</router-link>|
      <router-link to="/routing">命名路由，传参</router-link>|
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
