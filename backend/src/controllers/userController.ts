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

export const getUserById = async(req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}