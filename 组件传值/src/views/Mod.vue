<template>
  <div>
    <h1>v-model</h1>
    <childs v-model="value"></childs>
 </div>
</template>

<script>
import childs from "../components/childs.vue"
export default {
  data () {
    return {
        value:'这是父组件的数据'
    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {
    childs
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
