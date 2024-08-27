import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from "@angular/common";
import { GeneralInformationComponent } from './general-information/general-information.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';

@NgModule({
    declarations: [
    UsersListComponent,
    GeneralInformationComponent,
    UserInfoItemComponent,
  ],
    imports: [
        AngularMaterialModule,
        PipesModule,
        CommonModule
    ],
    exports: [
      UsersListComponent,
      GeneralInformationComponent,
    ],
})
export class ComponentsModule {

}