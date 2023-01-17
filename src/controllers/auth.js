import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';

import CustomError from '../errors/custom-error.js';

dotenv.config();

const fakeAccount = ({ username, password }) => {
  if (username === 'john' && password === 'doe') {
    return {
      id: 1,
      username,
      password,
    };
  }

  return null;
};

export default (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new CustomError({ statusCode: 400, message: 'Invalid username or password' }));
  }

  // TODO: verify user exists in db but for now we fake it
  const user = fakeAccount({ username, password });

  if (!user) {
    return next(new CustomError({ statusCode: 400, message: 'Invalid username or password' }));
  }

  // generate jwt token
  try {
    const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
