import {apis,http} from "../http"

function getSettings() {
  return http({
    url:apis("/salarys/company-settings"),
    method: "get"
  })
}
// 202003报表

function getDepartment() {
  return http({
    url:apis("/company/department"),
    method: "get"
  })
}
// 部门

function getSalarys(data) {
  return http({
    url:apis("/salarys/list"),
    method: "post",
		data
  })
}
// 工资列表

export { getSettings, getDepartment, getSalarys }
