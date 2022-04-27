/* import mongoose from 'mongoose';

const Cart = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please provide name'],
      minlength: 3,
      maxlength: 20,
      trim: true,
    },
    email: {
      type: String,
      require: [true, 'Please provide email'],
      unique: true, //ensure
    },
    password: {
      type: String,
      require: [true, 'Please provide password'],
      minlength: 6,
    },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
); */
