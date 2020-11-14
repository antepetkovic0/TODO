const jwt = require('jsonwebtoken');

export const createToken = (id, username) => {
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

export const verifyToken = (token) => {
    const decoded = jwt.verify(token, 'secret-password');
    return decoded;
}