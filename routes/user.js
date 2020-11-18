const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { authenticateUser } = require('../middlewares/auth');
const { validateReq } = require('../middlewares/validator');
const { registerSchema, loginSchema } = require('../utils/schemas');

router.post('/register', validateReq(registerSchema) ,userController.registerUser);
router.post('/login', validateReq(loginSchema), userController.loginUser);
router.get('/get', authenticateUser, userController.getTodos);

module.exports = router;

