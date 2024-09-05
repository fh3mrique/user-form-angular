import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrls: ['./user-informations-container.component.scss']
})
export class UserInformationsContainerComponent implements OnChanges {
  currentTabIndex:number = 2;

  @Input({required: true}) userSelected: IUser = {} as IUser;

  @Input({required: true}) isInEditMode: boolean = false;

  ngOnChanges(_: SimpleChanges) {
    this.currentTabIndex = 0;
  }
}
