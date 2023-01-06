import { http, apis } from '../http';

function login(data: { mobile: string; password: string }) {
	return http({
		url: apis('/login'),
		method: 'post',
		data: data,
	});
}
// 登录

export { login };
