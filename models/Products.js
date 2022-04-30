import mongoose from 'mongoose';
const ProductSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      require: [true, 'Please provide product name'],
      minlength: 3,
      unique: true,
    },
    image: {
      type: String,
      require: [true, 'Please provide  image'],
    },
    price: {
      type: Number,
      require: [true, 'Please provide price'],
      default: 0,
    },
    category: {
      type: String,
      require: [true, 'Please provide  category'],
    },
    description: {
      type: String,
      require: [true, 'Please provide description'],
    },
    countInStock: {
      type: Number,
      require: [true, 'Please provide  in stock'],
      default: 0,
    },
  },
  { timeStamp: true }
);

export default mongoose.model('Product', ProductSchema);
