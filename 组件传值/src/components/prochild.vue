<template>
    <div>
      <button @click="changeMsg">孙组件触发</button>
      <h3>孙组件</h3>
      <span>名称：{{obj.name}}</span> |
      <span>最后更新于：{{this.app.update}}</span>
    </div>
  </template>
   
  <script>
  export default {
    inject:['obj','app'],
    methods: {
      changeMsg(){
        this.obj.name = 'React';
        this.app.update = '2020年10月';
      }
    },
  }
  </script>