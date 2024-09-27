import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersListResponse } from 'src/app/types/users-list-response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  userSelectedIndex: number | undefined;

  @Input({ required: true })
  usersList: UsersListResponse = [];

  @Input({ required: true })
  isInEditMode: boolean = false;

  @Output('onUserSelected') onUserSelectedEmitt = new EventEmitter<number>()

  onUserSelected(userIndex: number) {
    if(this.isInEditMode) return;
    
    this.userSelectedIndex = userIndex

    /* Quem implementar esse componente vai receber do usuário selecionado */
    this.onUserSelectedEmitt.emit(userIndex)
  }

}
