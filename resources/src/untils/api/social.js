import {apis,http} from "../http"
function getlist(){
	return http({
		url:apis("/social_securitys/list"),
		method:"post"
	})
}

function getsocial(){
	return http({
		url:apis("/company/department"),
		method:"get"
	})
}
export {getlist,getsocial}