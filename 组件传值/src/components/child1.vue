<template>
    <div class="child1">
        子组件1
        <div>
            <input v-model="value" />
            <button @click="submit">提交</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:''
        }
    },
    methods:{
        submit(){
            this.$bus.$emit('name',this.value)
        }
    }
}
</script>
<style lang="scss" scoped>
    .child1{
        width: 700px;
        height: 100px;
        margin: 10px;
        border: 1px solid #333;
        .el-input{
            width: 200px;
        }
    }
</style>