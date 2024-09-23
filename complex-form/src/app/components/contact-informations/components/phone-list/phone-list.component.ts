import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IPhoneToDisplay } from 'src/app/interfaces/phone-to-display.interface';
import { PhoneList } from 'src/app/types/phone-list';
import { preparePhoneList } from 'src/app/utils/prepare-phone-list';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnChanges {
  phoneListToDisplay: IPhoneToDisplay[] = [];
  @Input({ required: true }) userPhoneList: PhoneList | undefined = []

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);

    if (PHONE_LIST_LOADED) {
      this.preparePhoneListToDisplay()
    }
  }

  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    const originalUserPhoneList = this.userPhoneList && this.userPhoneList.length > 0 ? this.userPhoneList : [];

    preparePhoneList(originalUserPhoneList, (phone) => {
      this.phoneListToDisplay.push(phone);
    })

    /* Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
      const phoneFound = this.userPhoneList?.find((userPhone: Iphone) => userPhone.type === phoneType);

      this.phoneListToDisplay.push({
        type: phoneTypeDescriptionMap[phoneType as PhoneTypeEnum],
        phoneNumber: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
      })
    }) */

    console.log(this.phoneListToDisplay)
  }
}
