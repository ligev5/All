<template>
  <div class="home">
    <div class="header">
      <h1>大数据可视化系统数据</h1>
      <div class="TextRight">{{ times.timeText }}</div>
    </div>
    <div class="EchartsList">
      <div class="left">
        <div id="LeftTop"></div>
        <div id="LeftBottom"></div>
      </div>
      <div class="center">
        <div class="CenterTop">
          <div class="CenterTopLeft">
            <p class="title">业绩总览</p>
            <span class="h1money">30500</span>
            <span class="money">万</span>
          </div>
          <div class="CenterTopRight">
            <!-- 圆形图 -->
            <div id="CenterTopRightone"></div>
            <div id="CenterTopRighttwo"></div>
            <div id="CenterTopRightthree"></div>
          </div>
        </div>
        <div class="CenterCenter">
          <div id="CenterCenters"></div>
        </div>
        <!-- <div class="CenterBottom">
          <div id="CenterBottoms"></div>
        </div> -->
      </div>
      <div class="right">
        <div id="RightTop"></div>
        <div id="RightCenter">
          <table>
            <thead>
              <tr>
                <th class="bg"></th>
                <th class="bg">字段</th>
                <th class="bg">字段</th>
                <th class="bg">字段</th>
                <th class="bg">字段</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="bg">字段</td>
                <td>8098</td>
                <td>19.80%</td>
                <td>22</td>
                <td>368</td>
              </tr>
              <tr>
                <td class="bg">字段</td>
                <td>7506</td>
                <td>6.70%</td>
                <td>22</td>
                <td>339</td>
              </tr>
              <tr>
                <td class="bg">字段</td>
                <td>3261</td>
                <td>32.30%</td>
                <td>10</td>
                <td>325.7</td>
              </tr>
              <tr>
                <td class="bg">字段</td>
                <td>1993</td>
                <td>201%</td>
                <td>10</td>
                <td>199</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="RightBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../untils/times";
import * as echarts from "echarts";
export default {
  data() {
    return {
      times: "",
    };
  },
  methods: {
    // 获取当前时间
    getTimes() {
      this.times = setInterval(() => {
        this.times = formatDate(new Date());
      }, 1000);
    },
    // 左上角图表
    LeftTop() {
      var chartDom = document.getElementById("LeftTop");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        grid: {
          left: "50px",
          top: "50px",
          bottom: "5%",
          // containLabel: true
        },
        xAxis: {
          show: false,
          // type: 'value',
          // boundaryGap: [0, 0.01]
        },
        yAxis: [
          {
            type: "category",
            data: [
              "字段1",
              "字段2",
              "字段3",
              "字段4",
              "字段5",
              "字段6",
              "字段7",
              "字段8",
              "字段9",
            ],
            axisLine: {
              //不显示y轴线条
              show: false,
            },
            axisTick: {
              //不显示刻度
              show: false,
            },
            axisLabel: {
              //修改刻度标签里面的文字颜色设置为白色
              color: "#fff",
            },
          },
          {
            data: [
              "1514",
              "1619",
              "1623",
              "1968",
              "2158",
              "2456",
              "3506",
              "4664",
              "8390",
            ],
            axisLine: {
              //不显示y轴线条
              show: false,
            },
            axisTick: {
              //不显示刻度
              show: false,
            },
            axisLabel: {
              //修改刻度标签里面的文字颜色设置为白色
              color: "#fff",
            },
          },
        ],
        series: [
          {
            name: "条",
            type: "bar",
            data: [25, 30, 34, 40, 43, 48, 52, 56, 70],
            yAxisIndex: 0,
            itemStyle: {
              //修改第一组柱子的圆角
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#03C794",
                },
                {
                  offset: 1,
                  color: "#0094F9",
                },
              ]),
            },
            //柱子之间的距离
            barCategoryGap: 50,
            //柱子的宽度
            barWidth: 10,
            //显示柱子内的文字
            label: {
              show: true,
              //图形内显示百分比
              position: "right",
              //{c}会自动的解析为数据 data里面的数据
              formatter: "{c}%",
            },
          },
          {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
            itemStyle: {
              //修改第一组柱子的圆角
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15,
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    // 左下角图表
    LeftBottom() {
      var chartDom = document.getElementById("LeftBottom");
      var myChart = echarts.init(chartDom);
      var option = {
        // tooltip: {
        //   trigger: "axis",
        //   axisPointer: {
        //     // Use axis to trigger tooltip
        //     type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
        //   },
        // },
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        legend: {
          data: ["字段1", "字段2", "字段3"],
          textStyle: {
            color: "#fff",
          },
          top: "50",
          right: "100",
        },
        grid: {
          left: "50px",
          top: "80px",
          bottom: "7%",
          // containLabel: true
        },
        xAxis: {
          type: "category",
          data: [
            "字段1",
            "字段2",
            "字段3",
            "字段4",
            "字段5",
            "字段6",
            "字段7",
            "字段8",
            "字段9",
          ],
        },
        yAxis: {
          type: "value",
          data: ["-500", "0", "500", "1000", "1500", "2000", "2500", "3000"],
        },
        series: [
          {
            name: "字段1",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            data: [470, 500, 400, 20, 300, 20, 100, 70, 2000],
            itemStyle: {
              color: "#8bd46e",
            },
          },
          {
            name: "字段2",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            data: [10, -40, 20, 10, 10, 30, 40, 5, 200],
            itemStyle: {
              color: "#f5804d",
            },
          },
          {
            name: "字段3",
            type: "bar",
            stack: "total",
            label: {
              show: false,
            },
            data: [0, 5, 20, -20, 0, 10, 0, 0, -20],
            itemStyle: {
              color: "#248ff7",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //中间中间图表
    CenterCenters() {
      var chartDom = document.getElementById("CenterCenters");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          left: "50px",
          top: "80px",
          bottom: "7%",
          // containLabel: true
        },
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["字段1", "字段2", "字段3", "字段4", "字段5", "字段6"],
          textStyle: {
            color: "#fff",
          },
          top: "40",
          right: "240",
        },
        xAxis: [
          {
            type: "category",
            data: ["2016", "2017", "2018", "2019"],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            // min: 0,
            // max: 50,
            // interval: 50,
            data: ["0", "10", "20", "30", "40", "50"],
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "",
            min: -12,
            max: 9,
            interval: 5,
            // data: ["-12", "-9", "-6", "-3", "0", "3", "6", "9"],
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        series: [
          {
            name: "字段1",
            type: "bar",
            data: ["35", "38", "40", "40"],
            itemStyle: {
              color: "#8bd46e",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#7fd173",
                },
                {
                  offset: 1,
                  color: "#16beae",
                },
              ]),
            },
          },
          {
            name: "字段2",
            type: "bar",
            data: ["15", "15", "15", "15"],
            itemStyle: {
              color: "#4272f4",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#03C794",
                },
                {
                  offset: 1,
                  color: "#0094F9",
                },
              ]),
            },
          },
          {
            name: "字段3",
            type: "bar",
            data: ["5", "5", "5", "5"],
            itemStyle: {
              color: "#f5804d",
              barBorderRadius: 20,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#fabb13",
                },
                {
                  offset: 1,
                  color: "#f68a42",
                },
              ]),
            },
          },
          {
            name: "字段4",
            type: "line",
            data: ["30", "40", "38", "34"],
            itemStyle: {
              color: "#a1c8ae",
            },
          },
          {
            name: "字段5",
            type: "line",
            // yAxisIndex: 1,
            data: ["30", "15", "40", "50"],
            itemStyle: {
              color: "#2b63b7",
            },
          },
          {
            name: "字段6",
            type: "line",
            data: ["30", "24", "45", "5"],
            itemStyle: {
              color: "#b8a558",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //中间下边图表
    CenterBottoms() {
      var chartDom = document.getElementById("CenterBottoms");
      var myChart = echarts.init(chartDom);
      // var colors = ["#5793f3", "#d14a61", "#675bba"];
      var option = {
        tooltip: {
          trigger: "axis",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          left: "50px",
          top: "80px",
          bottom: "7%",
          // containLabel: true
        },
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        // toolbox: {
        //   show: true,
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        legend: {
          textStyle: {
            color: "#fff",
          },
        },
        xAxis: {
          type: "category",
          // boundaryGap: false,
          data: [
            "17年3月",
            "17年6月",
            "17年9月",
            "17年12月",
            "18年3月",
            "18年6月",
            "18年9月",
            "18年12月",
            "19年3月",
            "19年6月",
            "19年9月",
            "19年12月",
          ],
          // splitLine: {
          //   show: false,
          //   interval: "auto",
          // },
        },
        yAxis: [
          {
            name: "",
            // position: "left",
            type: "value",
            axisLabel: {
              formatter: "{value} %",
            },
            axisLine: {
              lineStyle: {
                color: "#e4e47e",
              },
            },
            // splitLine: {
            //   show: false,
            // },
            // min: "dataMin",
            // axisLabel: {
            //   inside: true,
            // },
            data: ["-10%", "0%", "10%", "20%", "30%", "40%", "50%"],
          },
        ],
        series: [
          {
            name: "字段1",
            // yAxisIndex: 0,
            type: "line",
            color: "#e4e47e",
            // smooth: true,
            data: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
            // animation: false,
          },
          {
            name: "字段2",
            // yAxisIndex: 1,
            type: "line",
            color: "#fe7f80",
            // smooth: true,
            data: [-5, 0, 8, 10, 40, 25, 20, 18, 20, 30, 32, 31],
            // animation: false,
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //右上边图表
    RightTop() {
      var chartDom = document.getElementById("RightTop");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          left: "50px",
          top: "80px",
          bottom: "7%",
          // containLabel: true
        },
        title: {
          text: "标题名称",
          textStyle: {
            color: "#fff",
            fontSize: 20,
          },
          // borderLeft: "10px solid #45b5f0"
          top: "20",
          left: "20",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["字段1", "字段2"],
          textStyle: {
            color: "#fff",
          },
          top: "40",
          right: "170",
        },
        xAxis: [
          {
            type: "category",
            data: ["2016", "2017", "2018", "2019"],
            // axisPointer: {
            //   type: "shadow",
            // },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            // min: 0,
            // max: 50,
            // interval: 50,
            data: [
              "0",
              "5000",
              "10000",
              "15000",
              "20000",
              "25000",
              "30000",
              "35000",
            ],
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "",
            min: 30,
            max: 0,
            interval: 5,
            // data: ["-12", "-9", "-6", "-3", "0", "3", "6", "9"],
            axisLabel: {
              formatter: "{value} %",
            },
          },
        ],
        series: [
          {
            name: "字段1",
            type: "bar",
            data: ["16000", "19000", "22500", "26000"],
            itemStyle: {
              color: "#f5804d",
              barBorderRadius: 20,
              // 柱子的宽度
              barBorderWidth: 10,
              color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: "#fabb13",
                },
                {
                  offset: 1,
                  color: "#f68a42",
                },
              ]),
            },
          },
          {
            name: "字段2",
            type: "line",
            data: ["0", "10000", "18000", "26000"],
            itemStyle: {
              color: "#d00",
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //右下边图表
    RightBottom() {
      var chartDom = document.getElementById("RightBottom");
      var myChart = echarts.init(chartDom);
      let bgColor = "#fff";
      let title = "总量";
      let color = [
        "#0E7CE2",
        "#FF8352",
        "#E271DE",
        "#F8456B",
        "#00FFFF",
        "#4AEAB0",
      ];
      let echartData = [
        {
          name: "A类",
          value: "1927",
        },
        {
          name: "B类",
          value: "1055",
        },
        {
          name: "C类",
          value: "1532",
        },
      ];

      let formatNumber = function (num) {
        let reg = /(?=(\B)(\d{3})+$)/g;
        return num.toString().replace(reg, ",");
      };
      let total = echartData.reduce((a, b) => {
        return a + b.value * 1;
      }, 0);

      var option = {
        // backgroundColor: bgColor,
        color: color,
        // tooltip: {
        //     trigger: 'item'
        // },
        title: [
          {
            text: "{name|" + title + "}\n{val|" + formatNumber(total) + "}",
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: 14,
                  fontWeight: "normal",
                  color: "#666666",
                  padding: [10, 0],
                },
                val: {
                  fontSize: 32,
                  fontWeight: "bold",
                  color: "#333333",
                },
              },
            },
          },
          {
            text: "标题名称",
            textStyle: {
              color: "#fff",
              fontSize: 20,
            },
            // borderLeft: "10px solid #45b5f0"
            top: "20",
            left: "20",
          },
        ],
        // legend: {
        //     orient: 'vertical',
        //     icon: 'rect',
        //     x: '80%',
        //     y: 'center',
        //     itemWidth: 12,
        //     itemHeight: 12,
        //     align: 'left',
        //     textStyle: {
        //         rich: {
        //             name: {
        //                 fontSize: 12
        //             },
        //             value: {
        //                 fontSize: 16,
        //                 padding: [0, 5, 0, 15]
        //             },
        //             unit: {
        //                 fontSize: 12
        //             }
        //         }
        //     },
        //     formatter: function(name) {
        //         let res = echartData.filter(v => v.name === name);
        //         res = res[0] || {};
        //         let unit = res.unit || '';
        //         return '{name|' + name + '}  {value|' + res.value + '}{unit|' + unit + '}'
        //     }
        //     // data: legendName
        // },
        series: [
          {
            type: "pie",
            radius: ["45%", "60%"],
            center: ["50%", "50%"],
            data: echartData,
            hoverAnimation: false,
            itemStyle: {
              normal: {
                borderColor: bgColor,
                borderWidth: 2,
              },

              emphasis: {
                borderColor: bgColor,
                borderWidth: 2,
                shadowBlur: 8,
                borderColor: "#00ffff",
                shadowColor: "#00ffff",
              },
            },
            labelLine: {
              normal: {
                length: 20,
                length2: 120,
                lineStyle: {
                  color: "#e6e6e6",
                },
              },
            },
            label: {
              normal: {
                formatter: (params) => {
                  return (
                    "{icon|●}{name|" +
                    params.name +
                    "}{value|" +
                    formatNumber(params.value) +
                    "}"
                  );
                },
                padding: [0, -100, 25, -100],
                rich: {
                  icon: {
                    fontSize: 16,
                  },
                  name: {
                    fontSize: 14,
                    padding: [0, 10, 0, 4],
                    color: "#666666",
                  },
                  value: {
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333333",
                  },
                },
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //第一个原型图
    CenterTopRightone() {
      var chartDom = document.getElementById("CenterTopRightone");
      var myChart = echarts.init(chartDom);
      var option = {
        color: ["#eaff00", "#e9eef4", "#fff"],
        title: {
          text: "标题名称",
          left: "center",
          top: "5%",
          textStyle: {
            color: (function () {
              return "#fff";
            })(),
            fontSize: 15,
          },
        },
        series: [
          {
            name: "物料仓",
            type: "pie",
            stillShowZeroSum: true,
            // radius: "100%",
            radius: ["50%", "70%"], //通过调整两个参数可以调整环形的大小
            center: ["50%", "50%"], // 默认全局居中
            data: [
              {
                name: "设备故障率",
                value: 106.55,
                label: {
                  show: true, //单独显示该数据项
                  formatter: "{d}%",
                  textStyle: {
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: 12,
                  },
                },
              },
              {
                value: 25,
                label: {
                  emphasis: {
                    show: false,
                  },
                },
              },
            ],
            itemStyle: {
              normal: {},
            },

            label: {
              normal: {
                //默认不显示数据
                show: false,
                position: "center",
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //第二个原型图
    CenterTopRighttwo() {
      var chartDom = document.getElementById("CenterTopRighttwo");
      var myChart = echarts.init(chartDom);
      var option = {
        color: ["#ea4d4d", "#e9eef4", "#fff"],
        title: {
          text: "标题名称",
          left: "center",
          top: "5%",
          textStyle: {
            color: (function () {
              return "#fff";
            })(),
            fontSize: 15,
          },
        },
        series: [
          {
            name: "物料仓",
            type: "pie",
            stillShowZeroSum: true,
            // radius: "100%",
            radius: ["50%", "70%"], //通过调整两个参数可以调整环形的大小
            center: ["50%", "50%"], // 默认全局居中
            data: [
              {
                name: "设备故障率",
                value: 5.12,
                label: {
                  show: true, //单独显示该数据项
                  formatter: "{d}%",
                  textStyle: {
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: 12,
                  },
                },
              },
              {
                value: 25,
                label: {
                  emphasis: {
                    show: false,
                  },
                },
              },
            ],
            itemStyle: {
              normal: {},
            },

            label: {
              normal: {
                //默认不显示数据
                show: false,
                position: "center",
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
    //第三个原型图
    CenterTopRightthree() {
      var chartDom = document.getElementById("CenterTopRightthree");
      var myChart = echarts.init(chartDom);
      var option = {
        color: ["#2548b6", "#e9eef4", "#fff"],
        title: {
          text: "标题名称",
          left: "center",
          top: "5%",
          textStyle: {
            color: (function () {
              return "#fff";
            })(),
            fontSize: 15,
          },
        },
        series: [
          {
            name: "物料仓",
            type: "pie",
            stillShowZeroSum: true,
            // radius: "100%",
            radius: ["50%", "70%"], //通过调整两个参数可以调整环形的大小
            center: ["50%", "50%"], // 默认全局居中
            data: [
              {
                name: "设备故障率",
                value: 0.51,
                label: {
                  show: true, //单独显示该数据项
                  formatter: "{d}%",
                  textStyle: {
                    fontWeight: 800,
                    color: "#fff",
                    fontSize: 12,
                  },
                },
              },
              {
                value: 25,
                label: {
                  emphasis: {
                    show: false,
                  },
                },
              },
            ],
            itemStyle: {
              normal: {},
            },

            label: {
              normal: {
                //默认不显示数据
                show: false,
                position: "center",
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
  created() {
    this.times = formatDate(new Date());
    this.getTimes();
  },
  mounted() {
    this.LeftTop();
    this.LeftBottom();
    this.CenterCenters();
    this.CenterBottoms();
    this.RightTop();
    this.RightBottom();
    this.CenterTopRightone();
    this.CenterTopRighttwo();
    this.CenterTopRightthree();
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
#CenterTopRightone {
  width: 120px;
  height: 120px;
}
#CenterTopRighttwo {
  width: 120px;
  height: 120px;
}
#CenterTopRightthree {
  width: 120px;
  height: 120px;
}
.bg {
  background-color: rgba(4, 54, 110, 0.9);
}
table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #fff;
  thead {
    tr {
      th {
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #fff;
        background-color: #032463;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  tbody {
    tr {
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #fff;
      background-color: #032463;
      color: #fff;
      font-size: 14px;
      td {
        border: 1px solid #fff;
        background-color: #06437e;
        color: #fff;
        font-size: 14px;
      }
    }
  }
}
#CenterCenters {
  width: 100%;
  height: 360px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #032463);
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
.center {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .CenterTop {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    // background-color: #03236d;
    background-color: rgba(3, 32, 101, 0.5);
    .CenterTopLeft {
      padding-bottom: 40px;
      .title {
        color: white;
        margin-top: 20px;
        text-align: left;
        padding-left: 10px;
      }
      .h1money {
        color: #fef000;
        font-size: 50px;
        font-weight: 700;
        padding-left: 30px;
      }
      .money {
        color: #fef000;
        font-size: 35px;
        font-weight: 700;
      }
    }
    .CenterTopRight {
      display: flex;
      justify-content: space-between;
      // align-items: center;
    }
  }
}
#CenterBottoms {
  width: 100%;
  height: 300px;
  background-color: #032463;
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
.left {
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right {
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
}
#RightBottom {
  width: 100%;
  height: 33%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #032463);
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
#RightTop {
  width: 100%;
  height: 33%;
  background-color: #032463;
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
#LeftTop {
  width: 400px;
  height: 480px;
  // 透明色加渐变色从左到右
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #032463);
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
#LeftBottom {
  width: 400px;
  height: 300px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), #032463);
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 10px;
    height: 40px;
    background-color: #49bcf7;
  }
}
.EchartsList {
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: space-between;
}
.home {
  width: 100%;
  height: 100%;
  background: url(../assets/bg.jpg) no-repeat;
  text-align: center;
  .header {
    width: 100%;
    height: 100px;
    background: url(../assets/head_bg.png) no-repeat;
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 30px;
      color: #fff;
      // text-align: center;
      line-height: 100px;
      flex: 1;
      margin-left: 300px;
    }
    .TextRight {
      font-size: 20px;
      color: #fff;
      line-height: 100px;
      padding-right: 20px;
    }
  }
}
</style>
