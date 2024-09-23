import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { CountriesList } from 'src/app/types/countries-list';
import { StatesList } from 'src/app/types/states-list';
import { maritalStatusArray } from 'src/app/utils/marital-status-deescription-map';


@Component({
  selector: 'app-general-informations-edit',
  templateUrl: './general-informations-edit.component.html',
  styleUrls: ['./general-informations-edit.component.scss']
})
export class GeneralInformationsEditComponent implements OnInit, OnChanges {

  @Input({ required: true }) userForm!: FormGroup;
  @Input({ required: true }) countriesList: CountriesList = [];
  @Input({ required: true }) statesList: StatesList = [];

  @Output('onCountrySelected') onCountrySelectedEmitt = new EventEmitter<string>(); //nome do pais selecionado

  countriesListFiltred: CountriesList = [];
  statesListFiltred: StatesList = [];

  ngOnInit() {
    this.watchCountryFormChargesAndFilter();
    this.watchStateFormChargesAndFilter();
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.countriesListFiltred = this.countriesList;
    this.statesListFiltred = this.statesList;
  }

  get maritalStatusArray() {
    return maritalStatusArray;
  }

  get emailControl(): FormControl {
    return this.userForm.get('generalInformations.email') as FormControl
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformations.country') as FormControl
  }

  get stateControl(): FormControl {
    return this.userForm.get('generalInformations.state') as FormControl
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.onCountrySelectedEmitt.emit(event.option.value) //nome do pais selecionado
  }

  private watchCountryFormChargesAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this))
  }

  private filterCountriesList(searchTerm: string) {
    this.countriesListFiltred = this.countriesList.filter(
      (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )
  }

  private watchStateFormChargesAndFilter() {
    this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this))
  }

  private filterStatesList(searchTerm: string) {
    this.statesListFiltred = this.statesList.filter(
      (state) => state.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
    )
  }
}
