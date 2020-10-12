"use strict";

var mongoose = require('mongoose');

var _require = require('../models/Usersdb'),
    adduser = _require.adduser,
    Login = _require.Login;

var _require2 = require('../token/index'),
    verifyToken = _require2.verifyToken,
    createToken = _require2.createToken,
    md5 = _require2.md5;

var create = function create(req, res) {
  var uname, salt, pwd, isAdmin, userdata, u, rs;
  return regeneratorRuntime.async(function create$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // let postuser=req.body;
          uname = req.body.uname;
          salt = Date.now();
          pwd = md5(req.body.pwd + salt);
          isAdmin = req.body.isAdmin; // console.log(isAdmin);

          userdata = {
            uname: uname,
            pwd: pwd,
            salt: salt,
            isAdmin: isAdmin
          }; // 注册查找重名

          _context.next = 7;
          return regeneratorRuntime.awrap(Login({
            uname: uname
          }));

        case 7:
          u = _context.sent;

          if (!u) {
            _context.next = 12;
            break;
          }

          res.send({
            meta: {
              status: 401,
              msg: '用户名已经存在啦~换个名字吧'
            },
            data: null
          });
          _context.next = 16;
          break;

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(adduser(userdata));

        case 14:
          rs = _context.sent;

          if (rs) {
            res.send({
              meta: {
                status: 200,
                msg: '用户注册成功'
              },
              data: {
                用户名: rs.uname,
                注册时间: rs.create
              }
            });
          } else {
            res.send({
              meta: {
                status: 400,
                msg: '用户注册失败'
              },
              data: null
            });
          }

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

var loginup = function loginup(req, res) {
  var uname, u, pwd, loginuser, rs, token;
  return regeneratorRuntime.async(function loginup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // 先查找用户信息
          uname = req.body.uname;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Login({
            uname: uname
          }));

        case 3:
          u = _context2.sent;

          if (!u) {
            _context2.next = 20;
            break;
          }

          pwd = md5(req.body.pwd + u.salt);
          loginuser = {
            uname: uname,
            pwd: pwd
          };
          _context2.next = 9;
          return regeneratorRuntime.awrap(Login(loginuser));

        case 9:
          rs = _context2.sent;

          if (!JSON.parse(JSON.stringify(rs))) {
            _context2.next = 17;
            break;
          }

          _context2.next = 13;
          return regeneratorRuntime.awrap(createToken(JSON.parse(JSON.stringify(rs))));

        case 13:
          token = _context2.sent;
          res.send({
            meta: {
              status: 200,
              msg: '用户登录成功'
            },
            data: {
              token: token,
              unmae: rs.uname
            }
          });
          _context2.next = 18;
          break;

        case 17:
          res.send({
            meta: {
              status: 400,
              msg: '密码不正确'
            },
            data: null
          });

        case 18:
          _context2.next = 21;
          break;

        case 20:
          res.send({
            meta: {
              status: 401,
              msg: '用户名不存在'
            },
            data: null
          });

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  create: create,
  loginup: loginup
};