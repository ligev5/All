<template>
    <div class="wrap">
      <h4>子组件（只做中转）</h4>
      <prochild></prochild>
    </div>
  </template>
  
  <script>
  import prochild from '../components/prochild.vue';
  export default {
    components:{
        prochild,
    },
  }
  </script>