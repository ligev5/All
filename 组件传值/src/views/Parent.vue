<template>
    <div>
      <h1>父组件</h1>
      <childre></childre>
    </div>
  </template>
  <script>
    // 引入子组件
    import childre from '../components/childre.vue'
    export default {
      name: 'Parent',
      components: {
        childre
      },
      data () {
        return {
          msg: 'data from parent'
        }
      },
      methods: {
        fun () {
          console.log('parent fun')
        }
      }
    }
  </script>