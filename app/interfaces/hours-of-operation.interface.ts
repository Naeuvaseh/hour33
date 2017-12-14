import { Day } from '../enums/day.enum';

export interface HoursOfOperation{
    day: Day,
    open: string,
    close: string,
    holiday: boolean
}