const crypto = require("crypto");
const jwt = require('jsonwebtoken');

const secret = 'vueapi_secret';
const expiresIn = '30min';

const createToken = (playload) => {
    return jwt.sign(playload, secret, { expiresIn: expiresIn });
};

const verifyToken = (token) => {
    try {
        // console.log(token);
        // console.log(1);
        const data = jwt.verify(token, secret);
        // console.log(data);
        return data
    } catch (err) {
        console.log('哈哈哈哈');

        return false;
    }
}

const md5 = (pwd, salt) => {
    return crypto
        .createHash('md5')
        .update(pwd + salt)
        .digest('hex');
};



module.exports = {
    createToken,
    verifyToken,
    md5

}