import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserListComponent } from "./user-list.component";

@NgModule({
    declarations: [
        UserListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'users', component: UserListComponent
            }
        ])
    ]
})

export class UserModule {}