import { Document, Schema, model } from 'mongoose';

export interface IGoal extends Document {
    userId: string,
    title: string;
    targetAmount: number;
    currentAmount: number;
    dueDate: Date;
    note?: string;
    category?: string;
}

const goalSchema: Schema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    targetAmount: { type: Number, required: true },
    currentAmount: { type: Number, required: true, default: 0 },
    dueDate: { type: Date, required: true },
    note: { type: String, required: false },
    category: { type: String, required: false }
}, { timestamps: true });

export default model<IGoal>('Goal', goalSchema);