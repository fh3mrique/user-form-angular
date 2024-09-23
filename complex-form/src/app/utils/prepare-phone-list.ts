import { PhoneTypeEnum } from "../enums/phone-type.enum";
import { Iphone } from "../interfaces/user/phone.interface";
import { PhoneList } from "../types/phone-list";
import { phoneTypeDescriptionMap } from "./phone-type-description-map";

export const preparePhoneList = (originalPhoneList: PhoneList, callback: (phone: {type: number; typeDescription: string; phoneNumber: string;}) => void) => {
    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
        const phoneFound = originalPhoneList.find((userPhone: Iphone) => userPhone.type === phoneType);

        callback({
            type: phoneType,
            typeDescription: phoneTypeDescriptionMap[phoneType as PhoneTypeEnum],
            phoneNumber: phoneFound ? formatPhoneNumber(phoneFound) : "-",
        });
    })
}

const formatPhoneNumber = (phone: Iphone) => {
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
}
