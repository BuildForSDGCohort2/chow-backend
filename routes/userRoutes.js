const express = require('express');

const router = express.Router();
const { signUp } = require('../controllers/userController');

/**
 * @description - User SignUp
 * @route - POST /api/v1/signup
 * @access - public
 */
 router.post('/signup', signUp);
 export default router;
