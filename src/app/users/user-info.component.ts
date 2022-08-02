import { Component, OnInit } from "@angular/core";
import { UserService } from "./userService";
import { ActivatedRoute } from "@angular/router";
import { User } from "./user";

@Component({
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit{

    user: User = new User;

    constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.retrieveUserById();
    }

    retrieveUserById(): void {
        const id: number = this.activatedRoute.snapshot.paramMap.get("id") ? 
            Number(this.activatedRoute.snapshot.paramMap.get("id")) : -1;

        this.userService.retrieveUserById(id).subscribe({
            next: user => this.user = user,
            error: err => console.log('Error', err)
        });
    }

    editUser(user: User): void {
        this.userService.editUser(user).subscribe({
            next: user => console.log('Edited with success', user),
            error: err => console.log('Error', err)
        })
    }
}