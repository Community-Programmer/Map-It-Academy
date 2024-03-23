import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export const connectDb = async()=>{

    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}