import { Component, Input } from '@angular/core';
import { PhoneList } from 'src/app/types/phone-list';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent {
  @Input({required: true}) userPhoneList: PhoneList | undefined = []
}
