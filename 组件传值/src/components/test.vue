<template>
    <div>
       
    </div>
  </template>
  <script>
    export default {
      name:'child',
      data(){
        return{
          childParams:"",
        }
      },
      methods:{
        //val为父组件传过来的值
        childMethod(val){
          this.childParams = val
          console.log(val,'我是父组件传过来的值你来打我啊')
        }
      }
    }
  </script>
  <style>
  
  </style>