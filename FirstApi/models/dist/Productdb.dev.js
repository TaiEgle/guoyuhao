"use strict";

var mongoose = require('mongoose');

var db = require('./ConnectMongodb');

var P = db.model('products', {
  commadity: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  place: {
    type: String,
    require: true
  },
  create: {
    type: String,
    Default: Date.now()
  },
  cover: {
    type: String
  }
}); //添加 信息

var addProduct = function addProduct(postProduct) {
  var newProduct = new P(postProduct);
  return newProduct.save().then(function (res) {
    console.log('成功', res);
    return res;
  })["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; //获取所有 信息


var getProduct = function getProduct(num, page) {
  return P.find().limit(num).skip(page).then(function (res) {
    console.log('成功', res);
    return res;
  })["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; //通过 _id修改 信息


var patchProduct = function patchProduct(id, update) {
  return P.updateOne({
    _id: id
  }, {
    $set: update
  }).then(function (res) {
    console.log('成功-----', res);
    return res;
  });
}; //通过 _id删除 信息


var deleteProduct = function deleteProduct(id) {
  return P.deleteMany({
    _id: id
  }).then(function (res) {
    console.log('成功-----', res);
    return res;
  })["catch"](function (err) {
    console.log('失败', err);
    return false;
  });
}; //通过 _id获取  信息


var getOneProduct = function getOneProduct(id) {
  return P.findOne({
    _id: id
  }).then(function (res) {
    // console.log('成功', res);
    return res;
  })["catch"](function (err) {
    // console.log('失败', err);
    return false;
  });
};

module.exports = {
  addProduct: addProduct,
  getProduct: getProduct,
  patchProduct: patchProduct,
  deleteProduct: deleteProduct,
  getOneProduct: getOneProduct,
  P: P
};