const db = require('../models');
const User = db.User;
import { verifyToken } from '../utils/jwt';

export const authenticateUser = async (req, res, next) => {
    //Authorization: Bearer <acces_token>
    const header = req.headers['Authorization'];
    if(!header) {
        const token = header.split(' ')[1];
        verifyToken(token, (err, decoded) => {
            if(err) {
                return res.send({ message: 'Failed to authenticate token.'});
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        res.send({ message: 'No provided token.'})
    }
}