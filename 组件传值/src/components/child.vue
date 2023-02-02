<template>
  <div>
    {{ msg }}
    <button @click="add">子传父</button>
 </div>
</template>

<script>

export default {
    props:{
        msg:String
    },
  data () {
    return {
       list:'子传父123'
    }
  },
  methods: {
    add(){
        this.$emit('addlist',this.list)
    }
  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
