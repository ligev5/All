<template>
  <div>
    <Child>
        <h3>{{game.list[0]}}</h3>
      <ul>
          <li v-for="item in game.data" :key="item.id">{{item.name}}</li>
      </ul>
    </Child>
    <Child>
       <h3>{{game.list[1]}}</h3>
      <ul>
          <li v-for="item in game.data" :key="item.id">{{item.game}}</li>
      </ul>
    </Child>
 </div>
</template>

<script>
import Child from '../components/Child.vue'
import food from '../../mock/food.json'
export default {
  data () {
    return {
      game:food
    }
  },
  methods: {
  },
  created () {
   console.log(this.game);
  },
  mounted () {
  },
  components: {
    Child
  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>
