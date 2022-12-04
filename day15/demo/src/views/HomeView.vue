<template>
  <div class="box">
      <el-button type="primary" @click="dialogVisible=true">新增todolist</el-button>
   <el-calendar>
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
    <ul>
      <li
      :class="item.resource == '已完成' ? 'gircolor' : 'red'"
      v-for="(item, index) in $store.state.list"
      :key="index"
      v-show="item.time==data.day"
      @click="edit(item,index)"
     >
     {{item.name}}
     </li>
    </ul>
  </template>
</el-calendar>
  <el-dialog
  title="新增事项"
  :visible.sync="dialogVisible"
  width="40%"
 >
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="事件名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="日期选择">
    <el-date-picker
      v-model="form.time"
      type="date"
      placeholder="选择日期">
      
    </el-date-picker>
     </el-form-item>
  <el-form-item label="事件状态">
    <el-radio-group v-model="form.resource">
      <el-radio label="已完成">已完成</el-radio>
      <el-radio label="未完成">未完成</el-radio>
    </el-radio-group>
  </el-form-item>
  
  <el-form-item>
   
    <el-button @click="dialogVisible=false">取消</el-button>
     <el-button type="primary" @click="onSubmit">确定</el-button>
  </el-form-item>
</el-form>
</el-dialog>



<!-- 编辑 -->
<el-dialog
  title="编辑"
  :visible.sync="dialogVisibles"
  width="40%"
 >
  <el-form ref="form" :model="form1" label-width="80px">
  <el-form-item label="事件名称">
    <el-input v-model="form1.name"></el-input>
  </el-form-item>
  <el-form-item label="日期选择">
    <el-date-picker
      v-model="form1.time"
      type="date"
      placeholder="选择日期">
      
    </el-date-picker>
     </el-form-item>
  <el-form-item label="事件状态">
    <el-radio-group v-model="form1.resource">
      <el-radio label="已完成">已完成</el-radio>
      <el-radio label="未完成">未完成</el-radio>
    </el-radio-group>
  </el-form-item>
  
  <el-form-item>
   
    <el-button @click="dialogVisible=false">取消</el-button>
     <el-button type="primary" @click="add">确定</el-button>
  </el-form-item>
</el-form>
</el-dialog>
 </div>
</template>

<script>
export default {
  data() {
    return {
      edid:-1,
      dialogVisible: false,
      dialogVisibles:false,
      form: {
        name: "",
        resource: "",
        time: ""
      },
      form1: {
        name: "",
        resource: "",
        time: ""
      }
    };
  },
  methods: {
    edit(item,index){
      this.dialogVisibles=true
      this.form1.name=item.name
      this.form1.resource=item.resource
      this.form1.time=item.time
      this.edid=index
    },
    add(){
       let str = this.form1.time
        .toLocaleString() //转换时间格式
        .split(" ")[0] 
        .split("/") //将原本的格式/替换成-
        .join("-");

      if (str.length < 10) {    //如果长度小于10就在前面补0
        let newtime = this.insertStr(str, 8, "0");
        this.form1.time = newtime;
      } else {
        this.form1.time = str;
      }
      console.log(this.form1);
      this.$store.commit('pgone',{...this.form1,index:this.edid})
      this.dialogVisibles=false
    },

    onSubmit() {
      let str = this.form.time
        .toLocaleString() //转换时间格式
        .split(" ")[0] 
        .split("/") //将原本的格式/替换成-
        .join("-");

      if (str.length < 10) {    //如果长度小于10就在前面补0
        let newtime = this.insertStr(str, 8, "0");
        this.form.time = newtime;
      } else {
        this.form.time = str;
      }
      console.log(this.form);
      this.$store.commit("add", this.form);
      this.dialogVisible = false;
    },
    insertStr(source, start, newStr) { //在指定的位置插入字符串
      return source.slice(0, start) + newStr + source.slice(start);
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
  background: #434341;
  width: 100% !important;
  overflow: hidden;
  height: 100vh !important;
}
.el-button {
  margin-top: 15px;
  margin-bottom: 10px;
  margin-left: 340px;
}
.el-calendar {
  width: 800px;
  height: 640px;
  margin: 0 auto;
}
  .is-selected {
    color: #1989FA;
  }
  .gircolor{
    color: #78a547;
  }
  .red{
    color: #8c1f2a;
  }
</style>

