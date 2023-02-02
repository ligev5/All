<template>
  <div>
    <h1>{{ name }}</h1>
 </div>
</template>

<script>
 import { mapState } from 'vuex';
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

  },
  computed: {
    ...mapState(["name"])
  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
