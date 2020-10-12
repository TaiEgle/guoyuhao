const mongoose = require('mongoose');
const { adduser, Login } = require('../models/Usersdb')
const { verifyToken, createToken, md5 } = require('../token/index')

const create = async(req, res) => {
    // let postuser=req.body;
    const uname = req.body.uname;

    const salt = Date.now();
    const pwd = md5(req.body.pwd + salt);
    const isAdmin = req.body.isAdmin;
    // console.log(isAdmin);


    const userdata = {
            uname,
            pwd,
            salt,
            isAdmin
        }
        // 注册查找重名
    const u = await Login({ uname })
    if (u) {
        res.send({
            meta: {
                status: 401,
                msg: '用户名已经存在啦~换个名字吧'
            },
            data: null
        })
    } else {
        let rs = await adduser(userdata);
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
            })
        } else {
            res.send({
                meta: {
                    status: 400,
                    msg: '用户注册失败'
                },
                data: null
            })

        }
    }
}
const loginup = async(req, res) => {
    // 先查找用户信息
    const uname = req.body.uname;
    const u = await Login({ uname })
    if (u) {

        const pwd = md5(req.body.pwd + u.salt);
        const loginuser = {
            uname,
            pwd
        };
        const rs = await Login(loginuser)
            // console.log(JSON.parse(JSON.stringify(rs)));
            // const data = JSON.parse(JSON.stringify(rs))
        if (JSON.parse(JSON.stringify(rs))) {
            const token = await createToken(JSON.parse(JSON.stringify(rs)));
            res.send({
                meta: {
                    status: 200,
                    msg: '用户登录成功'
                },
                data: {
                    token: token,
                    unmae: rs.uname
                }
            })
        } else {
            res.send({
                meta: {
                    status: 400,
                    msg: '密码不正确'
                },
                data: null
            })

        }
    } else {
        res.send({
            meta: {
                status: 401,
                msg: '用户名不存在'
            },
            data: null
        })
    }
}
module.exports = { create, loginup }