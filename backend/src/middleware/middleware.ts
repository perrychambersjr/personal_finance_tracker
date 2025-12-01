import { NextFunction, Request, Response } from 'express';
import jwt, { Jwt } from 'jsonwebtoken';

interface JwtPayload {
    id: string;
}

// Extend request type to include userId
declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).json({ message: "Not authorized"})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        req.userId = decoded.id;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token'});
    }
}