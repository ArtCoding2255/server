import cors from 'cors';
import path from 'path';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';

// db and authenticateUser
import connectDB from './db/connect.js';

//---------------------- routers ------------------
import authRouter from './routes/authRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

//--------------------  middleware ------------------
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(cors()); //fetch data from server
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome' });
});
app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' });
});

app.use('/api/products', productsRoutes);
app.use('/api/auth', authRouter);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

const __dirname = path.resolve();
app.use('/upload', express.static(path.join(__dirname, '/uploads')));
// looking for request that not math current route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port} ...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
