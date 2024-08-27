import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,
    private readonly _citiesService: CitiesService,
    private readonly _usersService: UsersService,
  ){}
  
  ngOnInit(){
    this._countriesService.getContries().subscribe((contriesResponse) => {
      console.log('contriesResponse', contriesResponse )
    });

    this._statesService.getStates('Brazil').subscribe((stateResponse)=>{
        console.log('stateResponse', stateResponse)
    })

    this._citiesService.getCities('Brazil', 'São Paulo').subscribe((citiesResponse) =>{
        console.log('getCities', citiesResponse)
    })

    this._usersService.getUsers().subscribe((usersListResponse)=>{
      console.log('getUsers', usersListResponse)
    })
  }
}
