import express from 'express'
import { userData } from '../controllers/userController';

const userRoute = express.Router();

userRoute.get('/data/:id', userData);



export default userRoute;
