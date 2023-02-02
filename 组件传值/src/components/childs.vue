<template>
  <div>
    <input :value="value" @input="hand" />
 </div>
</template>

<script>
export default {
    props: ["value"],
     model: {
 event: "updateValue",
},
  data () {
    return {

    }
  },
  methods: {
    hand(e) {
 this.$emit("input", e.target.value);
 // 如果有上面的重命名就是这样
 this.$emit("updateValue", e.target.value);
 },
 
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
