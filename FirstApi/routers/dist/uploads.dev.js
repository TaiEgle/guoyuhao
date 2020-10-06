"use strict";

var express = require("express");

var uploadsRouter = express.Router();

var fs = require("fs");

var multer = require('multer');

var path = require('path');

var app = express();
uploadsRouter.use(function (req, res, next) {
  var d = Date(Date.now()); // 转换日期字符串中的毫秒数

  a = d.toString();
  console.log('上传文件----路由启动--' + a);
  next();
});
var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    var dname = __dirname.split('routers')[0] + '/public/123';
    req.body.src = dname;
    cb(null, dname);
  },
  filename: function filename(req, file, cb) {
    var fileinfo = path.parse(file.originalname);
    var imgname = fileinfo.name + '-' + Date.now() + fileinfo.ext;
    req.body.url = imgname;
    cb(null, imgname);
  }
});
var upload = multer({
  storage: storage
});
uploadsRouter.post('/', upload.array('ava', 10), function (req, res) {
  var urlArr = [];

  for (var i = 0; i < req.files.length; i++) {
    // console.log(req.files[i].filename);
    urlArr.push('/public/123/' + req.files[i].filename);
  }

  var imgUrl = urlArr.join(','); // var aff = imgUrl.split(',');
  // console.log(aff);

  res.json({
    msg: 'OK',
    code: 2000,
    url: imgUrl ? imgUrl : '/public/123/' + req.files.filename
  });
});
module.exports = uploadsRouter;