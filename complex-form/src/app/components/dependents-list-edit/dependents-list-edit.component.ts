import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dependents-list-edit',
  templateUrl: './dependents-list-edit.component.html',
  styleUrls: ['./dependents-list-edit.component.scss']
})
export class DependentsListEditComponent {
  @Input({ required: true }) userForm!: FormGroup;

  @Output('onRemoveDependent') onRemoveDependentEmitt = new EventEmitter<number>();
  @Output('onAddDependent') onAddDependentEmitt = new EventEmitter<void>();

  get dependentsList(): FormArray {
    return this.userForm.get('dependentsList') as FormArray;
  }

  removeDependent(dependentIndex: number) {
    this.onRemoveDependentEmitt.emit(dependentIndex);
  }

  addDependent(){
    this.onAddDependentEmitt.emit()
  }
}
