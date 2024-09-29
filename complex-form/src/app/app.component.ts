import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  usersList: UsersListResponse = [];

  userSelectedIndex: number | undefined;
  userSelected: IUser = {} as IUser;

  isInEditMode: boolean = false;

  enableSaveButton: boolean = false;

  userFormUpdated: boolean = false;

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService,
  ) { }

  ngOnInit() {
    this._countriesService.getContries().subscribe((contriesResponse) => {
      console.log('contriesResponse', contriesResponse)
    });

    this._statesService.getStates('Brazil').subscribe((stateResponse) => {
      console.log('stateResponse', stateResponse)
    })

    this._citiesService.getCities('Brazil', 'São Paulo').subscribe((citiesResponse) => {
      console.log('getCities', citiesResponse)
    })

    this._usersService.getUsers().pipe(take(1)).subscribe((usersListResponse) => {
      this.usersList = usersListResponse
    })
  }

  onUserSelected(userIndex: number) {

    const userFound = this.usersList[userIndex];

    if (userFound) {
      this.userSelectedIndex = userIndex;
      this.userSelected = structuredClone(userFound)
    }
  }

  onEditButton() {
    this.isInEditMode = true;
  }

  onCancelButton() {
    this.isInEditMode = false;
  }

  onFormStatusChange(formStatus: boolean) {
    setTimeout(() => this.enableSaveButton = formStatus, 0)
  }

  onUserFormFirstChange() {
    console.log('onUserFormFirstChange');
    this.userFormUpdated = true;
  }

}
