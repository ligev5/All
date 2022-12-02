<template>
  <div>
    <slot></slot>
    <slot name="center">梅西</slot>
    <slot name="center1">李白</slot>
    <slot name="center2">韩信</slot>
 </div>
</template>

<script>
export default {
    props:['game'],
  data () {
    return {
      tutulist:'666'
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
div{
    width: 150px;
    height: 200px;
    background-color: #85cbe5;
}
h3{
    background-color: #fa9b07;
    text-align: center;
}
</style>
