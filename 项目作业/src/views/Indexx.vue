<template>
  <div>
    <div class="top">
        <p class="center">数据统计</p>
        <p class="nav">
            <span class="cent">当日数据:</span>
            <span class="cen"><span class="size">6</span>新增用户</span>
            <span class="cen"><span class="size">1</span>新增订单</span>
            <span class="cen"><span class="size">15</span>新增订单</span>
        </p>
        <p class="bottom">
            <span class="cente">总数据:</span>
            <span class="cen"><span class="size">69869</span>注册用户</span>
            <span class="cen"><span class="size">32687</span>订单</span>
            <span class="cen"><span class="size">124709</span>管理员</span>
        </p>
    </div>
    <div>
        <div id="main" :style="{width:'1000px',height:'600px'}"></div>
    </div>
 </div>
</template>

<script>
import * as echarts from 'echarts';
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
    var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: 'Temperature Change in the Coming Week'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
};

option && myChart.setOption(option);
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
    .top{
        width: 1200px;
        text-align: center;
        .center{
            font-size: 22px;
        }
        p{
            margin-top: 10px;
            .cen{
                width: 200px;
                height: 35px;
                border-radius: 5px;
                margin: 0 10px;
                line-height: 35px;
                background: #e5e9f2;
                text-align: center;
                display: inline-block;
            }
            .cent{
                width: 200px;
                height: 35px;
                border-radius: 5px;
                line-height: 35px;
                margin-right: 10px;
                background: #ff9800;
                text-align: center;
                display: inline-block;
                font-size: 23px;
                color: #ffffff;
            }
            .cente{
                width: 200px;
                height: 35px;
                border-radius: 5px;
                line-height: 35px;
                margin-right: 10px;
                font-size: 23px;
                color: #ffffff;
                background: #20a0ff;
                text-align: center;
                display: inline-block;
            }
            .size{
                font-size: 25px;
                display: inline-block;
            }
        }
        .bottom{
            margin-bottom: 20px;
        }
    }
</style>
