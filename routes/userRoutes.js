const express = require('express');

const router = express.Router();
const { signUp, signIn } = require('../controllers/userController');

/**
 * @description - User SignUp
 * @route - POST /api/v1/signup
 * @access - public
 */
router.post('/signup', signUp);

/**
 * @description - User login
 * @route - POST /api/v1/signin
 * @access - public
 */
router.post('/signup', signIn);
export default router;
