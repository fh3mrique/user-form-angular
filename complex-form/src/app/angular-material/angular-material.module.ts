import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatRadioModule, 
        MatDatepickerModule
    ], 
    
})
export class AngularMaterialModule {

}