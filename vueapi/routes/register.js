const express = require('express');
const { adduser} = require('../model/coon');
const router = express.Router()
const {addReg} = require('../controller/usercontroll')

router.use((req,res,next)=>{
    console.log(`路由执行成功了！！！`,Date.now());
    next()
})
router.post('/',addReg)


module.exports = router