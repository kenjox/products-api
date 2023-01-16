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
  },
  { timestamps: true }
);

export default mongoose.model('Product', productsSchema);
