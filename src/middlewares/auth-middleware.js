import jwt from 'jsonwebtoken';
import CustomError from '../errors/custom-error.js';

const authMiddleware = (req, res, next) => {
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')) {
    return next(
      new CustomError({ statusCode: 401, message: 'Not authorized to access this resource' })
    );
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    next(new CustomError({ statusCode: 401, message: 'Not authorized to access this resource' }));
  }
};

export default authMiddleware;
