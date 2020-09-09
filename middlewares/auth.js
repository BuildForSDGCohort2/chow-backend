const jwt = require('jsonwebtoken');

function checkAuth(req, res, next) {
  const token = req.headers['token'];
  if (!token) {
    return res.status(401).json({ status: false, error: 'Unauthorized::No token in header' });
  }

  try {
    const decoded = jwt.verify(token, 'randomString');
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: 'Invalid token',
    });
  }
};

module.exports = checkAuth;
