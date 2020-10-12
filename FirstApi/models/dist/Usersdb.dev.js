"use strict";

var mongoose = require('mongoose');

var db = require('./ConnectMongodb');

var Users = db.model('users', {
  uname: {
    type: String,
    require: true
  },
  pwd: {
    type: String,
    require: true
  },
  create: {
    type: Date,
    "default": Date.now()
  },
  isAdmin: {
    type: Boolean,
    "default": false
  },
  salt: {
    type: String
  },
  cartList: {
    type: Array
  }
}); //添加用户注册信息

var adduser = function adduser(postuser) {
  var newuser = new Users(postuser);
  return newuser.save().then(function (res) {
    // console.log('成功', res);
    return res;
  })["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; //用户登录


var Login = function Login(postuser) {
  return Users.findOne(postuser)["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; // 用户删除购物车


var patchShopCart = function patchShopCart(id, update) {
  return Users.update(id, {
    $pull: {
      "cartList": {
        "productId": update
      }
    }
  }).then(function (res) {
    console.log('成功-----', res);
    return res;
  });
}; // 用户修改购物车


var editShopCart = function editShopCart(id, update) {
  return Users.update(id, update).then(function (res) {
    console.log('成功-----', res);
    return res;
  });
};

module.exports = {
  adduser: adduser,
  Login: Login,
  patchShopCart: patchShopCart,
  editShopCart: editShopCart
};