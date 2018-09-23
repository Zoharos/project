const jwt = require('jsonwebtoken');
const fs = require('fs');

const key = fs.readFileSync('server/encryption/localhost.key', 'utf8');

function createJWT(id) {
    const token = jwt.sign({userid: id}, key, {expiresIn: '1h'});
    return token;
}

function verifyJWT(token) {
    //console.log(token);
    const data = jwt.verify(token, key);
    return data;
}

module.exports = {
    createJWT,
    verifyJWT
};