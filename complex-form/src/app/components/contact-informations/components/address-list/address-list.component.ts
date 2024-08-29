import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressStatusEnum } from 'src/app/enums/address-type.enum';
import { IAddressToDisplay } from 'src/app/interfaces/address-to-display.interface';
import { IAddress } from 'src/app/interfaces/user/address.interface';
import { AddressList } from 'src/app/types/address-list';
import { addressTypeDescriptionMap } from 'src/app/utils/address-type-description-map';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnChanges {

  addressListToDisplay: IAddressToDisplay[] = []
  @Input({ required: true })
  userAddressList: AddressList | undefined = [];

  ngOnChanges(changes: SimpleChanges): void {
    const ADDRESS_LIST_LOADED = Array.isArray(changes['userAddressList'].currentValue);

    if (ADDRESS_LIST_LOADED) {
      this.prepareAddressListToDisplay()
    }
  }

  prepareAddressListToDisplay() {
    this.addressListToDisplay = [];

    Object.keys(addressTypeDescriptionMap).map(Number).forEach((addressType: number) => {
      const addressFound = this.userAddressList?.find((userAddress) => userAddress.type === addressType);

      this.addressListToDisplay.push(this.returnAddressToDisplay(addressFound, addressType));
    });
  }

  returnAddressToDisplay(address: IAddress | undefined, addressType: number): IAddressToDisplay {
    if (!address) {
      return {
        typeDescription: addressTypeDescriptionMap[addressType as AddressStatusEnum],
        type: addressType,
        street: '_',
        complement: '_',
        country: '_',
        state: '_',
        city: '_'
      }
    }


    return {
      typeDescription: addressTypeDescriptionMap[addressType as AddressStatusEnum],
      ...address,
    }
  }
}
