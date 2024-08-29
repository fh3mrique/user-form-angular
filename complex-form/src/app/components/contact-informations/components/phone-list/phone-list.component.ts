import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneTypeEnum } from 'src/app/enums/phone-type.enum';
import { Iphone } from 'src/app/interfaces/user/phone.interface';
import { PhoneList } from 'src/app/types/phone-list';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnChanges {
  phoneListToDisplay: any[] = [];
  @Input({ required: true }) userPhoneList: PhoneList | undefined = []

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['userPhoneList'].currentValue);
    
    if (PHONE_LIST_LOADED){
      this.preparePhoneListToDisplay()
    }   
  }

  preparePhoneListToDisplay() {
    this.phoneListToDisplay = [];

    const phoneTypeDescriptionMap: {[key in PhoneTypeEnum]: string} = {
      [PhoneTypeEnum.RESIDENTIAL]: 'Residencial',
      [PhoneTypeEnum.MOBILE]: 'Celular',
      [PhoneTypeEnum.EMERGENCY]: 'Emergêncial',
    };

    Object.keys(phoneTypeDescriptionMap).map(Number).forEach((phoneType: number) => {
      const phoneFound = this.userPhoneList?.find((userPhone: Iphone) => userPhone.type === phoneType);

      this.phoneListToDisplay.push({
        type: phoneTypeDescriptionMap[phoneType as PhoneTypeEnum],
        phoneNumber: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
      })
    })

    console.log(this.phoneListToDisplay)
  }

  formatPhoneNumber(phone: Iphone) {
    
    return `${phone.internationalCode} ${phone.areaCode} ${phone.number}`;
  }

}
