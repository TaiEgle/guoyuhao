const { createToken, verifyToken, md5 } = require('./index');

const uesr = {
    isup: true,
    _id: "5f6b05b60f5d79336c222f1b",
    uname: '1023',
    salt: '1600849334530',
    pwd: 'GG7781600849334530',
    create: "2020-09-23T08:22:14.535Z",
    __v: 0
}

// 生成 Token
// const token = createToken(uesr);
// console.log(token);

// 验证token
// const testtoken = ""eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3VwIjp0cnVlLCJfaWQiOiI1ZjZiZjM1ZWRhZDU2ZTJiMDQzNGNjNGEiLCJ1bmFtZSI6IjEyMyIsInNhbHQiOiIxNjAwOTEwMTc0MDYzIiwicHdkIjoiMGZlZTk3MTZiNGM3MGJmMmEzMWJkYjM3ZWJkNWMyMWIiLCJjcmVhdGUiOiIyMDIwLTA5LTI0VDAxOjE2OjE0LjA3MVoiLCJfX3YiOjAsImlhdCI6MTYwMDkxMDE4NCwiZXhwIjoxNjAwOTExOTg0fQ.smpfLEzj_gavCTpRGoTL4LOkWPZTuBcVzsRJGqNmj8s""
// const userIfo = verifyToken(testtoken);
// console.log(userIfo);


// const pwd = '1598397645';
// const salt = '778';

// const p = md5(pwd, salt)
// console.log(p);