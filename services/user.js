const db = require('../models');
const hash = require('../utils/hash');
const jwt = require('../utils/jwt');

const User = db.User;

const registerUser = async (firstname, lastname, username, email, password) => {
    try {
        const hashed = await hash.hashPassword(password);
        const newUser = {
            firstname,
            lastname,
            username,
            email,
            password: hashed
        };

        const user = await User.create(newUser);
        return user;
    } catch (e) {
        throw Error(`Error in creating user - ${e}`);
    }
}

const loginUser = async (username, password) => {
    try {
        const user = await User.findOne({ where: { username }});

        if (!user || !await(hash.checkPassword(password, user.password))) {
            throw Error('Username or password is incorrect.');
        }

        const token = jwt.createToken(user.id, username);
        const { email } = user;
        return { token, user: { username, email } };
    } catch (e) {
        throw Error(`Error in login user - ${e}`);
    }
}

module.exports = { registerUser, loginUser };