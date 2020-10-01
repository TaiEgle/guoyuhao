const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost/";

async function dataOperate() {
    var conn = null;
    try {
        conn = await MongoClient.connect(url);
        console.log("数据库已连接");
        const test = conn.db("testdb").collection("test");
        // 增加
        await test.insertOne({ "user": "郭宇豪" });
        // 查询
        var arr = await test.find().toArray();
        console.log(arr);
        // 更改
        // await test.updateMany({ "user": "小郭" }, { $set: { "user": "郭宇豪" } });
        // 查询
        arr = await test.find().toArray();
        console.log(arr);
        // 删除
        // await test.deleteMany({ "user": "郭宇豪" });
        // 查询
        arr = await test.find().toArray();
        console.log(arr);
    } catch (err) {
        console.log("错误：" + err.message);
    } finally {
        if (conn != null) conn.close();
    }
}

dataOperate();