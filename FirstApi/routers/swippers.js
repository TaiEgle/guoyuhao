const express = require(`express`);
const SwippersRouter = express.Router();
const SwippersControll = require('../controll/SwippersControll');

const path = require('path')
const bodyparser = require('body-parser'); /* 解析post请求 */
const urlencodedParser = bodyparser.urlencoded({ extended: false })


SwippersRouter.use((req, res, next) => {
    var d = Date(Date.now());
    // 转换日期字符串中的毫秒数
    a = d.toString();
    console.log('轮播图路由启动--' + a);
    next()
})

SwippersRouter.get('/', SwippersControll.showImg);

SwippersRouter.post('/', SwippersControll.create);

SwippersRouter.delete(`/del/:id`, SwippersControll.delImg);

SwippersRouter.patch(`/:id`, SwippersControll.change);

module.exports = SwippersRouter;