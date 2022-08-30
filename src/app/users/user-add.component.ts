import { Component } from "@angular/core";
import { User } from "./user";
import { UserService } from "./userService";

@Component({
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})

export class UserAddComponent {

    user: User = new User();
    
    imgUrl: string = "../assets/images/default-user-image.png";

    constructor(private userService: UserService) {}

    saveUser(): void {   
        this.userService.saveUser(this.user).subscribe({
            next: user => console.log('User added with success', user),
            error: err => console.log('Error', err)
        })
    }

    saveImageUrl(event: Event): void {
        this.user.imageUrl = ((<File>((event.target as HTMLInputElement).files as FileList)[0]) as File).webkitRelativePath;
    }
}