import mongoose, { Document, Schema } from 'mongoose';

export interface IAccount extends Document {
    id: string,
    userId: string,

    name: string,
    typeId: string, // Savings, Investments, etc
    currencyId: string,
    statusId: string,

    balance: number,
    goalAmount?: number,

    contributionHistory?: Contribution[],

    createdAt: Date;
}

export interface Contribution {
    transactionId: string,
    amount: number,
    date: Date
}

const AccountSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", index: true },

  name: String,           // “Emergency Fund”
  typeId: { type: Schema.Types.ObjectId, ref: "AccountType" }, 
                          // savings, investment, sinking_fund, retirement, debt
  currencyId: { type: Schema.Types.ObjectId, ref: "Currency" },

  balance: { type: Number, default: 0 },
  goalAmount: Number,     // optional, for savings goals
  statusId: { type: Schema.Types.ObjectId, ref: "AccountStatus" },

  contributionHistory: [
    {
      transactionId: { type: Schema.Types.ObjectId, ref: "Transaction" },
      amount: Number,
      date: Date
    }
  ],

  createdAt: { type: Date, default: Date.now }
});
