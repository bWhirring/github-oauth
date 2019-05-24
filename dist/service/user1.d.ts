export interface IUser {
    email: string;
    name: string;
}
export declare class UserService {
    private userStorage;
    getUsers(): IUser[];
    getUser(id: string): IUser;
    newUser(user: IUser): IUser;
    updateUser(id: string, user: IUser): IUser;
    deleteUser(id: string): string;
}
