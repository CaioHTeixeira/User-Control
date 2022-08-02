import { Component, OnInit } from "@angular/core";
import { User } from "./user";
import { UserService } from "./userService";

@Component({
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit{

    users: User[] = [];
    
    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.userService.retrieveAll().subscribe({
            next: users => this.users = users,
            error: err => console.log('Error', err)
        })
    }
    
    excludeUser(id: number) {
        this.userService.excludeUser(id).subscribe({
            next: user => {
                console.log('User removed with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
}

