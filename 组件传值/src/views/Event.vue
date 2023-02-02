<template>
    <div>
        <child1></child1>
        <child2></child2>
    </div>
</template>

<script>
import child1 from '../components/child1.vue'
import child2 from '../components/child2.vue'
export default {
    components:{
        child1,
        child2
    },
    data(){
        return {
            value:'',
        }
    },
}
</script>