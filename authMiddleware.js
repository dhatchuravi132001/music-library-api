// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// require('dotenv').config();

// exports.authenticate = async (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1];

//   if (!token) return res.status(401).json({ message: 'No token, authorization denied.' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findByPk(decoded.user_id);
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token.' });
//   }
// };

// exports.authorize = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ message: 'Access forbidden.' });
//   }
//   next();
// };



// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// require('dotenv').config();

// exports.authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Unauthorized' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// exports.authorize = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role))
//     return res.status(403).json({ message: 'Forbidden' });
//   next();
// };




// middlewares/authMiddleware.js
// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware to authenticate JWT token
exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Use JWT_SECRET from .env
    req.user = decoded;  // Attach decoded user data to the request object
    next();  // Proceed to the next middleware or route handler
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};

// Middleware to authorize based on roles
exports.authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {  // Check if user role is allowed
    return res.status(403).json({ message: 'Forbidden: Insufficient role' });
  }
  next();  // Proceed to the next middleware or route handler
};
