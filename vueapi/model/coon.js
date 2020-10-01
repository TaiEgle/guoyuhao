const mongoose = require('mongoose');
const { query } = require('express');
const conn = mongoose.createConnection('mongodb://localhost:27017/book');

conn.on('error',()=>{
    console.log('连接出错');
})
conn.on('open',()=>{
    console.log('数据库打开');
})
conn.on('connected',()=>{
    console.log('连接成功');
})

const Book = conn.model('books',
    {
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    press:{
        type:String,
        require:true
    }
  }
  );
  const UserReg = conn.model('user',
{
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    create:{
        type:Date,
        default:Date.now()
    },
    salt:{
        type:String
    }
})
//用户登录模型
const Userlogin = conn.model('login',
{
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
//添加书籍信息
  const addbook =(postbook)=>{
    const newbook = new Book(postbook);
    return newbook.save()
    .then((res) => {
    console.log('成功',res);
    return res;
}).catch((err) => {
    console.log('失败',err);
    return false;
        
    });
  }
  //添加用户注册信息
  const adduser =(postuser)=>{
    const newuser= new UserReg(postuser);
    return newuser.save()
    .then((res) => {
    console.log('成功',res);
    return res;
}).catch((err) => {
    console.log('失败',err);
    return false;
        
    });
  }
  //添加用户登录信息
  const AddLogin =(postuser)=>{
    const newuser= new Userlogin(postuser);
    return newuser.save()
    .then((res) => {
    console.log('成功',res);
    return res;
}).catch((err) => {
    console.log('失败',err);
    return false;
        
    });
  }
  //获取所有书籍信息
  const getbook =()=>{
    return Book.find()
    .then((res) => {
    console.log('成功',res);
    return res;
}).catch((err) => {
    console.log('失败',err);
    return false
        
    });
  }
  //通过书籍_id修改书籍信息
  const patchbook =(id,update)=>{
    return Book.update({_id:id},{$set:update})
    .then((res) => {
    console.log('成功-----',res);

    return res;
}).catch((err) => {
    console.log('失败',err);
    return false
        
    });
  }
  //通过书籍_id删除书籍信息
  const deletebook =(id)=>{
    return Book.remove({_id:id})
    .then((res) => {
    console.log('成功-----',res);

    return res;
}).catch((err) => {
    console.log('失败',err);
    return false
        
    });
  }
  //通过书籍_id获取单本书籍信息
  const getOnebook =(id)=>{
    return Book.findOne({_id:id})
    .then((res) => {
    console.log('成功-----',res);

    return res;
}).catch((err) => {
    console.log('失败',err);
    return false
        
    });
  }


  module.exports = {
    addbook,
    getbook,
    patchbook,
    deletebook,
    getOnebook,
    adduser,
    AddLogin
  }