import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from 'src/app/services/countries.service';
import { take } from 'rxjs';
import { CountriesList } from 'src/app/types/countries-list';

@Component({
  selector: 'app-user-informations-container',
  templateUrl: './user-informations-container.component.html',
  styleUrls: ['./user-informations-container.component.scss']
})
export class UserInformationsContainerComponent extends UserFormController implements OnChanges, OnInit {
  currentTabIndex: number = 0;

  countriesList: CountriesList = [];

  private readonly _countriesService = inject(CountriesService);


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
    }
  }

  private getCountriesList() {
    this._countriesService.getContries().pipe(take(1)).subscribe((countriesList : CountriesList) => {
      this.countriesList = countriesList;
    } );
  }
}
