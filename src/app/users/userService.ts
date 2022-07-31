import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable()
export class UserService {
    
    private userUrl: string = 'http://localhost:3100/api/users';

    constructor(private httpClient: HttpClient) {}

    retrieveAll(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.userUrl);
    }
    
}