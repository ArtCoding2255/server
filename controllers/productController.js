const createProduct = async (req, res) => {
  res.send('create product');
};
const getAllProducts = async (req, res) => {
  res.send(' get all products');
};
const updateProduct = async (req, res) => {
  res.send(' update product');
};
const deleteProduct = async (req, res) => {
  res.send(' delete product');
};
const showStats = async (req, res) => {
  res.send('show stats');
};

export {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
  showStats,
};
