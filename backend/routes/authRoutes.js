import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { loginUser, signupUser } from '../controllers/authController.js';



const router = express.Router();

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
)

// login route
router.post('/login', loginUser);

// register route
router.post('/register', signupUser);

export {router as default}