import express from 'express'
import { userData } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get('/data/:id', userData);



export default userRoute;
