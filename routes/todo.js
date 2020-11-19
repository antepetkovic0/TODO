const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const { authenticateUser } = require('../middlewares/auth');

router.get('/', authenticateUser, todoController.getAllTodos);
router.get('/:id', authenticateUser, todoController.getTodo);
router.post('/add', authenticateUser, todoController.addTodo);
router.put('/edit/:id', authenticateUser, todoController.editTodo);
router.delete('/delete/:id', authenticateUser, todoController.deleteTodo);

module.exports = router;