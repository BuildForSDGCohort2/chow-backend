const express = require('express');

const router = express.Router();
const {signUp, signIn} = require('../controllers/userController');
const checkAuth = require('../middlewares/auth');

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
router.post('/signin', signIn);

/**
 * @description - Get LoggedIn User
 * @route - GET /api/v1/me
 * @param - /user/me
 */
router.get('/me', checkAuth);
module.exports = router;
