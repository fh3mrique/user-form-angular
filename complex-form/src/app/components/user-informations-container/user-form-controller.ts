import { inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IUser } from "src/app/interfaces/user/user.interface";

export class UserFormController {
    userForm!: FormGroup;

    private _fb = inject(FormBuilder);

    constructor() {
        this.createUserForm();
    }

    fullFillUserForm(user: IUser){
        this.fulFillGeneralInformations(user)
    }

    get generalInformations(): FormGroup{
        return this.userForm.get('generalInformations') as FormGroup;
    }

    private fulFillGeneralInformations(user: IUser){
        this.generalInformations.patchValue(user);

        console.log(this.userForm);
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformations: this._fb.group({
                name: ['', Validators.required],
                email: ['', Validators.required],
                county: ['', Validators.required],
                state: ['', Validators.required],
                maritalStatus: [null, Validators.required],
                monthlyIncome: [null, Validators.required],
                birthDate: [null, Validators.required],
            }),

            contactInformations: this._fb.group({
                phoneList: this._fb.array([]),
                addressList: this._fb.array([]),
            }),
            
            dependentsList: this._fb.array([]),
        })
    }
}