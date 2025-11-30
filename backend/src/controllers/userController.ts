import { Request, Response } from "express";
import User, { IUser } from "../models/User.ts";

export const createUser = async(req: Request<{}, {}, IUser>, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch(error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};