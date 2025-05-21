import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import { authMiddleware } from './middleware/authMiddleware';
import userRoutes from './routes/userRoutes';
import vendorRoutes from './routes/vendorRoutes';

//Configuring 
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('This is home route!');
});

app.use('/users', authMiddleware(['buyer']), userRoutes);
app.use('/vendor', authMiddleware(['vendor']), vendorRoutes);

// Server
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
