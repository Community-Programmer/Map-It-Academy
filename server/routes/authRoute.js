import express from 'express'
import { login, signUp } from '../controllers/authController.js';


const authRoute = express.Router();


authRoute.post('/signup', signUp);
authRoute.post('/login', login);



export default authRoute;

