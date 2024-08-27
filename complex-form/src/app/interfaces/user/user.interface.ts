import { IAddress } from "./address.interface";
import { IDependent } from "./dependent.interface";
import { Iphone } from "./phone.interface";

export interface IUser {
    name: string,
    email: string,
    country: string,
    state: string,
    maritalStatus: number,
    monthlyIncome: number,
    birthDate: string,
    phoneList: Iphone[],
    addressList: IAddress[],
    dependentsList: IDependent[],
}