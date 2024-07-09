import express from 'express';
import cors from 'cors';
import {signupUser, loginUser} from '../controllers/authController.js';

const router = express.Router();

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173',
    })
);

//register user
router.post('/register', signupUser);
//login user
router.post('/login', loginUser);

export {router as default};