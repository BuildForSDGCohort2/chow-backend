const jwt = require('jsonwebtoken');

function checkAuth(req, res, next) {
  const token = req.header('token');
  if(!token)
    return res.status(401).json({
        message: 'Autth Error'
    });
  try {
    const decoded = jwt.verify(token, 'randomString');
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({
        message: 'Invalid Token'
    });
  }
};

module.exports = checkAuth;
