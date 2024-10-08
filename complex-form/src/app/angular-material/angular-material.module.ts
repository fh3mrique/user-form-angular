import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE, NativeDateAdapter } from "@angular/material/core";
import { MatIconModule } from '@angular/material/icon';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatButtonModule, 
        MatDialogModule
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatDatepickerModule,
        MatIconModule,
        MatButtonModule, 
        MatDialogModule
    ],
    providers: [
        NativeDateAdapter,
        { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
    ]

})
export class AngularMaterialModule {

}