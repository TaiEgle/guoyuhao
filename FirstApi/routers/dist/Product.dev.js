"use strict";

var express = require("express");

var ProductRouter = express.Router();

var ProductControll = require('../controll/ProductControll');

var _require = require('../token'),
    verifyToken = _require.verifyToken;

var path = require('path');

var bodyparser = require('body-parser');
/* 解析post请求 */


var urlencodedParser = bodyparser.urlencoded({
  extended: false
});
ProductRouter.use(function (req, res, next) {
  var d = Date(Date.now()); // 转换日期字符串中的毫秒数

  a = d.toString();
  console.log('路由启动--' + a);
  next();
});

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
} // GET查询接口


ProductRouter.get('/', ProductControll.show); // 根据Id查询一个

ProductRouter.get("/:id", ProductControll.showOne); // post请求

ProductRouter.post('/add', urlencodedParser, ProductControll.create); // post请求

ProductRouter.get('/add', function (req, res) {
  var imgpath = path.join(__dirname, 'index.html');
  res.sendfile(imgpath);
}); // delete请求

ProductRouter["delete"]("/del/:id", ProductControll.del); // patch请求

ProductRouter.patch("/change/:id", ProductControll.change); // 暴露接口

module.exports = ProductRouter;