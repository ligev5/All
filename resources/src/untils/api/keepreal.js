import {apis,http} from "../http";
export function getStaffIn(data) {
 return http({
  url:apis(`/sys/user?page=${data.page}&size=${data.size}&total=${data.total}`),
  method: "get"
 })
}
export function userInfo(data) {
 return http({
  url:apis(`/sys/user/${data}`),
  method: "get"
 })
}
export function job(data) {
 return http({
  url: http.apis(`/employees/${data}/jobs`),
  method: "get"
 })
}

