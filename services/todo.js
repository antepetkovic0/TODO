const db = require('../models');

const Todo = db.Todo;

const getAllTodos = async () => {
    try {
        const todos = await Todo.findAll();
        return todos;
    } catch (e) {
        throw Error('Error while getting all todos.');
    }
};

const getTodo = async (id) => {
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
};

const addTodo = async (title, completed, description) => {
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
};

const editTodo = async (id, title, completed, description) => {
    try {
        const updatedTodo = {
            title,
            completed,
            description
        };
        await Todo.update(updatedTodo, {
            where: { id: id }
        });
        return 'Todo updated successfully.';
    } catch (e) {
        throw Error('Error while updating todo.');
    }
};

const deleteTodo = async (id) => {
    try {
        await Todo.destroy({ 
            where: { id: id }
        });
        return 'Todo deleted successfully.';
    } catch (e) {
        throw Error('Error while deleting todo.');
    }
};

module.exports = { getAllTodos, getTodo, addTodo, editTodo, deleteTodo };