import asyncWrapper from '../middlewares/async-wrapper.js';
import Product from '../models/product.js';

const all = async (req, res, next) => {
  // TODO: get user from db and check the role

  const { name, price, featured, rating, company, sort, fields } = req.query;

  const queryObj = {};

  // Search by props
  if (name) queryObj.name = name;

  if (price) queryObj.price = price;

  if (featured) queryObj.featured = featured;

  if (rating) queryObj.rating = rating;

  if (company) queryObj.company = company;

  let result = Product.find(queryObj);

  // Sorting
  if (sort) {
    const list = sort.split(',').join(' ');
    result = result.sort(list);
  }

  // Selecting specific fields
  if (fields) {
    const list = fields.split(',').join(' ');
    result = result.select(list);
  }

  // Limit & pagination
  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;

  result = result.limit(limit).skip(skip);

  const products = await result;

  res.status(200).json({ products });
};

export { all };
