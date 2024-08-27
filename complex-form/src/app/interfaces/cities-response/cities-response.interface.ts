import { CitiesList } from "src/app/types/cities-list";
import { IBaseCoutriesResponse } from "../base-countries-response.interface";

export interface ICitiesResponse extends IBaseCoutriesResponse{
    data: CitiesList;
} 