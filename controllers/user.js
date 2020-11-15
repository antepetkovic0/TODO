const userService = require('../services/user');

const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;
        const user = await userService.registerUser(firstname, lastname, username, email, password);
        return res.json({ status: 200, data: user });
    } catch (e) {
        return res.json({ status: 400, message: e.message });
    }
}

module.exports = { registerUser };


