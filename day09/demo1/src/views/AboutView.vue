<template>
  <div>
    <!-- 模板字符串渲染 -->
    {{msg}}
    <p v-bind:title='mssage'>鼠标悬停几秒 查看提示信息</p>
    <p v-if="flag">成为更好的梅西，不做任何人的影子</p>
    <p v-else>所选之路，为足球而生</p>
    <p v-if="status">这片绿茵从不缺乏天才,努力才是最终的入场券</p>
    <button @click="change">梅西</button>
    <p v-show="status">历史对我紧追不舍,但我速度更快</p>
    <div>
      <ul>
        <li v-for="item,index in arr" :key="index">{{item.name}}</li>
      </ul>
      <button @click="update">修改下标属性</button>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
      msg:'成为更好的梅西，不做任何人的影子',
      mssage:'页面加载'+new Date().toLocaleString(),
      flag:true,
      status:true,
      arr:[
        {
          id:1,
          name:'阿怀'
        },
        {
          id:2,
          name:'梅西'
        },
        {
          id:3,
          name:'李白'
        },
      ]
    }
  },
  methods: {
    change(){
      this.flag=!this.flag
      this.status=!this.status
    },
    update(){
      //目前能修改，数据变了，视图也更新
      this.arr[0].name='chb'
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
