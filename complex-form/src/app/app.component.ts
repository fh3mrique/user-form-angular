import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService
  ){}
  
  ngOnInit(){
    this._countriesService.getContries().subscribe((contriesResponse) => {
      console.log('contriesResponse', contriesResponse )
    });

    this._statesService.getStates('Brazil').subscribe((stateResponse)=>{
        console.log('stateResponse', stateResponse)
    })

  }
}
