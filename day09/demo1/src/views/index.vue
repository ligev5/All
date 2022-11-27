<template>
  <div class="box">
    <div class="top">
      <div class="hea">
        <img src="1.png" alt="" class="img1" />
        <img src="2.png" alt="" class="img2" />
      </div>
      <h2>~Today I need to~</h2>
      <div class="nav">
        <input type="text" placeholder="Add new todo…" v-model="value" />
        <button class="add" @click="add">Submit</button>
      </div>
      <p class="bot" v-if="flag == false">
        <img src="3.png" alt="" /><span>
          Congrat,you have no more tasks to do</span>
      </p>
      <ul>
        <li v-for="(item, index) in arr" :key="index" >
          <div class="aside">
            <input
              type="checkbox"
              v-model="item.status"
              class="check"
            />
            <p>{{ item.value }}</p>
          </div>
          <p class="del" @click="del(index)">x</p>
        </li>
      </ul>
      <ul>
        <li v-for="(item, index) in list" :key="index" class="li" >
          <div class="list">
            <input
              type="checkbox"
              v-model="item.status"
              class="check"
            />
            <p>{{ item.value }}</p>
          </div>
          <p class="del" @click="dels(index)">x</p>
        </li>
      </ul>
      <div class="footer" >
        <p>item left</p>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
        <p>Clear Completed</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
      list: [],
      checked: false,
      value: "",
      flag: false
    };
  },
  methods: {
    add() {
      this.arr.push({ status: false, value: this.value, num: 1 });
      this.flag = true;
      this.value = "";
    },

    del(index) {
      this.arr.splice(index, 1);
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
};
</script>

<style lang='scss' scoped>
.box {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(to right, #fca2b1, #ffc2a0);
}
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  padding: 0 40px;
  box-sizing: border-box;
  position: absolute;
  bottom: 20px;
  p {
    padding: 3px 5px;
    box-sizing: border-box;
    border-radius: 5px;
  }
}
.aside {
  display: flex;
}
ul {
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}
.li {
  background-color: #fe7345;
  color: white;
}

li {
  display: flex;
  width: 300px;
  margin-left: 50px;
  border-radius: 5px;
  height: 40px;
  line-height: 40px;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;
}
.active {
  background-color: #fe7345;
  color: white;
}
.top {
  position: relative;
  width: 430px;
  background-color: #f2f2f2;
  border-radius: 15px;
  margin: 150px auto;
  padding: 30px 0;
  box-sizing: border-box;
  .hea {
    display: flex;
    width: 100%;
    height: 150px;
    .img1 {
      width: 100px;
      height: 100px;
      margin-left: 100px;
    }
    .img2 {
      width: 120px;
      height: 50px;
      margin: 25px 0 0 10px;
    }
  }
  h2 {
    text-align: center;
    color: #494a4b;
  }
  .nav {
    input {
      border: none;
      background-color: #f2f2f2;
      border-bottom: 2px #fe7345 dashed;
      margin: 20px 5px 0 50px;
      width: 240px;
      outline: none;
    }
    .add {
      width: 70px;
      height: 30px;
      border: 2px solid black;
      border-radius: 7px;
      box-shadow: 0px 2px 0px 0px black;
      transform: rotate(5deg);
    }
  }
  .bot {
    height: 30px;
    color: #b7b8b8;
    display: flex;
    margin: 50px 0 0 80px;
    font-size: 12px;
    img {
      width: 16px;
      height: 18px;
      margin-top: 5px;
    }
    span {
      height: 30px;
      line-height: 30px;
    }
  }
}
</style>
