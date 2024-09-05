import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrls: ['./user-informations-container.component.scss']
})
export class UserInformationsContainerComponent extends UserFormController implements OnChanges {
  currentTabIndex: number = 2;

  @Input({ required: true }) userSelected: IUser = {} as IUser;

  @Input({ required: true }) isInEditMode: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {

      this.fullFillUserForm(this.userSelected);
    }
  }
}
