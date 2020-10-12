"use strict";

var express = require("express");

var ShopCartRouter = express.Router();

var _require = require('../controll/ShopCartControll'),
    ShopCart = _require.ShopCart;

ShopCartRouter.use(function (req, res, next) {
  var d = Date(Date.now()); // 转换日期字符串中的毫秒数

  a = d.toString();
  console.log('--购物车--路由启动--' + a);
  next();
}); //购物车 post请求

ShopCartRouter.post('/addCart', ShopCart); // GET请求
// ShopCartRouter.get('/login', loginup);

module.exports = ShopCartRouter;