import { http, apis } from "../http";
/**封装昵称接口 */
export const profilePost = () => {
	return http({
		url: apis("/sys/profile"),
		method: "post",
	});
};

// /**封装基本信息接口 */
// export const profileGet = () => {
// 	return http({
// 		url: apis("/sys/user/1063705989926227968?id=1063705989926227968"),
// 		method: "get",
// 	});
// };