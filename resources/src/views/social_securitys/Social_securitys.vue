<template>
  <div>
    <div class="top">
      <div class="left">
        <button>本月: 社保在缴 公积金在缴 增员 减员 入职 离职</button>
      </div>
      <div class="right">
        <el-button type="danger">历史归档</el-button>
        <el-button type="primary">202002报表</el-button>
      </div>
    </div>
    <div class="center">
      <div class="topcenter">
        <ul>
          <span class="cen">部门</span>
          <li v-for="item in sociallist" :key="item.id">
            <input type="checkbox" />
            <div class="size">{{ item.name }}</div>
          </li>
        </ul>
      </div>
      <p>
        <span class="botsize">社保城市</span> <input type="checkbox" /> 北京
      </p>
      <p>
        <span class="botsize">公积金城市</span> <input type="checkbox" /> 北京
      </p>
    </div>

    <el-table
      :data="list"
      style="width: 100%"
      :default-sort="{ prop: 'date', order: 'descending' }"
    >
      <el-table-column prop="index" type="index" label="序号" align="center"> </el-table-column>
			<el-table-column prop="username" label="姓名" sortable> </el-table-column>
      <el-table-column prop="mobile" label="手机" sortable> </el-table-column>
      <el-table-column prop="workNumber" label="工号" sortable> </el-table-column>
			<el-table-column prop="departmentName" label="部门" sortable> </el-table-column>
			<el-table-column prop="timeOfEntry" label="入职时间" sortable> </el-table-column>
			<el-table-column prop="leaveTime" label="离职时间" sortable> </el-table-column>
			<el-table-column prop="participatingInTheCity" label="社保城市" > </el-table-column>
			<el-table-column prop="providentFundCity" label="公积金城市" > </el-table-column>
			<el-table-column prop="socialSecurityBase" label="社保基数" > </el-table-column>
			<el-table-column prop="providentFundBase" label="公积金基数" > </el-table-column>
			<el-table-column
      fixed="right"
      label="操作"
      >
      <template slot-scope="scope">
        <el-button  type="text" size="small">查看详情</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getlist, getsocial } from '../../untils/api/social'
export default {
  data() {
    return {
      checked: false,
      sociallist: [],
      list: []
    }
  },
  methods: {
    fn() {
      getlist().then((res) => {
        console.log(res)
        this.list = res.data.data.rows
      }),
        getsocial().then((res) => {
          console.log(res)
          this.sociallist = res.data.data.depts
        })
    }
  },
  created() {
    this.fn()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.top {
  height: 80px;
  line-height: 80px;
  margin-top: 10px;
  background: #fff;
  display: flex;
  border-radius: 5px;
  justify-content: space-between;
  .left {
    button {
      margin-left: 15px;
      height: 35px;
      font-size: 16px;
      background: #e6f7ff;
      width: 370px;
      border: 1px solid #99d8ff;
      line-height: 35px;
    }
  }
  .right {
    margin-right: 15px;
  }
}
.center {
  height: 270px;
  background: #fff;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
  .topcenter {
    margin-top: 25px;

    display: flex;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin: 5px 10px;
        display: flex;
        .size {
          margin-left: 5px;
        }
      }
    }
  }
  .cen {
    margin-left: 50px;
    font-weight: 800;
    margin-right: 10px;
  }
}
p {
  margin-top: 30px;
  margin-left: 30px;
  .botsize {
    font-weight: 800;
  }
}
</style>
