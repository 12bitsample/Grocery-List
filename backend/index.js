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
        origin: 'http://localhost:5173',
        credentials: true,
        
    })
);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();

})



//routes
app.use('/', authRoutes);
app.use('/api/groceries', groceriesRoutes);

const port = 4000;
app.listen(port, () => console.log(`Server is running on Port: ${port}`))