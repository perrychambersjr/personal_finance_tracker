import mongoose, { Document, Schema } from 'mongoose';

export interface IWallet {
  _id: string;
  userId: string;

  name: string;
  currencyId: string;
  typeId: string;
  statusId: string;

  balance: number;

  metadata?: {
    cardLast4?: string;
    cardNetwork?: string;   // VISA, MasterCard, etc
    bankName?: string;
  };

  createdAt: Date;
}

const WalletSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", index: true },
    name: String,
    currencyId: { type: Schema.Types.ObjectId, ref: "Currency" },
    typeId: { type: Schema.Types.ObjectId, ref: "WalletType" },
    statusId: { type: Schema.Types.ObjectId, ref: "WalletStatus" },
    balance: Number,

    metadata: {
        cardLast4: String,
        cardNetwork: String,
        bankName: String,
    },

    createdAt: { type: Date, default: Date.now }
})