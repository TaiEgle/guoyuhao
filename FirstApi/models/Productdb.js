const mongoose = require('mongoose');
const db = require('./ConnectMongodb')



const P = db.model('products', {
    commadity: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    place: {
        type: String,
        require: true
    },
    create: {
        type: String,
        Default: Date.now(),
    },
    cover: {
        type: String
    }
});


//添加 信息
const addProduct = (postProduct) => {
    const newProduct = new P(postProduct);
    return newProduct.save()
        .then((res) => {
            console.log('成功', res);
            return res;
        }).catch((err) => {
            console.log('失败', err);
            return false;

        });
}


//获取所有 信息
const getProduct = (num, page) => {
        return P.find().limit(num).skip(page)
            .then((res) => {
                console.log('成功', res);
                return res;
            }).catch((err) => {
                console.log('失败', err);
                return false

            });
    }
    //通过 _id修改 信息
const patchProduct = (id, update) => {
        return P.updateOne({ _id: id }, { $set: update })
            .then((res) => {
                console.log('成功-----', res);

                return res;
            })
    }
    //通过 _id删除 信息
const deleteProduct = (id) => {
        return P.deleteMany({ _id: id })
            .then((res) => {
                console.log('成功-----', res);

                return res;
            }).catch((err) => {
                console.log('失败', err);
                return false

            });
    }
    //通过 _id获取  信息
const getOneProduct = (id) => {
    return P.findOne({ _id: id })
        .then((res) => {
            // console.log('成功', res);

            return res;
        }).catch((err) => {
            // console.log('失败', err);
            return false

        });
}
module.exports = {
    addProduct,
    getProduct,
    patchProduct,
    deleteProduct,
    getOneProduct,
    P
}