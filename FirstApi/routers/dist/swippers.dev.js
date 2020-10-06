"use strict";

var express = require("express");

var SwippersRouter = express.Router();

var SwippersControll = require('../controll/SwippersControll');

var path = require('path');

var bodyparser = require('body-parser');
/* 解析post请求 */


var urlencodedParser = bodyparser.urlencoded({
  extended: false
});
SwippersRouter.use(function (req, res, next) {
  var d = Date(Date.now()); // 转换日期字符串中的毫秒数

  a = d.toString();
  console.log('轮播图路由启动--' + a);
  next();
});
SwippersRouter.get('/', SwippersControll.showImg);
SwippersRouter.post('/', SwippersControll.create);
SwippersRouter["delete"]("/del/:id", SwippersControll.delImg);
SwippersRouter.patch("/:id", SwippersControll.change);
module.exports = SwippersRouter;