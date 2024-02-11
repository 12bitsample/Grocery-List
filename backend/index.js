import * as dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';


const app = express();

const port = 8000;
app.listen(port, () => console.log(`Server is running on Port: ${port}`))