<template>
  <div>
    <p>{{msg}}</p>
    <p v-bind:title="mssage">
      查看信息
    </p>
    <p v-if="flag">从开始你就后悔下注</p>
    <p v-else>这圈子你没办法踏入</p>
    <button @click="flag=!flag">so</button>
    <p v-show="flag">老子饶舌天子</p>
    <div>
      <ul>
        <li v-for="item in list" :key="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>
    <button @click="eqit">编辑</button><br />
    <input type="text" @change="change" v-model="input">
    {{input}}
 </div>
</template>

<script>
export default {
  data () {
    return {
      input:'',
      msg:'PG One',
      mssage:'页面加载',
      flag:false,
      list:[
        {
          id:1,
          name:'张三'
        },
        {
          id:2,
          name:'李四'
        },
        {
          id:3,
          name:'王五'
        },
      ]
    }
  },
  methods: {
    eqit(){
      this.list[0].name='老六'
    },
    change(e){
      console.log(e);
    }
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
