import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name must be provided'],
    },
    price: {
      type: Number,
      required: [true, 'price must be provided'],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 1.5,
    },
    company: {
      type: String,
      enum: {
        values: ['apple', 'microsoft', 'aws'],
        message: '{VALUE} is not supported',
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productsSchema);
