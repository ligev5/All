import Cookies from 'js-cookie'
const Tokenkey = 'Authorization'
// 获取token方法
export function getToken() {
  return Cookies.get(Tokenkey)
}
// 设置token方法
export function setToken(token) {
  return Cookies.set(Tokenkey, token)
}
// 删除cookies里的token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
