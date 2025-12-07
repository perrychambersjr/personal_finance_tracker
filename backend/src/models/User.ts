import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string,
    email: string,
    passwordHash: string;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    birthDate: { type: Date, required: false },
    phoneNumber: { type: String, required: false }
}, { timestamps: true });

export default mongoose.model<IUser>("User", userSchema);