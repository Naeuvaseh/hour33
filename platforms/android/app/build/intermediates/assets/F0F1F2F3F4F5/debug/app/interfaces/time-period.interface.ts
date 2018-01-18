import { Day } from '../enums/day.enum';

export interface TimePeriod {
    day: Day,
    open: Date,
    close: Date,
    holiday: boolean
}