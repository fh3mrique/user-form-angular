import { NgModule } from "@angular/core";
import { MaritalStatusPipe } from './marital-status.pipe';

@NgModule({
    declarations: [
    MaritalStatusPipe
  ],
    imports: [],
    exports: [MaritalStatusPipe]
})
export class PipesModule {

}