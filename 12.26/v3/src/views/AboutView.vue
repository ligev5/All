<template>
  <div class="">
    <!-- <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <h1>工作：{{ person.type }}</h1>
    <h1>薪资：{{ person.salary }}</h1>
    <h1>爱好：{{ person.hobbies }}</h1>
    <h1>深层对象：{{ person.a.b.c }}</h1>
    <br />

    <button @click="getname">点击增加年龄</button>
    <button @click="() => person.salary++">薪资翻倍</button>
    <button @click="changeInfo">深层修改</button> -->


    <!-- <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <h1>工作：{{ person.type }}</h1>
    <h1>薪资：{{ person.salary }}</h1>
    <h1>爱好：{{ person.hobbies }}</h1>
    <h1>深层对象：{{ person.a.b.c }}</h1>
    <br />

    <button @click="getname">点击增加年龄</button>
    <button @click="() => person.salary++">薪资翻倍</button>
    <button @click="changeInfo">深层修改</button> -->


    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <h1>工作：{{ person.type }}</h1>
    <h1>薪资：{{ person.salary }}</h1>
    <h1>爱好：{{ person.hobbies }}</h1>
    <h1>深层对象：{{ person.a.b.c }}</h1>
    <br />

    <button @click="getname">点击增加年龄</button>
    <button @click="() => person.salary++">薪资翻倍</button>
    <button @click="changeInfo">深层修改</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default {
  setup(props, ctx) {
    // const name = ref("pgone");
    // const age = ref(18);
    // const person = reactive({
    //   type: "rap",
    //   salary: "10",
    //   hobbies: ["抽烟", "喝酒", "烫头"],
    //   a: {
    //     b: {
    //       c: 666,
    //     },
    //   },
    // const name = ref("pgone");
    // const age = ref(18);
    // const person = reactive({
    //   type: "rap",
    //   salary: "10",
    //   hobbies: ["抽烟", "喝酒", "烫头"],
    //   a: {
    //     b: {
    //       c: 666,
    //     },
    //   },

      const name = ref("pgone");
    const age = ref(18);
    const person = reactive({
      type: "rap",
      salary: "10",
      hobbies: ["抽烟", "喝酒", "烫头"],
      a: {
        b: {
          c: 666,
        },
      },
    });
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const getname = () => {
      age.value++;
    };
    const changeInfo = () => {
      person.name = "jony j ";
      person.age = 20;
      (person.type = "123"), (person.hobbies[1] = "456"), (person.a.b.c = 100);

      // person.name = "jony j ";
      // person.age = 20;
      // (person.type = "123"), (person.hobbies[1] = "456"), (person.a.b.c = 100);


      // person.name = "jony j ";
      // person.age = 20;
      // (person.type = "123"), (person.hobbies[1] = "456"), (person.a.b.c = 100);
    };
    return { ...toRefs(), name, age, person, getname, changeInfo };
  },
};
</script>

<style lang="scss"></style>
