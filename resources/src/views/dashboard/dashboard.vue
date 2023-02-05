<template>
  <div>
    <!-- 头部内容 -->
    <div class="dashboard-top">
      <img src="../../assets/头像1.png" alt="" />
      <div>
        <p style="font-size: 25px">早安,管理员，祝你开心每一天!</p>
        <p style="font-size: 20px; color: #948c8d; margin-top: 10px">
          管理员 | 传智播客-总裁办
        </p>
      </div>
    </div>
    <div style="display: flex">
      <div>
        <!-- 工作日历 -->
        <div class="dashboard-calendar" >
          <p class="dashboard-calendar-title">工作日历</p>
          <el-calendar v-model="value"> </el-calendar>
        </div>
        <!-- 公告 -->
        <div class="dashboard-Notice">
          <p class="dashboard-Notice-title">公告</p>
          <div class="dashboard-Notice-text">
            <img
              src="../../assets/苹果.png"
              alt=""
              style="width: 60px; height: 60px; margin: 10px 0 0 5px"
            />
            <div style="margin-left: 20px">
              <p>
                <span style="color: #a8b3f8">朱继柳</span>发布了
                第1期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p style="margin-top: 5px">2018-07-21 15:21:38</p>
            </div>
          </div>
          <div class="dashboard-Notice-text">
            <img
              src="../../assets/苹果.png"
              alt=""
              style="width: 60px; height: 60px; margin: 10px 0 0 5px"
            />
            <div style="margin-left: 20px">
              <p>
                <span style="color: #a8b3f8">朱继柳</span>发布了
                第2期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p style="margin-top: 5px">2018-07-21 15:21:38</p>
            </div>
          </div>
          <div class="dashboard-Notice-text">
            <img
              src="../../assets/苹果.png"
              alt=""
              style="width: 60px; height: 60px; margin: 10px 0 0 5px"
            />
            <div style="margin-left: 20px">
              <p>
                <span style="color: #a8b3f8">朱继柳</span>发布了
                第3期“传智大讲堂”互动讨论获奖名单公布
              </p>
              <p style="margin-top: 5px">2018-07-21 15:21:38</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <!-- 流程申请 -->
        <div class="dashboard-apply">
          <p class="dashboard-apply-title">流程申请</p>
          <div class="dashboard-apply-text">
            <el-button plain style="width: 150px; height: 45px"
              >加班离职</el-button
            >
            <el-button plain style="width: 150px; height: 45px"
              >请假调休</el-button
            >
            <el-button plain style="width: 150px; height: 45px"
              >审批列表</el-button
            >
            <el-button
              plain
              style="width: 150px; height: 45px; margin: 15px 0 0 0"
              >我的信息</el-button
            >
          </div>
        </div>
        <!-- 便捷导航 -->
        <div class="dashboard-navigation">
          <p class="dashboard-navigation-title">快速开始/便捷导航</p>
          <div class="dashboard-navigation-text">
            <el-button plain style="width: 150px; height: 45px"
              >人事月报</el-button
            >
            <el-button plain style="width: 150px; height: 45px"
              >考勤查询</el-button
            >
            <el-button plain style="width: 150px; height: 45px"
              >考勤统计</el-button
            >
            <el-button
              plain
              style="width: 150px; height: 45px; margin: 15px 0 0 0"
              >员工审核</el-button
            >
            <el-button
              plain
              style="width: 150px; height: 45px; margin: 15px 0 0 12px"
              >组织架构</el-button
            >
          </div>
        </div>
        <!-- 链接 -->
        <div class="dashboard-link">
          <p class="dashboard-link-title">帮助链接</p>
          <div class="dashboard-link-text">
            <div>
              <img
                src="../../assets/入门指南.png"
                alt=""
                style="width: 70px; height: 70px"
              />
              <p style="font-size: 14px; margin-left: 10px">入门指南</p>
            </div>
            <div>
              <img
                src="../../assets/帮助手册.png"
                alt=""
                style="width: 70px; height: 70px"
              />
              <p style="font-size: 14px">在线帮助手册</p>
            </div>
            <div>
              <img
                src="../../assets/联系电话.png"
                alt=""
                style="width: 70px; height: 70px"
              />
              <p style="font-size: 14px">联系电话支持</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**引入状态码 */
import { STATUS } from '../../untils/Status'
/**引入封装的登录接口 */
import { profilePost } from '../../untils/api/index'
export default {
  data() {
    return {
      /**昵称 */
      username: '',
			/**日历绑定 */
			value: new Date()
    }
  },
  methods: {},
  created() {},
  mounted() {
    /**获取昵称信息 */
    // profilePost().then((res) => {
    //   // console.log(res)
    //   if (res.status == STATUS.SUCCESS) {
    //     this.username = res.data.data.username
    //   }
    // })
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang='scss' scoped>
/**头部内容 */
.dashboard-top {
  width: 91.25rem;
  background: #fff;
  height: 10rem;
  display: flex;
  align-items: center;
}
// <!-- 工作日历 -->
.dashboard-calendar {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 1.25rem 0 0 10px;
  width: 46.875rem;
  // height: 26.875rem;
  .dashboard-calendar-title {
    // width: 215px;
    height: 2.8125rem;
    font-size: 1.5625rem;
    border-bottom: 2px solid #ebeef5;
    margin: 1.25rem 0 0 1.875rem;
  }
}
/**公告 */
.dashboard-Notice {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 750px;
  height: 450px;
  .dashboard-Notice-title {
    height: 45px;
    font-size: 16px;
    border-bottom: 2px solid #ebeef5;
    margin: 20px 0 0 30px;
  }
  .dashboard-Notice-text {
    width: 600px;
    height: 130px;
    border-bottom: 2px solid #ebeef5;
    margin: -15px 0 0 70px;
    display: flex;
    align-items: center;
  }
}
/**流程申请 */
.dashboard-apply {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 685px;
  height: 230px;
  .dashboard-apply-title {
    width: 100px;
    height: 40px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    margin: 20px 0 0 30px;
  }
  .dashboard-apply-text {
    margin: 15px 0px 0px 31px;
  }
}
/**便捷导航 */
.dashboard-navigation {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 685px;
  height: 230px;
  .dashboard-navigation-title {
    width: 215px;
    height: 40px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    margin: 20px 0 0 30px;
  }
  .dashboard-navigation-text {
    margin: 15px 0px 0px 31px;
  }
}
/**链接 */
.dashboard-link {
  border: 1px solid #ebeef5;
  background-color: #fff;
  border-radius: 5px;
  margin: 20px 0 0 10px;
  width: 685px;
  height: 200px;
  .dashboard-link-title {
    width: 100px;
    height: 40px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    margin: 20px 0 0 30px;
  }
  .dashboard-link-text {
    width: 420px;
    height: 80px;
    display: flex;
    margin: 20px 0 0 55px;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
