import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IAddressToDisplay } from 'src/app/interfaces/address-to-display.interface';
import { AddressList } from 'src/app/types/address-list';
import { prepareAddressList } from 'src/app/utils/prepare-address-list';

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

    const originalAddressList = this.userAddressList && this.userAddressList.length > 0 ? this.userAddressList : [];

    prepareAddressList(originalAddressList, true, (address) => {
      this.addressListToDisplay.push(address);
    })
  }

}
