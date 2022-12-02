<template>
  <div>
<Child>
   <template >
       <h1 slot="center"></h1>
   </template>
</Child>
 </div>
</template>

<script>
import Child from '../components/Child.vue'
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
Child
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
p{
    color: greenyellow;
}
</style>
