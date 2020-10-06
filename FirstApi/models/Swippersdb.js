const mongoose = require('mongoose');
const db = require('./ConnectMongodb')


const S = db.model('swippers', {
    url: {
        type: Array,
        require: true
    },
    ishow: {
        type: Boolean,
        Default: true
    },
    create: {
        type: Date,
        default: Date.now()
    }
})

//添加轮播图
const add = (postS) => {
    const newS = new S(postS);
    return newS.save()
        .then((res) => {
            console.log('成功', res);
            return res;
        }).catch((err) => {
            console.log('失败', err);
            return false;

        });
}

//查找轮播图
const show = (num, page) => {
        return S.find().limit(num).skip(page)
            .catch((err) => {
                console.log('失败', err);
                return false;

            });
    }
    // 删除
const del = (id) => {
        return S.remove({ _id: id })
            .then((res) => {
                console.log('成功-----', res);

                return res;
            }).catch((err) => {
                console.log('失败', err);
                return false

            });
    }
    // 修改
const patch = (id, update) => {
    return S.updateOne({ _id: id }, { $set: update })
        .then((res) => {
            console.log('成功-----', res);

            return res;
        })
}

module.exports = {
    add,
    show,
    del,
    patch
}