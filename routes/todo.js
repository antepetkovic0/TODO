const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);
router.post('/add', todoController.addTodo);

module.exports = router;