import { IUser, UserService } from "../service/user1";
import { Request } from "express";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): IUser[];
    getName(): string;
    getUser(request: Request): IUser;
    newUser(request: Request): IUser;
    updateUser(request: Request): IUser;
    deleteUser(request: Request): string;
}
