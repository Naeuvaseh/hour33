import { TimePeriod } from './time-period.interface';
import { Rating } from './rating.interface';

export interface Vendor {
    id: number,
    name: string,
    description: string,
    phone: string,
    hoursOfOperation?: TimePeriod[],
    happyHours?: TimePeriod[],
    rating: Rating,
    website?: string
}
