import { PhoneTypeEnum } from "../enums/phone-type.enum";
import { Iphone } from "../interfaces/user/phone.interface";
import { PhoneList } from "../types/phone-list";
import { phoneTypeDescriptionMap } from "./phone-type-description-map";

export const preparePhoneList = (originalPhoneList: PhoneList, isDisplayPhone: boolean, callback: (phone: { type: number; typeDescription: string; phoneNumber: string; }) => void) => {
    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
        const phoneFound = originalPhoneList.find((userPhone: Iphone) => userPhone.type === phoneType);

        let phoneNumber = '';

        if (isDisplayPhone) {
            phoneNumber = phoneFound ? formatPhoneNumberToDiplay(phoneFound) : "-";
        } else {
            phoneNumber = phoneFound ? formatPhoneNumberToEdit(phoneFound) : '';
        }
        callback({
            type: phoneType,
            typeDescription: phoneTypeDescriptionMap[phoneType as PhoneTypeEnum],
            phoneNumber: phoneNumber
        });
    })
}

const formatPhoneNumberToDiplay = (phone: Iphone) => {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
}
const formatPhoneNumberToEdit = (phone: Iphone) => {
    return `${phone.internationalCode}${phone.areaCode}${phone.number}`.replace(/[+\-]/g, '');
}
