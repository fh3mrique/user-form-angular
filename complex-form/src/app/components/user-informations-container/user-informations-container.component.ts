import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from 'src/app/services/countries.service';
import { take } from 'rxjs';
import { CountriesList } from 'src/app/types/countries-list';
import { StatesService } from 'src/app/services/states.service';
import { StatesList } from 'src/app/types/states-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrls: ['./user-informations-container.component.scss']
})
export class UserInformationsContainerComponent extends UserFormController implements OnChanges, OnInit {
  currentTabIndex: number = 0;

  countriesList: CountriesList = [];
  statesList: StatesList = [];

  private readonly _countriesService = inject(CountriesService);
  private readonly _statesService = inject(StatesService);


  @Input({ required: true }) userSelected: IUser = {} as IUser;

  @Input({ required: true }) isInEditMode: boolean = false;

  ngOnInit(): void {
    this.getCountriesList()
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentTabIndex = 0;

    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0;

    if (HAS_USER_SELECTED) {

      this.fullFillUserForm(this.userSelected);
      this.getStatesList(this.userSelected.country);
    }
  }

  private getCountriesList() {
    this._countriesService.getContries().pipe(take(1)).subscribe((countriesList: CountriesList) => {
      this.countriesList = countriesList;
    });
  }

  getStatesList(country: string) {
    this._statesService.getStates(country).pipe(take(1)).subscribe((statesList: StatesList) => {
      this.statesList = statesList
    })
  }

  onCountrySelected(countryName: string) {
    this.getStatesList(countryName);
  }

}
