const {addbook,getbook,patchbook,deletebook,getOnebook} = require('../model/coon')
const getB=async(req,res) =>{
    let data =await getbook();
    if(data){
        res.send({
            meta:{
                status:200,
                msg:'获取书籍成功'
            },
            data:data
        })
    }else{
        res.send({
            data:{
                status:400,
                msg:'shibai'
            }
        })
    }
}
const postB=async(req,res) =>{
    let postbook=req.body;

    let rs =await addbook(postbook);
    if(rs){
        res.send({
            meta:{
                status:200,
                msg:'添加成功'
            },
            data:rs
        })
    }else{
            res.send({
                data:{
                    status:400,
                    msg:'添加失败'
                }
            })

    }
}
const patchB=async(req,res) =>{
    let id = req.params.id
    let update = req.body
    let rs =await patchbook(id,update);
    if(rs){
        res.send({
            meta:{
                status:200,
                msg:'修改成功'
            },
            data:rs
        })
    }else{
            res.send({
                data:{
                    status:400,
                    msg:'修改失败'
                }
            })

    }
}
const deleteB=async(req,res) =>{
    let id = req.params.id
    let rs =await deletebook(id);
    if(rs){
        res.send({
            meta:{
                status:200,
                msg:'删除成功'
            },
            data:rs
        })
    }else{
            res.send({
                data:{
                    status:400,
                    msg:'删除失败'
                }
            })

    }
}
const getOneB=async(req,res) =>{
    let id = req.params.id
    let rs =await getOnebook(id);
    if(rs){
        res.send({
            meta:{
                status:200,
                msg:'查找成功'
            },
            data:rs
        })
    }else{
            res.send({
                data:{
                    status:400,
                    msg:'查找失败'
                }
            })

    }
}

module.exports = {
    getB,
    postB,
    patchB,
    deleteB,
    getOneB
}