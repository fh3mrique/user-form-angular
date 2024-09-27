import { inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PhoneTypeEnum } from "src/app/enums/phone-type.enum";
import { IUser } from "src/app/interfaces/user/user.interface";
import { AddressList } from "src/app/types/address-list";
import { DependentsList } from "src/app/types/dependents-list";
import { PhoneList } from "src/app/types/phone-list";
import { convertPtBrDateToDateObj } from "src/app/utils/convert-pt-br-date-to-date-obj";
import { prepareAddressList } from "src/app/utils/prepare-address-list";
import { preparePhoneList } from "src/app/utils/prepare-phone-list";
import { requiredAddressValidator } from "src/app/utils/user-form-validators/required-address-validator";

export class UserFormController {
    userForm!: FormGroup;
    private emailPattern = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    private _fb = inject(FormBuilder);

    constructor() {
        this.createUserForm();
    }

    fullFillUserForm(user: IUser) {
        this.resetUserForm();

        this.fulFillGeneralInformations(user);

        this.fulFillPhoneList(user.phoneList);

        this.fulFillAddressList(user.addressList);

        this.fulFillDependentsList(user.dependentsList)

        console.log(this.userForm)
    }

    get generalInformations(): FormGroup {
        return this.userForm.get('generalInformations') as FormGroup;
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

    private fulFillGeneralInformations(user: IUser) {
        const newUser = {
            ...user,
            birthDate: convertPtBrDateToDateObj(user.birthDate)
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


    fulFillDependentsList(userDependentsList: DependentsList) {
        userDependentsList.forEach((dependent) => {
            this.dependentsList.push(this._fb.group({
                name: [dependent.name, Validators.required],
                age: [dependent.age, Validators.required],
                document: [dependent.document, Validators.required],
            }))
        })
    }

    removeDependent(dependentIndex: number) {
        this.dependentsList.removeAt(dependentIndex);
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
}