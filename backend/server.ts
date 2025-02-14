import express from 'express';
import cors from 'cors';
import ordersRoutes from './routes/orders';

const app = express();

const PORT = 8000;

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use('/orders', ordersRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
