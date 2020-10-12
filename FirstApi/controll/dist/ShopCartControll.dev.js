"use strict";

var mongoose = require('mongoose');

var _require = require('../models/Usersdb'),
    adduser = _require.adduser,
    Login = _require.Login,
    patchShopCart = _require.patchShopCart,
    editShopCart = _require.editShopCart;

var _require2 = require('../models/Productdb'),
    getOneProduct = _require2.getOneProduct;

var _require3 = require('../token/index'),
    verifyToken = _require3.verifyToken,
    createToken = _require3.createToken,
    md5 = _require3.md5; // 添加购物车方法


var AddCart = function AddCart(req, res) {
  var productId, token, istrue, params, rs, inCart, productDoc;
  return regeneratorRuntime.async(function AddCart$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // res.end("购物车")
          productId = req.body.productId;
          token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
          istrue = verifyToken(token);
          params = {
            _id: istrue._id
          }; // 查用户名存在吗

          _context.next = 6;
          return regeneratorRuntime.awrap(Login(params));

        case 6:
          rs = _context.sent;

          if (rs) {
            _context.next = 11;
            break;
          }

          res.json({
            meta: {
              status: 400,
              msg: "用户不存在"
            },
            data: null
          });
          _context.next = 21;
          break;

        case 11:
          if (!rs) {
            _context.next = 21;
            break;
          }

          inCart = false;
          console.log('用户存在--开始遍历购物车');
          rs.cartList.forEach(function (val) {
            // console.log(item);
            // 如果商品存在于购物车给商品数量加一
            if (val.productId == productId) {
              inCart = true;
              val.productNum++;
              adduser(rs);
              res.json({
                meta: {
                  status: 200,
                  msg: "购物车加一"
                },
                data: null
              });
            }
          }); // 如果商品不存在于购物车

          if (inCart) {
            _context.next = 21;
            break;
          }

          _context.next = 18;
          return regeneratorRuntime.awrap(getOneProduct(productId));

        case 18:
          productDoc = _context.sent;
          console.log('商品不存在购物车'); // 如果商品不存在

          if (!productDoc) {
            res.json({
              meta: {
                status: 400,
                msg: "商品不存在"
              },
              data: null
            });
          } // 商品存在推入用户名下的购物车数组
          else {
              console.log('添加购物车成功');
              newP = {
                productId: productDoc._id,
                commadity: productDoc.commadity,
                price: productDoc.price,
                place: productDoc.place,
                cover: productDoc.cover,
                productNum: 1,
                checked: true
              };
              rs.cartList.push(newP);
              adduser(rs);
              res.json({
                meta: {
                  status: 200,
                  msg: "加入购物车成功"
                },
                data: null
              });
            }

        case 21:
        case "end":
          return _context.stop();
      }
    }
  });
}; // 删除购物车方法


var delCart = function delCart(req, res) {
  var productId, token, istrue, params, patchDoc;
  return regeneratorRuntime.async(function delCart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // res.end('删除');
          productId = req.body.productId;
          token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
          istrue = verifyToken(token);
          params = {
            _id: istrue._id
          }; // 调用用户表更新方法

          _context2.next = 6;
          return regeneratorRuntime.awrap(patchShopCart(params, productId));

        case 6:
          patchDoc = _context2.sent;

          if (patchDoc) {
            res.json({
              meta: {
                status: 200,
                msg: "删除成功"
              },
              data: patchDoc
            });
          }

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // 查询购物车


var getCart = function getCart(req, res) {
  var token, istrue, params, userDoc;
  return regeneratorRuntime.async(function getCart$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
          istrue = verifyToken(token);
          params = {
            _id: istrue._id
          };
          _context3.next = 5;
          return regeneratorRuntime.awrap(Login(params));

        case 5:
          userDoc = _context3.sent;

          if (userDoc) {
            res.json({
              meta: {
                status: 200,
                msg: "成功"
              },
              data: userDoc.cartList
            });
          }

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // 修改购物车


var editCart = function editCart(req, res) {
  var checked, productNum, productId, token, istrue, params, update, editDoc;
  return regeneratorRuntime.async(function editCart$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          checked = req.body.checked;
          productNum = req.body.productNum;
          productId = req.body.productId;
          token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
          istrue = verifyToken(token);
          params = {
            _id: istrue._id,
            'cartList.productId': productId
          };
          update = {
            $set: {
              "cartList.$.productChecked": checked,
              "cartList.$.productNum": productNum
            }
          }; // res.end('修改购物车');

          _context4.next = 9;
          return regeneratorRuntime.awrap(editShopCart(params, update));

        case 9:
          editDoc = _context4.sent;

          if (editDoc) {
            res.json({
              msg: "成功"
            });
          } else {
            res.json("shibai");
          }

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  AddCart: AddCart,
  delCart: delCart,
  getCart: getCart,
  editCart: editCart
};