<template>
  <div>
    <get></get>
  
 </div>
</template>

<script>
import get from "../components/get.vue"
export default {
  data () {
    return {
   
    }
  },
  methods: {

  },
  created () {
    localStorage.setItem("name",'社会人')
   
  },
  mounted () {

  },
  components: {
    get
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
