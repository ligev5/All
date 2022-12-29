<template>
  <div class="box">
    <h1 style="text-align: center; color: red">班级点名器</h1>
    <div class="list">
      <div class="name" v-for="(item, index) in list" :key="index">
        {{ item.name }}
      </div>
    </div>
    <ul>
      <li @click="one">单人点名</li>
      <li @click="two">双人点名</li>
      <li @click="boy">男生点名</li>
      <li @click="girl">女生点名</li>
    </ul>
    <div class="feiw">天选之子:{{ cortlist }}</div>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const data = reactive({
      list: [
        {
          name: "女",
          id: 0,
        },
        {
          name: "女2",
          id: 0,
        },
        {
          name: "男",
          id: 1,
        },
        {
          name: "男1",
          id: 1,
        },
        {
          name: "男2",
          id: 1,
        },
        {
          name: "男3",
          id: 1,
        },
        {
          name: "男4",
          id: 1,
        },
        {
          name: "女3",
          id: 0,
        },
        {
          name: "女4",
          id: 0,
        },
        {
          name: "女5",
          id: 0,
        },
        {
          name: "女6",
          id: 0,
        },
        {
          name: "女7",
          id: 0,
        },
        {
          name: "男5",
          id: 1,
        },
        {
          name: "女8",
          id: 0,
        },
        {
          name: "女9",
          id: 0,
        },
      ],
      flag: false,
      // 被点中的同学
      cortlist: "",
      //拷贝一个新数组
      coplaylist: [],
      // 被点中的学生索引
      current: "",
      // 控制按钮被点击多次导致开启多个定时器
      time: null,
      num: 0,
    });
    /***
     *单人点名
     ***/
    const one = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          // 生成随机数，生成的数字根据name的长度决定
          var sum = Math.floor(Math.random() * data.coplaylist.length);
          data.num++;
          data.cortlist = data.coplaylist[sum].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            // 把选中的同学添加到新数组
            data.cortlist = data.coplaylist[sum].name;
            data.coplaylist.splice(sum, 1);
          }
        }, 100);
      }
    };
    /***
     *双人点名
     ***/
    const two = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          var num1 = Math.floor(Math.random() * data.coplaylist.length);
          var num2 = Math.floor(Math.random() * data.coplaylist.length);
          data.num++;
          data.cortlist =
            data.coplaylist[num1].name + "," + data.coplaylist[num2].name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            data.cortlist =
              data.coplaylist[num1].name + "," + data.coplaylist[num2].name;
            data.coplaylist.splice(num1, 1);
            data.coplaylist.splice(num2, 1);
          }
        }, 100);
      }
    };
    /***
     *男生点名
     ***/
    const boy = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          //把性别是男的循环到一个新数组
          var boy=[]
          if(boy.length==0){
            data.coplaylist.forEach(i=>{
              if(i.id==1){
                boy.push(i)
              }
            })
          }
          // 生成随机数，生成的数字根据name的长度决定
          var sum = Math.floor(Math.random() * boy.length);
          data.num++;
          data.cortlist = boy.name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            // 把选中的同学添加到新数组
            data.cortlist = boy[sum].name;
            boy.splice(sum, 1);
          }
        }, 100);
      }
    };
    /***
     *女生点名
     ***/
    const girl = () => {
      if (data.time == null) {
        data.time = setInterval(() => {
          // 解构赋值新数组
          data.coplaylist = [...data.list];
          //把性别是男的循环到一个新数组
          var girl=[]
          if(girl.length==0){
            data.coplaylist.forEach(i=>{
              if(i.id==0){
                girl.push(i)
              }
            })
          }
          // 生成随机数，生成的数字根据name的长度决定
          var sum = Math.floor(Math.random() * girl.length);
          data.num++;
          data.cortlist = girl.name;
          if (data.num == 20) {
            clearInterval(data.time);
            data.time = null;
            data.num = 0;
            // 把选中的同学添加到新数组
            data.cortlist = girl[sum].name;
            girl.splice(sum, 1);
          }
        }, 100);
      }
    };
    return { ...toRefs(data), one, two, boy, girl };
  },
};
</script>

<style lang="scss">
.box {
  width: 100vw;
  height: 100vh;
  // background: url(../../public/3.jpg) no-repeat;
  // background-size: 100% 100%;
  overflow: hidden;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 300px;
  background-color: rgb(192, 255, 209);
  color: #fff;
  flex-wrap: wrap;
}
.name {
  width: 100px;
  height: 30px;
  background-color: rgb(112, 112, 216);
  text-align: center;
  margin: 10px;
  line-height: 30px;
}
li {
  width: 100px;
  height: 50px;
  background-color: rgb(62, 57, 57);
  text-align: center;
  line-height: 50px;
  margin: 10px 20px;
  color: rgb(112, 216, 166);
}
.feiw {
  position: fixed;
  right: 400px;
  top: 100px;
  color: rgb(128, 0, 0);
  font-size: 40px;
  font-weight: 700;
}
ul{
  display: flex;
}
</style>
