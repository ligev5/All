<template>
  <div>
   <Category>
      <p>我是默认插槽</p>
    
        <template slot="header">
          具名插槽
        </template>
      <template slot-scope="user">
        <span v-for="item in user.list" :key="item">
          {{item}}
        </span>
      </template>
   </Category>
 </div>
</template>

<script>
import Category from "../components/Category"
export default {
  
  data () {
   
    return {
      
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {
Category
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
