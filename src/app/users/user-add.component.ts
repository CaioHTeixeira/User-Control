import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./userService";

@Component({
    templateUrl: './user-add.component.html'
})

export class UserAddComponent {

    user: User = new User();
    
    constructor(private userService: UserService) {}

    saveUser(): void {
        this.userService.saveUser(this.user).subscribe({
            next: user => console.log('User added with success', user),
            error: err => console.log('Error', err)
        })
    }
}