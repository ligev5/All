<template>
    <div class="social">
        <div class="social-box">
            <el-card class="social-one">
                <div class="abc">
                    <div class="one-box">本月:社保在缴 公积金在缴 增员 减员 入职 离职</div>
                    <div class="tow">历史归档</div>
                    <div class="three">202001月报表</div>
                </div>
                <div class="made">
                    <div class="con-zero">
                        <p>部门:</p>
                    </div>
                    <div class="con">
                        <div class="con-one" v-for="(item, index) in lists" :key="index">
                            <input type="checkbox">
                            <div class="names">{{ item.name }}</div>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="序号" type="index" width="60" />
            <el-table-column prop="username" sortable label="姓名" />
            <el-table-column prop="mobile" sortable label="手机" />
            <el-table-column prop="workNumber" sortable label="工号" />
            <el-table-column prop="departmentName" sortable label="部门" />
            <el-table-column prop="timeOfEntry" sortable label="入职时间" />
            <el-table-column prop="leaveTime" sortable label="离职时间" />
            <el-table-column prop="participatingInTheCity" label="社保城市" />
            <el-table-column prop="providentFundCity" label="公积金城市" />
            <el-table-column prop="socialSecurityBase" label="社保基数" />
            <el-table-column prop="providentFundBase" label="公益金基数" />
        </el-table>
        <div class="page">
            <el-pagination background layout="prev, pager, next" :page-size="10" :total="11" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, reactive, toRefs } from 'vue';
// 引入路由
const router = useRouter();
// 引入仓库
const store = useStore();
const data = reactive({
});
const tableData = [
    { "id": "1063705482939731968", "username": "cgx", "mobile": "13800000001", "workNumber": "", "departmentName": "", "timeOfEntry": "2018-11-01", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 10000, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 10000 },
    { "id": "1063705989926227968", "username": "666664587", "mobile": "13800000002", "workNumber": "9002", "departmentName": "总裁办", "timeOfEntry": "2018-11-02", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 10000, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 10000 },
    { "id": "1066370498633486336", "username": "孙财", "mobile": "13800000003", "workNumber": "111", "departmentName": "市场部", "timeOfEntry": "2018-11-04", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 3388, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 2277 },
    { "id": "1071632760222810112", "username": "罗晓晓", "mobile": "13800000004", "workNumber": "1111", "departmentName": "人事部", "timeOfEntry": "2018-12-02", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 5000, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 5000 },
    { "id": "1074238801330704384", "username": "文吉星", "mobile": "13400000001", "workNumber": "1001", "departmentName": "人事部", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": "1084825908823904256", "participatingInTheCity": "北京", "socialSecurityBase": 5900, "providentFundCityId": "1084825908823904256", "providentFundCity": "北京", "providentFundBase": 5900 },
    { "id": "1074238801402007552", "username": "巴思慧", "mobile": "13400000002", "workNumber": "1002", "departmentName": "人事部", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
    { "id": "1075383133106425856", "username": "乔海", "mobile": "13500000001", "workNumber": "2001", "departmentName": "总裁办", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
    { "id": "1075383135371350016", "username": "董昊空", "mobile": "13500000002", "workNumber": "2002", "departmentName": "总裁办", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
    { "id": "1075383135459430400", "username": "周乐天", "mobile": "13500000003", "workNumber": "2003", "departmentName": "财务部", "timeOfEntry": "2018-01-01", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null },
    { "id": "1235396724497268736", "username": "吕勇锐", "mobile": "13600000001", "workNumber": "0001", "departmentName": "总裁办", "timeOfEntry": "1992-08-04", "leaveTime": null, "participatingInTheCityId": null, "participatingInTheCity": null, "socialSecurityBase": null, "providentFundCityId": null, "providentFundCity": null, "providentFundBase": null }
];
const lists = [
    { name: "总裁办" },
    { name: "行政部" },
    { name: "人事部" },
    { name: "财务部" },
    { name: "技术部" },
    { name: "运营部" },
    { name: "市场部" },
    { name: "财务核算部" },
    { name: "税务管理部" },
    { name: "Java研发部" },
    { name: "Python研发部" },
    { name: "Phy研发部" },
    { name: "北京事业部" },
    { name: "上海事业部" },
    { name: "234t5" },
    { name: "1234" },
]
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.page {
    margin-top: 10px;
    float: right;
}

.social-box {
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
}

.social-one {
    height: 150px;
    line-height: 35px;
    width: 100%;

    .abc {
        display: flex;

        .one-box {
            height: 30px;
            font-size: 15px;
            text-align: center;
            width: 350px;
            background-color: #E6F7FF;
            border: 1px solid #9FDAFF;
        }

        .tow {
            margin-left: 680px;
            margin-right: 20px;
        }

    }


}

.made {
    display: flex;

    .con-zero {
        width: 140px;
        font-weight: 700;
    }
}

.con {
    display: flex;
    flex-flow: wrap;
}

.con-one {
    display: flex;
    flex-flow: wrap;
    align-items: center;

    input {
        margin-left: 30px;
    }

    .names {
        margin-left: 5px;
    }
}
</style>