import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
  userId: string;

  walletId?: string;    // if transaction came from a card/bank
  accountId?: string;   // if it's a deposit/withdraw into an account

  merchantId?: string;
  categoryId?: string;
  invoiceId?: string;

  typeId: string;       // income, expense, transfer, deposit, etc
  amount: number;
  date: Date;
  description?: string;

  createdAt: Date;
}

const TransactionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", index: true },

  walletId: { type: Schema.Types.ObjectId, ref: "Wallet", index: true },
  accountId: { type: Schema.Types.ObjectId, ref: "Account", index: true }, 
  // allows: deposit to account, withdrawal from account, sweep to savings

  merchantId: { type: Schema.Types.ObjectId, ref: "Merchant" },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  invoiceId: { type: Schema.Types.ObjectId, ref: "Invoice" },

  typeId: { type: Schema.Types.ObjectId, ref: "TransactionType" }, 
  // income, expense, transfer, deposit, withdrawal

  amount: Number,
  date: Date,
  description: String,

  createdAt: { type: Date, default: Date.now }
});
