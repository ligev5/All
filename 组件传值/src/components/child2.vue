<template>
    <div class="child2">
        子组件2
        <div>
            {{value}} 提交了申请
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
    mounted(){
        this.$bus.$on('name',(value)=>{
            this.value=value;
        })
    }
}
</script>
<style lang="scss" scoped>
    .child2{
        width: 700px;
        height: 60px;
        margin: 10px;
        border: 1px solid #333;
    }
</style>