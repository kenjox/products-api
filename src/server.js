import express from 'express';
import dotenv from 'dotenv';

import connectToDB from './db/connect.js';
import productsRoutes from './routes/products.js';
import notFoundMiddleware from './middlewares/not-found.js';
import errorHandlerMiddleware from './middlewares/error-handler.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());
app.use('/api/v1/products', productsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

async function start() {
  try {
    // Connect to db
    await connectToDB(process.env.MONGO_URI);
    console.log('🎉🎉🎉 Successfully connected to database');
    app.listen(PORT, () => console.log(`🚀🚀🚀 Server running at port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
}

start();
