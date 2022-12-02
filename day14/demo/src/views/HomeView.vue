<template>
  <div>
    <Child>
      <template slot="center">
        <div>
          具名1
        </div>
      </template>
      <template v-slot:center1>
        <div>
          具名2
        </div>
      </template>
      <template #center2>
        <div>
          具名2
        </div>
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
</style>

