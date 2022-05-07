import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/User.js';
import Products from './models/Products.js';
import Order from './models/Order.js';
import connectDB from './db/connect.js';
import colors from 'colors';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.remove();
    await Products.remove();
    await User.remove();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id; //

    const sampleProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Products.insertMany(sampleProducts);

    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Order.remove();
    await Products.remove();
    await User.remove();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
