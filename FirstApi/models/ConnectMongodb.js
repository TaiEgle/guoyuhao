const mongoose = require('mongoose');
// const { ResumeToken } = require('mongodb');

const db = mongoose.createConnection('mongodb://project:778@localhost:27017/project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on('error', () => {
    console.log('数据库出现错误');
})
db.on('open', () => {
    console.log('数据库打开成功');
})
db.on('connected', () => {
    console.log('数据库连接成功');
})




module.exports = db