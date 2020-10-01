const express = require('express')
const router = express.Router()

const{getB,postB,patchB, deleteB,getOneB} =require('../controller/controllBook')

router.use((req,res,next) =>{
    console.log(`路由执行成功啦！！！`,Date.now());
    next()
})

//get方式访问 /book/
router.get('/', getB)
//post方式访问 /book/

router.post('/',postB)
//get方式访问单本书 /book/4

router.get('/:id',getOneB)
//patch 方式访问 /book/

router.patch('/:id',patchB)
//delete方式访问 /book/

router.delete('/:id',deleteB)

module.exports = router