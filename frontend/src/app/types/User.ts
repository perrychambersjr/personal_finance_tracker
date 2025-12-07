export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash?: string;
    birthDate?: string;
    phoneNumber?: string;
    createdAt?: string;
    updatedAt?: string;
}