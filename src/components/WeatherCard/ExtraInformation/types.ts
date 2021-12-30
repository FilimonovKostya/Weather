import {Dailies} from "../../../api/types";

export interface IExtraInformation {
    callBack: (value: boolean) => void
    week: Dailies[]
}