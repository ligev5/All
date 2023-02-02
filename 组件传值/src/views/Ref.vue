<template>
    <div>
      
      <button @click="giveChildValue()">点击给子组件传个值</button>
      <test ref="testFlag"></test>
    </div>
  </template>
  <script>
    import test from '../components/test.vue'
    export default {
      name:'father',
      components:{
        test
      },
      data(){
        return{
          fatherToChild:'儿子我是你爸爸',//将这个变量传值给子组件
        }
      },
      methods:{
        giveChildValue(){
          this.$refs.testFlag.childMethod(this.fatherToChild)
        }
      }
    }
  </script>
  <style>
  
  </style>