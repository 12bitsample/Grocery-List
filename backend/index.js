import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import routes from './routes/authRoutes.js'
import mongoose from 'mongoose';

const app = express();


//db connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected!'))
.catch((err) => console.log('Database not connected!', err));

//middleware
app.use(express.json());

app.use('/', routes)

const port = 8000;
app.listen(port, () => console.log(`Server is running on Port: ${port}`))