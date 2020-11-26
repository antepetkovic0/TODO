const todoService = require('../services/todo');

const getAllTodos = async (req, res) => {
    try {
        const todos = await todoService.getAllTodos();
        return res.status(200).json({status: 200, data: todos});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};

const getTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await todoService.getTodo(id);
        return res.status(200).json({status: 200, data: todo});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};

// const addTodo = async (req, res) => {
//     try {
//         const { id } = req.decoded;
//         const { title, completed, description } = req.body;
//         const todo = await todoService.addTodo(title, completed, description, id);
//         return res.status(200).json({status: 200, data: todo});
//     } catch (e) {
//         return res.status(400).json({status: 400, message: e.message})
//     }
// };
const addTodo = async (req, res) => {
    try {
        const { title, completed, description } = req.body;
        const todo = await todoService.addTodo(title, completed, description);
        return res.status(200).json({status: 200, data: todo});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};

const editTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, completed, description } = req.body;
        const result = await todoService.editTodo(id, title, completed, description);
        return res.status(200).json({status: 200, message: result});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};

const toggleTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { completed } = req.body;
        const result = await todoService.toggleTodo(id, completed);
        return res.status(200).json({status: 200, message: result});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};

const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await todoService.deleteTodo(id);
        return res.status(200).json({status: 200, message: result});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
};

module.exports = { getAllTodos, getTodo, addTodo, editTodo, toggleTodo, deleteTodo };