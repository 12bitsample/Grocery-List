// import express from 'express';
// import cors from 'cors';
// import {signupUser, loginUser, registerUser} from '../controllers/authController.js';

// const router = express.Router();

// //middleware
// router.use(
//     cors({
//         credentials: true,
//         origin: 'http://localhost:5173',
//     })
// );

// //register user
// router.post('/register', registerUser);
// //login user
// router.post('/login', loginUser);

// export {router as default};

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