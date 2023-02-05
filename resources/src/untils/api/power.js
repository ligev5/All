import { apis,http } from "../http";
function getpower(){
	return http({
		url:apis("/sys/permission"),
		method:"get",

	})
}

function getpush(data){
	return http({
		url:apis("/sys/permission"),
		method:"post",
		data
	})
}

function getremove(id){
	return http({
		url:apis(`/sys/permission/${id}`),
		method:"delete"
	})
}

export {getpower,getpush,getremove}