<template>
  <div>
    <child :msg="msg" @addlist="addlist"></child>
 </div>
</template>

<script>
import child from "../components/child.vue"
export default {
  data () {
    return {
      msg:'父传子',
      data:[],
    }
  },
  methods: {
    addlist(value){
        this.data=value
        console.log(value);
    }
  },
  created () {

  },
  mounted () {

  },
  components: {
    child,
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
