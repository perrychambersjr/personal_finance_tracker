import mongoose, { Document, Schema } from 'mongoose';

export interface IInvoiceItem extends Document {
  name: string;
  typeId: string;   // service, product, etc.
  quantity: number;
  amount: number;
}

const InvoiceItemSchema = new Schema({
  name: String,
  typeId: { type: Schema.Types.ObjectId, ref: "ItemType" },
  quantity: Number,
  amount: Number
});

export interface IInvoice extends Document {
  userId: string;

  clientId: string;
  date: Date;
  dueDate: Date;

  statusId: string;   // draft, paid, overdue...
  totalAmount: number;

  items: IInvoiceItem[];
  notes?: string;

  createdAt: Date;
}

const InvoiceSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", index: true },
  clientId: { type: Schema.Types.ObjectId, ref: "Client" },
  date: Date,
  dueDate: Date,

  statusId: { type: Schema.Types.ObjectId, ref: "InvoiceStatus" },
  totalAmount: Number,

  items: [InvoiceItemSchema],
  notes: String,

  createdAt: { type: Date, default: Date.now }
});

