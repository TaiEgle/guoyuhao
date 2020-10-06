"use strict";

var _require = require('../models/Swippersdb'),
    add = _require.add,
    show = _require.show,
    del = _require.del,
    patch = _require.patch;

var showImg = function showImg(req, res) {
  var num, page, data;
  return regeneratorRuntime.async(function showImg$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          num = req.query.num;
          page = (req.query.page - 1) * num;
          _context.next = 4;
          return regeneratorRuntime.awrap(show(num * 1, page));

        case 4:
          data = _context.sent;

          if (data) {
            res.send({
              meta: {
                status: 200,
                msg: '获取商品成功'
              },
              data: data
            });
          } else {
            res.send({
              data: {
                status: 400,
                msg: '获取数据失败'
              }
            });
          }

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var create = function create(req, res) {
  var postProduct, rs;
  return regeneratorRuntime.async(function create$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          postProduct = req.body;
          _context2.next = 3;
          return regeneratorRuntime.awrap(add(postProduct));

        case 3:
          rs = _context2.sent;

          if (rs) {
            res.send({
              meta: {
                status: 200,
                msg: '添加成功'
              },
              data: rs
            });
          } else {
            res.send({
              meta: {
                status: 400,
                msg: '添加失败'
              }
            });
          }

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // 删除


var delImg = function delImg(req, res) {
  var id, rs;
  return regeneratorRuntime.async(function delImg$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.next = 3;
          return regeneratorRuntime.awrap(del(id));

        case 3:
          rs = _context3.sent;

          if (rs) {
            res.send({
              meta: {
                status: 200,
                msg: '删除成功'
              },
              data: rs
            });
          } else {
            res.send({
              meta: {
                status: 400,
                msg: '删除失败'
              },
              data: null
            });
          }

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}; // 修改


var change = function change(req, res) {
  var id, update, rs;
  return regeneratorRuntime.async(function change$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          update = req.body; // console.log(id);
          // console.log(update);

          _context4.next = 4;
          return regeneratorRuntime.awrap(patch(id, update));

        case 4:
          rs = _context4.sent;

          if (rs.nModified > 0) {
            res.send({
              meta: {
                status: 200,
                msg: '修改成功'
              },
              data: rs
            });
          } else {
            res.send({
              meta: {
                status: 400,
                msg: '修改失败'
              },
              data: null
            });
          }

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  showImg: showImg,
  create: create,
  delImg: delImg,
  change: change
};