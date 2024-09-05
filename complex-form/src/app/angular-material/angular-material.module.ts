import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule
    ]
})
export class AngularMaterialModule {

}