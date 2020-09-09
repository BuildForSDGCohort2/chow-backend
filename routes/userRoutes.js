const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { signUp, signIn } = require('../controllers/userController');

/**
 * @description - User SignUp
 * @route - POST /api/v1/signup
 * @access - public
 */
router.post(
    '/signup',
    [
      check('username', 'username field is required').notEmpty(),
      check('email', 'Email field is required').isEmail(),
      check('password', 'Password field is required').notEmpty()
    ],
    signUp);

/**
 * @description - User login
 * @route - POST /api/v1/signin
 * @access - public
 */
router.post(
    '/signin',
    [
      check('email', 'Email field is required').isEmail(),
      check('password', 'Password filed is required').notEmpty()
    ],
    signIn);

export default router;
