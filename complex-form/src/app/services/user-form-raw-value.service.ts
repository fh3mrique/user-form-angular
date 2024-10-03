import { Injectable } from "@angular/core";
import { IuserForm } from "../interfaces/user-form.interface";

@Injectable({
    providedIn: "root"
})
export class UserFormRawValueService {
    userFormRawValue: IuserForm = {} as IuserForm;
}