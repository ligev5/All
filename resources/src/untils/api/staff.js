import {http,apis} from "../http"
// 封装员工列表接口
export const staff = (params) =>{
	return http({
		url:apis("/sys/user"),
		method:"get",
		params
	})
}