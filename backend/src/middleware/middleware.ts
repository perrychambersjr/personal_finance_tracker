import { NextFunction, Request, Response } from 'express';
import jwt, { Jwt } from 'jsonwebtoken';
import { AuthRequest } from '../types/AuthRequest';

interface JwtPayload {
    id: string;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Not authorized, missing token' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        req.user = { id: decoded.id };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
}