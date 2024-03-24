import express from 'express';
import { connectDb } from './lib/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';

const PORT = process.env.PORT | 5000;
const app = express();

const corsOptions = {
    origin: process.env.CROSS_ORIGIN_URL, 
    credentials: true 
}

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));
app.use('/auth',authRoute);
app.use('/user',userRoute);

connectDb();


app.listen(PORT,()=>{
    console.log(`Server Started at : http://127.0.0.1:${PORT}`);
})