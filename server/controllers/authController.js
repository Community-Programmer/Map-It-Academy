import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/Auth/userModel.js';


const SECRET_KEY = process.env.SECRET_KEY;


export const signUp = async(req, res) => {

    try {

        const { firstname, lastname, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({
            username: firstname + lastname,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully.' });

    } catch (error) {

        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Internal server error.' });
    };

};

export const login = async(req, res) => {

    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '30d' });

        res.cookie('token', token, { httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000 }); 

        res.status(200).json({ message: 'Login successful.', username: user.username });

    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error.' });
    };

};