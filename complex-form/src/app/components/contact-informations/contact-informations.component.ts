import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-contact-informations',
  templateUrl: './contact-informations.component.html',
  styleUrls: ['./contact-informations.component.scss']
})
export class ContactInformationsComponent {
    @Input({required: true}) user: IUser | undefined = {} as IUser;
}
