import { PhoneList } from "src/app/types/phone-list";
import { AddressList } from "src/app/types/address-list";
import { DependentsList } from "src/app/types/dependents-list";

export interface IUser {
    name: string,
    email: string,
    country: string,
    state: string,
    maritalStatus: number,
    monthlyIncome: number,
    birthDate: string,
    phoneList: PhoneList,
    addressList: AddressList,
    dependentsList: DependentsList,
}