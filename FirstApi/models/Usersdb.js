const mongoose = require('mongoose');
const db = require('./ConnectMongodb')


const Users = db.model('users', {
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
        default: Date.now()
    },
    salt: {
        type: String
    }
})

//添加用户注册信息
const adduser = (postuser) => {
    const newuser = new Users(postuser);
    return newuser.save()
        .then((res) => {
            console.log('成功', res);
            return res;
        }).catch((err) => {
            console.log('失败', err);
            return false;

        });
}

//用户登录
const Login = (postuser) => {
    return Users.findOne(postuser)
        .catch((err) => {
            console.log('失败', err);
            return false;

        });
}

module.exports = {
    adduser,
    Login
}