const express = require(`express`);
const UsersRouter = express.Router();

const { create, loginup } = require('../controll/usersControll');

UsersRouter.use((req, res, next) => {
    var d = Date(Date.now());
    // 转换日期字符串中的毫秒数
    a = d.toString();
    console.log('--用户--路由启动--' + a);
    next()
})

//用户注册 post请求
UsersRouter.post('/register', create);
// 用户登录GET请求
UsersRouter.post('/login', loginup);

module.exports = UsersRouter