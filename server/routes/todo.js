const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo');
const { authenticateUser } = require('../middlewares/auth');

// router.get('/', authenticateUser, todoController.getAllTodos);
// router.get('/:id', authenticateUser, todoController.getTodo);
// router.post('/add', authenticateUser, todoController.addTodo);
// router.put('/edit/:id', authenticateUser, todoController.editTodo);
// router.delete('/delete/:id', authenticateUser, todoController.deleteTodo);

//do first redux without auth
router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);
router.post('/add', todoController.addTodo);
router.put('/edit/:id', todoController.editTodo);
router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;