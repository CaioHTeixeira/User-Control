import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserAddComponent } from "./user-add.component";
import { UserInfoComponent } from "./user-info.component";
import { UserListComponent } from "./user-list.component";

@NgModule({
    declarations: [
        UserListComponent,
        UserInfoComponent,
        UserAddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'users', component: UserListComponent,
            },
            { //pq dá erro no infoComponent se colocar o path:'users/add' no final da rota dos filhos?
                path: 'users/add', component: UserAddComponent 
            },
            {
                path: 'users/:id', component: UserInfoComponent
            }
        ])
    ]
})

export class UserModule {}