const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

/**
 * @description - User SignUp
 */

 const signUp = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()
      });
  }

  const {
      username,
      email,
      password
  } = req.body;
  try {
      let user = await User.findOne({
          email
      });
    if(user) {
        return res.status(400).json({
            msg: 'User Already Exists!'
        });
    }
    const newUser = new User({
        username,
        email,
        password
    });  
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();  
    const payload = {
      newUser: {
        id: newUser.id
      }
    };  
    jwt.sign(
      payload,
      'randomString', {
          expiresIn: 10000
      },
      (err, token) => {
        if(err) throw err;
        return res.status(200).json({
            status: true,
            message: 'user signup successful',
            token
        });
      }
    );
  } catch (err) {
        // console.log(err.message);
        res.status(500).send('Error in Saving');
    };
 };

/**
 * @description - User Login
 */

const signIn = async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
      return res.status(400).json({
          errors: errors.array()
      });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({
        email
    });
    if(!user)
      return res.status(400).json({
          message: 'User does not Exist!'
      });
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch)
        return res.status(400).json({
            message: 'Incorrect Password !'
        });
      const payload = {
        user: {
            id: user.id
        }
      };
      jwt.sign(
          payload,
          'randomString',
          {
              expiresIn: 3000
          },
          (err, token) => {
            if(err) throw err;
            return res.status(200).json({
                status: true,
                message: 'User signin successful',
                token
            });
          }
      );
  } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Server Error'
      });
  }
}

/**
 * @description - get user by Token
 */
const getUserByToken = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json(user);
  } catch (e) {
    res.send({
      status: false,
      message: 'Error in Fetching user',
    });
  }
};
 module.exports = {
     signUp,
     signIn,
     getUserByToken,
    };
