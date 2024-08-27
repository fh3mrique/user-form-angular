import { Component, Input } from '@angular/core';
import { UsersListResponse } from 'src/app/types/users-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  @Input({required: true})
  usersList: UsersListResponse = [];

}
