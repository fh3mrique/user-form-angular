import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhoneTypeEnum } from "src/app/enums/phone-type.enum";
import { IDependent } from "src/app/interfaces/user/dependent.interface";
import { IUser } from "src/app/interfaces/user/user.interface";
import { UserFormRawValueService } from "src/app/services/user-form-raw-value.service";
import { AddressList } from "src/app/types/address-list";
import { DependentsList } from "src/app/types/dependents-list";
import { PhoneList } from "src/app/types/phone-list";
import { convertPtBrDateToDateObj } from "src/app/utils/convert-pt-br-date-to-date-obj";
import { prepareAddressList } from "src/app/utils/prepare-address-list";
import { preparePhoneList } from "src/app/utils/prepare-phone-list";
import { requiredAddressValidator } from "src/app/utils/user-form-validators/required-address-validator";

export class UserFormController {
    userForm!: FormGroup;
    private emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    private readonly _fb = inject(FormBuilder);
    private readonly _userFormRawValueService = inject(UserFormRawValueService);

    constructor() {
        this.createUserForm();

        this.watchUserFormValueChangesAndUpdateService();
    }
    

    fullFillUserForm(user: IUser) {
        this.resetUserForm();

        this.fulFillGeneralInformations(user);

        this.fulFillPhoneList(user.phoneList);

        this.fulFillAddressList(user.addressList);

        this.fulFillDependentsList(user.dependentsList)

        this.userForm.markAllAsTouched();
        this.userForm.updateValueAndValidity();
        
        console.log(this.userForm)
    }

    removeDependent(dependentIndex: number) {
        this.dependentsList.removeAt(dependentIndex);
        this.dependentsList.markAsDirty();
    }
    
    addDependent() {
        this.dependentsList.push(this.createDependentGroup());
        this.dependentsList.markAsDirty();
    }

    get generalInformations(): FormGroup {
        return this.userForm.get('generalInformations') as FormGroup;
    }

    get contactInformations(): FormGroup {
        return this.userForm.get('contactInformations') as FormGroup;
    }

    get phonelist(): FormArray {
        return this.userForm.get('contactInformations.phoneList') as FormArray;
    }

    get addressList(): FormArray {
        return this.userForm.get('contactInformations.addressList') as FormArray;
    }

    get dependentsList(): FormArray {
        return this.userForm.get('dependentsList') as FormArray;
    }

    get generalInformationsValid(): boolean {
        return this.generalInformations.valid;
    }

    get contactInformationsValid(): boolean {
        return this.contactInformations.valid;
    }

    get dependentsListValid(): boolean {
        return this.dependentsList.valid;
    }

    private fulFillGeneralInformations(user: IUser) {
        const newUser = {
            ...user,
            birthDate: convertPtBrDateToDateObj(user.birthDate),
        };

        this.generalInformations.patchValue(newUser);
    }

    private fulFillPhoneList(userPhoneList: PhoneList) {
        preparePhoneList(userPhoneList, false, (phone) => {
            const phoneValidators = phone.type === PhoneTypeEnum.EMERGENCY ? [] : [Validators.required];
            this.phonelist.push(this._fb.group({
                type: [phone.type],
                typeDescription: [phone.typeDescription],
                Number: [phone.phoneNumber, phoneValidators],
            }))

        })
        /*   userPhoneList.forEach((phone) => {
              this.phonelist.push(this._fb.group({
                  type: [phone.type, Validators.required],
                  areaCode: [phone.areaCode, Validators.required],
                  internationalCode: [phone.internationalCode, Validators.required],
                  number: [phone.number, Validators.required],
              }))
          }) */
    }


    private fulFillAddressList(userAddressList: AddressList) {
        prepareAddressList(userAddressList, false, (address) => {
            this.addressList.push(this._fb.group({
                type: [address.type],
                typeDescription: [{ value: address.typeDescription, disabled: true }],
                street: [address.street],
                complement: [address.complement],
                country: [address.country],
                state: [address.state],
                city: [address.city],
            }, {
                validators: requiredAddressValidator
            }));
        });

        console.log('addressList', this.addressList);
    }

    private createDependentGroup(dependent: IDependent | null = null) {
        if (!dependent) {
            this._fb.group({
                name: ['', Validators.required],
                age: ['', Validators.required],
                document: ['', Validators.required],
            });
        }

        return this._fb.group({
            name: [dependent?.name, Validators.required],
            age: [dependent?.age.toString(), Validators.required],
            document: [dependent?.document.toString(), Validators.required],
        })
    }


    private fulFillDependentsList(userDependentsList: DependentsList) {
        userDependentsList.forEach((dependent) => {
            this.dependentsList.push(this.createDependentGroup(dependent));
        })
    }

    private resetUserForm() {
        this.userForm.reset();

        this.generalInformations.reset();

        this.phonelist.reset();
        this.phonelist.clear();


        this.addressList.reset();
        this.addressList.clear();

        this.dependentsList.reset();
        this.dependentsList.clear();
    }

    private createUserForm() {
        this.userForm = this._fb.group({
            generalInformations: this._fb.group({
                name: ['', Validators.required],
                email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
                country: ['', Validators.required],
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

    private watchUserFormValueChangesAndUpdateService() {
        this.userForm.valueChanges.subscribe(() => 
            this._userFormRawValueService.userFormRawValue = this.userForm.getRawValue());
    }
}