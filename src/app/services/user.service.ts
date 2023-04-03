import { Injectable } from "@angular/core";
import { User } from "../models/User";

@Injectable({
    providedIn: 'root'
})

export class UserService
{
    users: User[] = []

    login(username: string, password: string): boolean{
        return this.users.some(x => x.username == username && x.password == password)
    }

    userExist(username: string): boolean{
        return this.users.some(x => x.username == username)
    }
}