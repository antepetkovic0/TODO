const jwt = require('jsonwebtoken');

const createToken = (id, username) => {
    const payload = {
        id,
        username
    };

    const token = jwt.sign(
        payload,
        'secret-password',
        { expiresIn: '1h'} 
    );
    return token;
}

const verifyToken = (token) => {
    const decoded = jwt.verify(token, 'secret-password');
    return decoded;
}

module.exports = { createToken, verifyToken };