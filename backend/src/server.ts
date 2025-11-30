import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';

dotenv.config();
// conect db

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Finance Tracker Backend is running.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))