export interface IuserForm {
    generalInformations: IGeneralInformations
    contactInformations: IContactInformations
    dependentsList: IUserFormDependent[]
}

export interface IGeneralInformations {
    name: string
    email: string
    country: string
    state: string
    maritalStatus: number
    monthlyIncome: number
    birthDate: Date;
}

export interface IContactInformations {
    phoneList: IUserFormPhone[]
    addressList: IUserFormAddress[]
}

export interface IUserFormPhone {
    type: number
    typeDescription: string
    Number: string
}

export interface IUserFormAddress {
    type: number
    typeDescription: string
    street: string
    complement: string
    country: string
    state: string
    city: string
}

export interface IUserFormDependent {
    name: string
    age: string
    document: string
}
