export interface Goal {
    id: string;
    userId: string;
    title: string;
    targetAmount: number;
    currentAmount: number;
    dueDate?: string;
    note?: string;
    category?: string;
    createdAt?: string;
    updatedAt?: string;
}