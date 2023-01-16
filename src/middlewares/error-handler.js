import CustomError from '../errors/custom-error.js';

export default (error, req, res, next) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res.status(500).json({ message: 'Something went wrong. Try again later' });
};
