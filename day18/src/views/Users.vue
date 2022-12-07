<template>
  <div>
    <div class="card">
			<div style="margin-top: 15px;">
  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">

    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
	  <el-button type="primary" style="margin-left:15px">主要按钮</el-button>
</div>
</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
			input3:'',
			params:{
				query:'',
				pagenum:1, //当前页码
				pagesize:5, //每页多少条
			}
		}
  },
  methods: {
		getlist(){
			this.$http({method:'get',params:this.params,url:'/api/users'}).then(res=>{
				console.log(res,'21312321');
			})
		}
	},
  created() {
		this.getlist()
	},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
	.card {
    border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    -webkit-transition: .3s;
    transition: .3s;
		height: 500px;
		margin-top: 15px;
}
.input-with-select{
	width: 500px;
	margin-left: 20px;
}
	</style>
