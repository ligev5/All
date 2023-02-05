import {apis,http} from "../http"

function getapp(){
	return http({
		url:apis("")
	})
}
export {getapp}