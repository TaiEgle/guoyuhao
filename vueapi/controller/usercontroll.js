const {adduser,AddLogin} = require('../model/coon');
const { model } = require('mongoose');

const addReg = async(req,res) =>{
    // let postuser=req.body;
    const username = req.body.username;
    const passward = req.body.passward;
    const salt = Date.now()
    const userdata = {
        username,
        passward,
        salt
    }
    let rs =await adduser(userdata);
    if(rs){
        res.send({
            meta:{
                status:200,
                msg:'用户注册成功'
            },
            data:rs
        })
    }else{
            res.send({
                data:{
                    status:400,
                    msg:'用户注册失败'
                }
            })

    }
}
const addLogin = async(req,res) =>{
    const loginuser = {
        username:req.body.username,
        passward:req.body.passward,
    }
    const rs = await AddLogin(loginuser)
    if(rs){
        res.send({
            meta:{
                status:200,
                msg:'用户登录成功'
            },
            data:rs
        })
    }else{
            res.send({
                data:{
                    status:400,
                    msg:'用户名或者密码不正确'
                }
            })

    }
}
module.exports = {addReg,addLogin}