import { IBaseCoutriesResponse } from "../base-countries-response.interface";
import { IStateResponseData } from "./state-response-data.interface";

export interface IStateResponse extends IBaseCoutriesResponse{
    data: IStateResponseData;
}


