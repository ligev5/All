let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
let app = express() //实列化 express
const menus = require('./common/menus.json')
const users =require('./common/users.json')
const status = require('./common/status.json')
const roles = require('./common/roles.json')
const list = require('./common/list.json')
const goods = require('./common/goods.json')
/**登录接口 */
app.use('/login', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})
app.use('/menus', function (req, res) {
  console.log(req, 'res')
  res.json(
    Mock.mock({
      ...menus
    })
  )
})
app.use('/users',function(req,res){
	console.log(req,'res');
	res.json(
		Mock.mock({
			...users
		})
	)
})
app.use('/status',function(req,res){
	console.log(req,'res');
	res.json(
		Mock.mock({
			...status
		})
	)
})
app.use('/roles',function(req,res){
	console.log(req,'res');
	res.json(
		Mock.mock({
			...roles
		})
	)
})
/**权限列表接口 */
app.use('/list', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...list
    })
  )
})
/**商品列表接口 */
app.use('/goods', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...goods
    })
  )
})
/**登录日志 */
// app.use('/home/loginsearch',function(req,res){
// 	res.json(
// 		Mock.mock({
// 			status:200,
// 			msg:'登陆成功',
// 			loginsearch
// 		})
// 	)
// })

app.listen('8090', () => {
  //启动服务node
  console.log('监听端口 8090')
})
