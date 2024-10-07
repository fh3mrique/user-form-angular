import { IuserForm, IUserFormAddress, IUserFormDependent, IUserFormGeneralInformations, IUserFormPhone } from "../interfaces/user-form.interface";
import { IUser } from "../interfaces/user/user.interface";
import { AddressList } from "../types/address-list";
import { DependentsList } from "../types/dependents-list";
import { PhoneList } from "../types/phone-list";
import { convertDateObjToPtBrDate } from "./convert-date-obj-to-pt-br-date";

export const convertUserFormToUser = (userForm: IuserForm): IUser => {
    let newUser: Partial<IUser> = {} as IUser;

    newUser = { ...convertGeneralInformations(userForm.generalInformations) };
    newUser.phoneList = { ...convertPhoneList(userForm.contactInformations.phoneList) };
    newUser.addressList = { ...convertAdressList(userForm.contactInformations.addressList) };
    newUser.dependentsList = { ...convertDependentsList(userForm.dependentsList) };

    return newUser as IUser;
};

const convertGeneralInformations = (generalInformations: IUserFormGeneralInformations): Partial<IUser> => {
    return {
        name: generalInformations.name,
        email: generalInformations.email,
        country: generalInformations.country,
        state: generalInformations.state,
        maritalStatus: generalInformations.maritalStatus,
        monthlyIncome: generalInformations.monthlyIncome,
        birthDate: convertDateObjToPtBrDate(generalInformations.birthDate)
    }
};

const convertPhoneList = (phoneList: IUserFormPhone[]): PhoneList => {
    const newUserPhoneList: PhoneList = phoneList.map((phone) => ({
        type: phone.type,
        internationalCode: phone.Number.substring(0, 2),
        areaCode: phone.Number.substring(2, 4),
        number: phone.Number.substring(4),
    }));

    return newUserPhoneList;
};

const convertAdressList = (addressList: IUserFormAddress[]): AddressList => {
    const newUserAdressList: AddressList = addressList.map((address) => ({
        type: address.type,
        street: address.street,
        complement: address.complement,
        city: address.city,
        state: address.state,
        country: address.country
    }));

    return newUserAdressList;
};

const convertDependentsList = (dependentsList: IUserFormDependent[]): DependentsList => {
    const newUserDependentsList: DependentsList = dependentsList.map((dependent) => ({
        name: dependent.name,
        age: Number(dependent.age),
        document: Number(dependent.document),
    }))

    return newUserDependentsList;
};