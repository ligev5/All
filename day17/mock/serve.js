let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
let app = express() //实列化 express

/**登录接口 */
app.use('/login', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...loginData
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
