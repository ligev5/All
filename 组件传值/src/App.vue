<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">父传字+子传父</router-link> |
      <router-link to="/Ref">Ref</router-link> |
      <router-link to="/Log">本地存储</router-link> |
      <router-link to="/Parent">praent</router-link> |
      <router-link to="/Pro">pro</router-link> |
      <router-link to="/Mod">v-model</router-link> |
      <router-link to="/attrs">attrs</router-link> |
      <router-link to="/Vx">vuex</router-link> |
      <router-link to="/Event">Eventbus</router-link> |


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
