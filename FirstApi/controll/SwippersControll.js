const { add, show, del, patch } = require('../models/Swippersdb');

const showImg = async(req, res) => {
    let num = req.query.num;
    let page = (req.query.page - 1) * num


    let data = await show(num * 1, page);
    if (data) {
        res.send({
            meta: {
                status: 200,
                msg: '获取商品成功'
            },
            data: data
        })
    } else {
        res.send({
            data: {
                status: 400,
                msg: '获取数据失败'
            }
        })
    }
}
const create = async(req, res) => {
        let postProduct = req.body;

        let rs = await add(postProduct);
        if (rs) {
            res.send({
                meta: {
                    status: 200,
                    msg: '添加成功'
                },
                data: rs
            })
        } else {
            res.send({
                meta: {
                    status: 400,
                    msg: '添加失败'
                }
            })

        }
    }
    // 删除
const delImg = async(req, res) => {
        let id = req.params.id
        let rs = await del(id);
        if (rs) {
            res.send({
                meta: {
                    status: 200,
                    msg: '删除成功'
                },
                data: rs
            })
        } else {
            res.send({
                meta: {
                    status: 400,
                    msg: '删除失败'
                },
                data: null
            })

        }
    }
    // 修改
const change = async(req, res) => {
    let id = req.params.id
    let update = req.body
        // console.log(id);
        // console.log(update);
    let rs = await patch(id, update);
    if (rs.nModified > 0) {
        res.send({
            meta: {
                status: 200,
                msg: '修改成功'
            },
            data: rs
        })
    } else {
        res.send({
            meta: {
                status: 400,
                msg: '修改失败'
            },
            data: null
        })

    }
}

module.exports = {
    showImg,
    create,
    delImg,
    change
}