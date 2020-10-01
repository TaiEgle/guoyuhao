const express = require(`express`);
const uploadRouter = express.Router();
const fs = require("fs");
const multer = require('multer');
const path = require('path');


const app = express();







uploadRouter.use((req, res, next) => {
    var d = Date(Date.now());
    // 转换日期字符串中的毫秒数
    a = d.toString();
    console.log('上传文件----路由启动--' + a);
    next()
})


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dname = __dirname.split('routers')[0] + '/public/img';
        req.body.src = dname;
        cb(null, dname)
    },
    filename: function(req, file, cb) {
        const fileinfo = path.parse(file.originalname)
        console.log(fileinfo);
        const imgname = fileinfo.name + '-' + Date.now() + fileinfo.ext
        req.body.url = imgname;
        cb(null, imgname)
    }
})

const upload = multer({ storage: storage })

uploadRouter.post('/', upload.single('ava'), (req, res) => {

    res.json({
        msg: 'OK',
        code: 2000,
        url: '/public/img/' + req.body.url
    })
})






module.exports = uploadRouter