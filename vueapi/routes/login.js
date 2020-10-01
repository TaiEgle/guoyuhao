const express = require('express');
const { AddLogin} = require('../model/coon');
const router = express.Router()
const {addLogin} = require('../controller/usercontroll')

router.use((req,res,next)=>{
    console.log(`路由执行成功了！！！`,Date.now());
    next()
})
router.post('/',addLogin)


module.exports = router