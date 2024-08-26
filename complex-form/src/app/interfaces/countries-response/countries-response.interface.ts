import { CountriesList } from "src/app/types/countries-list";
import { IBaseCoutriesResponse } from "../base-countries-response.interface";

export interface ICountriesResponse extends IBaseCoutriesResponse{
    data: CountriesList;

}