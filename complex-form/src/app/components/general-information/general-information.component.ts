import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrls: ['./general-information.component.scss']
})
export class GeneralInformationComponent {
  @Input({required: true})
  user: IUser | undefined = {} as IUser ;
}
