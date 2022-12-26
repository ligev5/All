<template>
  <div class="userAge">
    <div class="header">
      <div class="left">
        <div class="top">慕课外卖用户年龄分布&平均年龄</div>
        <div class="bottom">Takeaway of Age</div>
      </div>
      <div class="right"><span>30.24</span>岁</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.userAge {
  padding: 20px 20px 0 20px;
	background: #2a2b2d;
  .header {
    display: flex;
		color: white;
    .left {
      .top {
        font-size: 15px;
      }
      .bottom {
        font-size: 2px;
      }
    }
    .right {
			padding-left: 20px;
			font-size:
      span {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
}
</style>
