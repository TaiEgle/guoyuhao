"use strict";

var mongoose = require('mongoose');

var db = require('./ConnectMongodb');

var S = db.model('swippers', {
  url: {
    type: Array,
    require: true
  },
  ishow: {
    type: Boolean,
    Default: true
  },
  create: {
    type: Date,
    "default": Date.now()
  }
}); //添加轮播图

var add = function add(postS) {
  var newS = new S(postS);
  return newS.save().then(function (res) {
    console.log('成功', res);
    return res;
  })["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; //查找轮播图


var show = function show(num, page) {
  return S.find().limit(num).skip(page)["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; // 删除


var del = function del(id) {
  return S.remove({
    _id: id
  }).then(function (res) {
    console.log('成功-----', res);
    return res;
  })["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; // 修改


var patch = function patch(id, update) {
  return S.updateOne({
    _id: id
  }, {
    $set: update
  }).then(function (res) {
    console.log('成功-----', res);
    return res;
  });
};

module.exports = {
  add: add,
  show: show,
  del: del,
  patch: patch
};