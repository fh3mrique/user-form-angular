import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from "@angular/common";
import { GeneralInformationComponent } from './general-information/general-information.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { ContactInformationsComponent } from './contact-informations/contact-informations.component';
import { PhoneListComponent } from './contact-informations/components/phone-list/phone-list.component';

@NgModule({
    declarations: [
    UsersListComponent,
    GeneralInformationComponent,
    UserInfoItemComponent,
    ContactInformationsComponent,
    PhoneListComponent,
  ],
    imports: [
        AngularMaterialModule,
        PipesModule,
        CommonModule
    ],
    exports: [
      UsersListComponent,
      GeneralInformationComponent,
      ContactInformationsComponent
    ],
})
export class ComponentsModule {

}