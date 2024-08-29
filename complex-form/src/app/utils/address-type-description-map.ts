import { AddressStatusEnum } from "../enums/address-type.enum";

export const addressTypeDescriptionMap: { [key in AddressStatusEnum]: string } = {
    [AddressStatusEnum.RESIDENTIAL]: 'Residencial',
    [AddressStatusEnum.WORK]: 'Trabalho',
    [AddressStatusEnum.ALTERNATIVE]: 'Alternativo',
  };