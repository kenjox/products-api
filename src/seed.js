import dotenv from 'dotenv';

import connectToDB from './db/connect.js';
import Product from './models/product.js';

dotenv.config();

const products = [
  {
    name: 'MacBook pro',
    price: 599,
    featured: true,
  },
  {
    name: 'MacBook Air pro',
    price: 499,
    featured: true,
  },
  {
    name: 'iMac',
    price: 999,
    featured: true,
  },
  {
    name: 'iPad pro',
    price: 399,
    featured: true,
  },
  {
    name: 'iPad mini',
    price: 199,
    featured: false,
  },
];

async function init() {
  try {
    await connectToDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(products);
    console.log('🎉🎉🎉 Successfully populated the database');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

init();
