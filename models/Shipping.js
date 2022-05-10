import mongoose from 'mongoose';

const ShippingSchema = mongoose.Schema({
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    //indexing
    //population
  },
  name: {
    type: String,
    require: [true, 'Please provide your name'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  phoneNumber: {
    type: Number,
    require: [true, 'Please provide phone number'],
  },
  address: {
    type: String,
    require: [true, 'Please provide address'],
  },
  province: {
    type: String,
    require: [true, 'Please provide  province'],
  },
  postCode: {
    type: String,
    require: [true, 'Please provide  postCode'],
  },
});

export default mongoose.model('Shipping', ShippingSchema);
