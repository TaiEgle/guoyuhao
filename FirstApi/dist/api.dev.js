"use strict";

var path = require('path'); // 内置 处理路径的模块


var express = require('express'); //  web框架


var cors = require('cors'); // 跨域处理


var bodyParser = require('body-parser'); // 解析post请求


var app = express(); // 解析前台传过来的json格式

app.use(express.json()); // 解决跨域

app.use('/public', express["static"](path.join(__dirname, 'public')));
app.use(cors()); // 定义默认路由

app.get('/', function (req, res) {
  res.send('vue接口ok');
});

var ProductRouter = require('./routers/Product');

var UsersRouter = require('./routers/Users');

var uploadRouter = require('./routers/upload');

var uploadsRouter = require('./routers/uploads');

var SwippersRouter = require('./routers/swippers');

var ShopCartRouter = require('./routers/shopCart'); //  使用路由 /index 是路由指向名称


app.use("/P1", ProductRouter);
app.use("/", UsersRouter);
app.use("/upload", uploadRouter);
app.use("/uplodeSwippers", uploadsRouter);
app.use("/Swippers", SwippersRouter);
app.use("/", ShopCartRouter);
app.get('/user/info', function (req, res) {
  res.json({
    meta: {
      status: 200,
      msg: '登陆成功'
    },
    data: {
      name: '郭宇豪',
      avatar: '/public/img/sha.png'
    }
  });
});
app.post('/logout', function (req, res) {
  res.json({
    meta: {
      status: 200,
      message: '退出成功'
    },
    data: {}
  });
});
var Server = app.listen(5566, function () {
  console.log('服务器运行在 5566');
});