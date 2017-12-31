import { Day } from '../enums/day.enum';

export interface TimePeriod {
    day: Day,
    open: string,
    close: string,
    holiday: boolean
}