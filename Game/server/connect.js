const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true }, err => {
    if (err) {
        console.log('数据库连接失败---' + err);
        return;
    }
    console.log('数据库连接成功');
});