<template>
  <div>
   <slot></slot>
   <slot name="header"></slot>
   <slot :list="list"></slot>
 </div>
</template>

<script>
export default {
   
  data () {
    return {
       list:['jack','pom']
    }
  },
  methods: {

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
