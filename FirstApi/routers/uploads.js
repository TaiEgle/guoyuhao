const express = require(`express`);
const uploadsRouter = express.Router();
const fs = require("fs");
const multer = require('multer');
const path = require('path');


const app = express();







uploadsRouter.use((req, res, next) => {
    var d = Date(Date.now());
    // 转换日期字符串中的毫秒数
    a = d.toString();
    console.log('上传文件----路由启动--' + a);
    next()
})


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dname = __dirname.split('routers')[0] + '/public/123';
        req.body.src = dname;
        cb(null, dname)
    },
    filename: function(req, file, cb) {
        const fileinfo = path.parse(file.originalname)

        const imgname = fileinfo.name + '-' + Date.now() + fileinfo.ext

        req.body.url = imgname;

        cb(null, imgname);
    }
})

const upload = multer({ storage: storage })

uploadsRouter.post('/', upload.array('ava', 10), (req, res) => {
    const urlArr = []
    for (var i = 0; i < req.files.length; i++) {
        // console.log(req.files[i].filename);
        urlArr.push('/public/123/' + req.files[i].filename)
    }
    const imgUrl = urlArr.join(',');
    // var aff = imgUrl.split(',');
    // console.log(aff);
    res.json({
        msg: 'OK',
        code: 2000,
        url: imgUrl ? imgUrl : '/public/123/' + req.files.filename
    })
})






module.exports = uploadsRouter