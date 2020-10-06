const path = require('path') // 内置 处理路径的模块
const express = require('express') //  web框架
const cors = require('cors') // 跨域处理
const bodyParser = require('body-parser') // 解析post请求

const app = express();

// 解析前台传过来的json格式
app.use(express.json())
    // 解决跨域
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(cors())


// 定义默认路由
app.get('/', (req, res) => {
    res.send('vue接口ok');
})

const ProductRouter = require('./routers/Product')
const UsersRouter = require('./routers/Users')
const uploadRouter = require('./routers/upload');
const uploadsRouter = require('./routers/uploads');
const SwippersRouter = require('./routers/swippers');


//  使用路由 /index 是路由指向名称
app.use(`/P1`, ProductRouter)
app.use(`/`, UsersRouter)
app.use(`/upload`, uploadRouter)
app.use(`/uplodeSwippers`, uploadsRouter)
app.use(`/Swippers`, SwippersRouter)


app.get('/user/info', (req, res) => {
    res.json({
        meta: {
            status: 200,
            msg: '登陆成功'
        },
        data: {
            name: '郭宇豪',
            avatar: '/public/img/sha.png'
        }

    })
})

app.post('/logout', (req, res) => {
    res.json({
        meta: {
            status: 200,
            message: '退出成功'
        },
        data: {

        }


    })
})
const Server = app.listen(5566, () => {
    console.log('服务器运行在 5566');
})