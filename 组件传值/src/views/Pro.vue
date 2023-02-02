<template>
    <div>
      <h1>祖组件</h1>
      <span>名称：{{obj.name}}</span> |
      <span>最后更新于：{{update}}</span>
      <parents></parents>
    </div>
  </template>
  
  <script>
  import parents from './parents.vue';
  export default {
    data(){
      return{
        obj:{
          name:'JavaScript',
        },
        update:'2021年06月',
      }
    },
    provide(){
      return {
        obj: this.obj, 
        app: this,
      }
    },
    components: {
      parents,
    },
  }
  </script>