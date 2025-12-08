import { Request, Response } from 'express';
import Goal from '../models/Goal.ts';

export const getGoals = async (req: Request, res: Response) => {
    try {
        const goals = await Goal.find({ userId: req.query.id });
        res.status(200).json(goals);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createGoal = async (req: Request, res: Response) => {
    try {
        const goal = new Goal(req.body);
        await goal.save();
        res.status(201).json(goal);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}