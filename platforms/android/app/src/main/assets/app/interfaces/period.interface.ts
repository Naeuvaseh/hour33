import { Day } from '../enums/day.enum';

export interface Period {
    close: {
        day: Day,
        time: string
    },
    open: {
        day: Day,
        time: string
    }
}