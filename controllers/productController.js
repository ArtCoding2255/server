import asyncHandler from 'express-async-handler';
import Product from '../models/Products.js';

//fetch all products
//route GET/api/products
//access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//fetch single product
//route GET/api/products/:id
//access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

//fetch single product
//route DELETE/api/products/:id
//access private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

//fetch single product
//route POST/api/products/:id
//access private/admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Product name' + '' + Date(),
    price: 0,
    user: req.user._id,
    image: 'Product image URL',
    category: 'Product category',
    countInStock: 0,
    description: 'Product description',
  });

  const createProduct = await product.save();
  res.status(201).json(createProduct);
});

//fetch update a product
//route PUT/api/products/:id
//access private/admin
const updatedProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, category, countInStock } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.category = category;
    product.countInStock = countInStock;

    const updateProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export {
  getProductById,
  getProducts,
  deleteProduct,
  updatedProduct,
  createProduct,
};
