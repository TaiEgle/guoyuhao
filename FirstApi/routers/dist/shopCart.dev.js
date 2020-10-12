"use strict";

var express = require("express");

var ShopCartRouter = express.Router();

var _require = require('../token'),
    verifyToken = _require.verifyToken;

var _require2 = require('../controll/ShopCartControll'),
    AddCart = _require2.AddCart,
    delCart = _require2.delCart,
    getCart = _require2.getCart,
    editCart = _require2.editCart;

ShopCartRouter.use(function (req, res, next) {
  var d = Date(Date.now()); // 转换日期字符串中的毫秒数

  a = d.toString();
  console.log('--购物车--路由启动--' + a);
  next();
}); // 中间件解token

function vtoken(req, res, next) {
  // 从 Authorization 切割出token 值
  var token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : ''; // 判断如果token不存在 返回状态码 401

  if (!token) {
    res.sendStatus(401);
  } else {
    // 如果存在继续判断验证token能否转译是真是假
    var istrue = verifyToken(token);
    console.log(istrue); // 如果转译不出来token假值返回状态码403

    if (!istrue) {
      res.json({
        code: 403,
        msg: '登陆过期'
      }); // res.sendStatus(403)
    } else {
      // 如果token值为真,继续判断是否过期
      var now = new Date().getTime(); // 如果token过期返回状态码403

      if (now > istrue.exp * 1000) {
        res.sendStatus(403);
      } else {
        req.userdata = istrue;
        next();
      }
    }
  }
} //购物车 post请求 添加购物车


ShopCartRouter.post('/addCart', vtoken, AddCart); //购物车 post请求 删除购物车商品

ShopCartRouter.post('/delCart', vtoken, delCart); //购物车 get请求 查询购物车

ShopCartRouter.get('/getCart', vtoken, getCart); //购物车 post请求 修改购物车

ShopCartRouter.post('/editCart', vtoken, editCart);
module.exports = ShopCartRouter;