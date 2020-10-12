const mongoose = require('mongoose');
const { adduser, Login, patchShopCart, editShopCart } = require('../models/Usersdb')
const { getOneProduct } = require('../models/Productdb')
const { verifyToken, createToken, md5 } = require('../token/index')

// 添加购物车方法
const AddCart = async(req, res) => {
        // res.end("购物车")

        let productId = req.body.productId;
        const token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
        const istrue = verifyToken(token);
        let params = {
            _id: istrue._id
        };
        // 查用户名存在吗
        const rs = await Login(params);
        // 用户不存在
        if (!rs) {
            res.json({

                meta: {
                    status: 400,
                    msg: "用户不存在"
                },
                data: null
            })
        } else {
            // 用户存在
            if (rs) {
                let inCart = false;
                console.log('用户存在--开始遍历购物车');

                rs.cartList.forEach((val) => {
                    // console.log(item);
                    // 如果商品存在于购物车给商品数量加一
                    if (val.productId == productId) {
                        inCart = true;
                        val.productNum++;
                        adduser(rs);

                        res.json({
                            meta: {
                                status: 200,
                                msg: "购物车加一"
                            },
                            data: null
                        })

                    }
                });
                // 如果商品不存在于购物车
                if (!inCart) {
                    const productDoc = await getOneProduct(productId);
                    console.log('商品不存在购物车');
                    // 如果商品不存在
                    if (!productDoc) {
                        res.json({
                            meta: {
                                status: 400,
                                msg: "商品不存在"
                            },
                            data: null
                        })
                    }
                    // 商品存在推入用户名下的购物车数组
                    else {
                        console.log('添加购物车成功');

                        newP = {
                            productId: productDoc._id,
                            commadity: productDoc.commadity,
                            price: productDoc.price,
                            place: productDoc.place,
                            cover: productDoc.cover,
                            productNum: 1,
                            checked: true
                        }
                        rs.cartList.push(newP);
                        adduser(rs);

                        res.json({
                            meta: {
                                status: 200,
                                msg: "加入购物车成功"
                            },
                            data: null
                        })

                    }
                }



            }

        }



    }
    // 删除购物车方法
const delCart = async(req, res) => {
    // res.end('删除');
    let productId = req.body.productId;
    const token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
    const istrue = verifyToken(token);
    let params = {
        _id: istrue._id
    };

    // 调用用户表更新方法
    const patchDoc = await patchShopCart(params, productId);
    if (patchDoc) {
        res.json({

            meta: {
                status: 200,
                msg: "删除成功"
            },
            data: patchDoc
        })
    }

}

// 查询购物车
const getCart = async(req, res) => {
    const token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
    const istrue = verifyToken(token);
    let params = {
        _id: istrue._id
    };
    const userDoc = await Login(params);

    if (userDoc) {
        res.json({

            meta: {
                status: 200,
                msg: "成功"
            },
            data: userDoc.cartList
        })
    }

}

// 修改购物车
const editCart = async(req, res) => {
    let checked = req.body.checked;
    let productNum = req.body.productNum;
    let productId = req.body.productId;
    const token = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : '';
    const istrue = verifyToken(token);
    let params = {
        _id: istrue._id,
        'cartList.productId': productId
    };
    let update = {
            $set: { "cartList.$.productChecked": checked, "cartList.$.productNum": productNum }
        }
        // res.end('修改购物车');
    const editDoc = await editShopCart(params, update);
    if (editDoc) {
        res.json({
            msg: "成功"
        })
    } else {
        res.json("shibai")
    }
}


module.exports = {
    AddCart,
    delCart,
    getCart,
    editCart
}