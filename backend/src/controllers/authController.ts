import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/User.ts';

// Signup
export const signup = async(req: Request, res: Response) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(400).json({ 
            message: 'User already exists'
        });

        const passwordHash = await bcrypt.hash(password, 10);
        const user = await User.create({
            name, email, passwordHash
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: "7d" });

        res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email, birthDate: user.birthDate, phoneNumber: user.phoneNumber }});
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}; 

export const login = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) return res.status(400).json({ 
            message: 'Invalid credentials'
        })

        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if(!isMatch) return res.status(400).json({
            message: 'Invalid password'
        })

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
        res.json({ token, user:{ id: user._id, name: user.name, email: user.email, birthDate: user.birthDate, phoneNumber: user.phoneNumber }});
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}