const db = require('../models');
const hash = require('../utils/hash');

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

module.exports = { registerUser };