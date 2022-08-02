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

    retrieveUserById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.userUrl}/${id}`);
    }
    
    editUser(user: User): Observable<User> {
        return this.httpClient.put<User>(`${this.userUrl}/${user.id}`, user);
    }

    excludeUser(id: number): Observable<any> {
        return this.httpClient.delete<any>(`${this.userUrl}/${id}`);
    }

    saveUser(user: User): Observable<User> {
        return this.httpClient.post<User>(`${this.userUrl}`, user);
    }
}