import { PhoneList } from "src/app/types/phone-list";
import { IDependent } from "./dependent.interface";
import { AddressList } from "src/app/types/address-list";

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
    dependentsList: IDependent[],
}