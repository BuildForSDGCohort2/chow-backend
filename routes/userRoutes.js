const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const {signUp, signIn, getUserByToken } = require('../controllers/userController');
const checkAuth = require('../middlewares/auth');

/**
 * @description - User SignUp
 * @route - POST /api/v1/user/signup
 * @access - public
 */
router.post(
    '/signup',
  [
    check('username', 'username field is required').notEmpty(),
    check('email', 'Email field is required').isEmail(),
    check('password', 'Password field is required').notEmpty(),
  ],
  signUp);

/**
 * @description - User login
 * @route - POST /api/v1/user/signin
 * @access - public
 */
router.post(
  '/signin',
    [
      check('email', 'Email field is required').isEmail(),
      check('password', 'Password filed is required').notEmpty(),
    ],
    signIn);

/**
 * @description - Get user by Token
 * @route - GET /api/v1/user
 * @access - private
 */
router.get('/me', checkAuth, getUserByToken);

module.exports = router;

