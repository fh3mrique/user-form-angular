import { Component, Input } from '@angular/core';
import { DependentsList } from 'src/app/types/dependents-list';

@Component({
  selector: 'app-dependents-list',
  templateUrl: './dependents-list.component.html',
  styleUrls: ['./dependents-list.component.scss']
})
export class DependentsListComponent {
  @Input({ required: true })
  dependentsList: DependentsList | undefined = [];

}
