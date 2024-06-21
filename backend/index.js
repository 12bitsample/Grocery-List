import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import authRoutes from './routes/authRoutes.js';
import mongoose from 'mongoose';
import groceriesRoutes from './routes/groceriesRoutes.js';

const app = express();

//db connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected!'))
.catch((error) => console.log(error));

//middleware
app.use(express.json());

app.use(
    cors({
        origin: 'http://localhost:5173/',
        // origin: '*',
        credentials: true,
        optionsSuccessStatus: 200,
})
);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/', authRoutes);
app.use('/api/groceries/', groceriesRoutes);

const port = 4000;
app.listen(port, () => console.log(`Server is running on Port: ${port}`))

// app.get('/test-cors', (req, res) => {
//     res.json({ message: 'CORS is working!' });
//   });

app.get('/api/some-endpoint', (req, res) => {
    console.log('Request received:', req);
    res.json({ message: 'Success' });
  });
  