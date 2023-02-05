<template>
  <div>
    <div class="header">
      <div class="left">
        <button>共{{ hero.total }}条记录</button>
      </div>
      <div class="right">
        <el-button type="danger">简单表头导出</el-button>
        <el-button type="info">复杂表头导出</el-button>
        <el-button type="success">excel导入</el-button>
        <el-button type="primary">新增员工</el-button>
      </div>
    </div>

    <div class="box">
      <el-table
        :data="list"
        style="width: 100%"
        :default-sort="{ prop: 'date', order: 'descending' }"
      >
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable width="100">
        </el-table-column>
        <el-table-column prop="password" label="头像" width="120">
          <template slot-scope="scope">
            <img class="img"

              :src="scope.row.staffPhoto"
              alt=""
            />
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable width="120">
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="100">
        </el-table-column>
        <el-table-column
          prop="formOfEmployment"
          label="聘用形式"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="departmentName"
          label="部门"
          sortable
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="correctionTime"
          label="入职时间"
          sortable
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="correctionTime"
          label="账户状态"
          sortable
          width="120"
        >
          <template slot-scope="scope">
            <el-switch
              v-model="enableState"
              active-color="#409eff"
              inactive-color="#dcdfe6"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="
                $router.push({ name: 'emdetali', params: { id: scope.row.id } })
              ">查看</el-button>
            <el-button type="text" size="small">转正</el-button>
            <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button>
            <el-button type="text" size="small">角色</el-button>
            <el-button type="text" size="small" disabled>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="hero.total"
      :pagesize="hero.pagesize"
      :pagenum="hero.pagenum"
    >
    </el-pagination>
  </div>
</template>

<script>
import { STATUS } from '../../untils/Status'
import { staff } from '../../untils/api/staff'
export default {
  data() {
    return {
      list: [],
      hero: {
        total: 0,
        pagesize: 5,
        pagenum: 1
      },
      enableState: true
    }
  },
  methods: {

    handleSizeChange(val) {
      console.log(val)
      this.pagesize = val
      this.getlist()
    },
    handleCurrentChange(val) {
      console.log(val)
      ;(this.pagenum = val), this.getlist()
    },
    getlist() {
      staff(this.hero).then((res) => {
        console.log(res)
        if (res.status == STATUS.SUCCESS) {
          this.list = res.data.data.rows
          this.hero.total = res.data.data.total
        }
      })
    }
  },
  created() {},
  mounted() {
    this.getlist()
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 95%;
  background: #fff;
  margin: 0 auto;
  height: 80px;
  line-height: 80px;
  .left {
    button {
      width: 120px;
      margin-left: 20px;
      background: #e6f7ff;
      border: 1px solid #a7deff;
      height: 35px;
      border-radius: 3px;
    }
  }
  .right {
    margin-right: 20px;
  }
}
.box {
  width: 95%;
  background: #fff;
  margin: 0 auto;
}
.img{
	width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
}
</style>
