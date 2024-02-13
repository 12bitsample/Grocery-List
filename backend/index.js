import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import routes from './routes/authRoutes.js'


const app = express();

app.use('/', routes)

const port = 8000;
app.listen(port, () => console.log(`Server is running on Port: ${port}`))