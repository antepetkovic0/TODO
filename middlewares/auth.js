const jwt = require('jsonwebtoken');

const authenticateUser = async (req, res, next) => {
    //Authorization: Bearer <acces_token>
    const header = req.headers['authorization'];
    if (typeof header !== undefined) {
        const token = header.split(' ')[1];        
        jwt.verify(token, 'secret-password', (err, decoded) => {
            if (err) {
                res.send({ message: 'Failed to authenticate token.'});
            } else {
                //payload - { id, username, iat, exp }
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({ message: 'No provided token.'})
    }
}

module.exports = { authenticateUser };