let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
const menusData = require('./common/menus.json')
const usersData = require('./common/users.json')
const rolesData = require('./common/roles.json')
const rightsData = require('./common/rights.json')
const goodsData = require('./common/goods.json')
const ordersData = require('./common/orders.json')
const catesData = require('./common/cates.json')
// const loginsearch = require('./common/loginsearch,json')
let app = express() //实例化express

/**登录接口*/
app.use('/login', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...loginData
    })
  )
})
// 左侧权限数据
app.use('/menus', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...menusData
    })
  )
})
// 用户列表数据
app.use('/users', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...usersData
    })
  )
})
// 角色列表数据
app.use('/roles', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...rolesData
    })
  )
})
// 权限列表数据
app.use('/rights', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...rightsData
    })
  )
})
// 商品列表数据
app.use('/goods', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...goodsData
    })
  )
})
// 订单列表数据
app.use('/orders', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...ordersData
    })
  )
})
// 商品分类数据
app.use('/categories', function (req, res) {
  console.log(req, res)
  res.json(
    Mock.mock({
      // status: 200,
      // msg: '登录成功',
      ...catesData
    })
  )
})

app.listen('8090', () => {
  console.log('监听端口 8090')
})
