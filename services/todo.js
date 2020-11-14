const db = require('../models');

const Todo = db.Todo;

module.exports = {
    getAllTodos: async () => {
        try {
            const todos = await Todo.findAll();
            return todos;
        } catch (e) {
            throw Error('Error while getting all todos.');
        }
    },
    getTodo: async (id) => {
        try {
            const todo = await Todo.findAll({
                where: {
                    id: id
                }
            });
            return todo;
        } catch (e) {
            throw Error('Error while getting single todo.');
        }
    },
    addTodo: async (title, completed, description) => {
        try {
            const newTodo = {
                title,
                completed,
                description
            };
            const todo = await Todo.create(newTodo);
            return todo;
        } catch (e) {
            throw Error('Error while adding todo.');
        }
    }
}