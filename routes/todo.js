const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);
router.post('/add', todoController.addTodo);
router.put('/edit/:id', todoController.editTodo);
router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;