import { Component, Input } from '@angular/core';
import { AddressList } from 'src/app/types/address-list';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent {
  @Input({ required: true })
  userAddressList: AddressList | undefined = [];
}
