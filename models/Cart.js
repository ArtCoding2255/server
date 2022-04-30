import mongoose from 'mongoose';

const Cart = mongoose.Schema({
  //id user
  //id_product
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },

  timestamps: true,
});
