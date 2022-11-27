<template>
  <div>
   <input type="text" v-model="value" @change="change">
   {{value}}
   <p v-if="flag">成为更好的梅西，不做任何人的影子</p>
   <p v-else>所选之路，为足球而生</p>
   <p v-show="status">这片绿茵从不缺乏天才，努力才是最终的入场券</p>
   <button @click='aa'>切换</button>
   <ul>
     <li v-for="item,index in arr" :key="index">{{item.name}}</li>
     <button @click="add">改变</button>
   </ul>
 </div>
</template>

<script>
export default {
  data () {
    return {
    value:'',
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
    change(e){
      console.log(e);
    },
    aa(){
      this.flag=!this.flag
      this.status=!this.status
    },
    add(){
      this.arr[0].name='韩信'
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
