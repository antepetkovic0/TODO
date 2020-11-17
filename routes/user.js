const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const auth = require('../middlewares/auth');
const validator = require('../middlewares/validator');
const schema = require('../utils/schemas');

router.post('/register', validator.validateReq(schema.registerSchema) ,userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/get', auth.authenticateUser, userController.getTodos);

module.exports = router;

