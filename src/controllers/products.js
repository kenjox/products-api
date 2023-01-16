import Product from '../models/product.js';

const all = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    next(error);
  }
};

export { all };
