const userService = require('../services/user');
const todoService = require('../services/todo');

const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, username, email, password } = req.body;
        const user = await userService.registerUser(firstname, lastname, username, email, password);
        return res.json({ status: 200, data: user });
    } catch (e) {
        return res.json({ status: 400, message: e.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userService.loginUser(username, password);
        return res.json({ status: 200, data: user });
    } catch (e) {
        return res.json({ status: 400, message: e.message });
    }
}

//just testing middleware
const getTodos = async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();
        return res.status(200).json({status: 200, data: todos});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};

module.exports = { registerUser, loginUser, getTodos };


