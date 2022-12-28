<template>
  <div class="map">
    <div id="box" style="width: 100%; height: 300px">
      <h3>慕课外卖销售大盘</h3>
      <div class="text">User Total Count</div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {

};
</script>

<style lang="scss" scoped>
.map {
  width: 98%;
  height: 360px;
  background-color: #424446;
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
	color: #fff;
  overflow: hidden;
	margin-top: 40px;
}
h3{
  margin: 0;
}
.text{
  font-size: 12px;
  transform: scale(0.8); // 缩放
  width: 90px;
}
</style>
