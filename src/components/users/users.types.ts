import { Request } from 'express';

export interface User {
    _id?: string,
    name: string,
    email: string,
    password: string,
    verified: boolean,
    verifyToken: string,
    deleted: boolean,
}

export interface LoggedUser {
    userId: string,
    token: string,
    tokenExpires: number
}

export interface PostUserRequest extends Request {
    body: Partial<User>;
}





