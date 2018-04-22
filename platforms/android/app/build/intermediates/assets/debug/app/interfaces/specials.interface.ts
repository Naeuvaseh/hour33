import { TimePeriod } from './time-period.interface';
import { Rating } from './rating.interface';

export interface Specials {
    id: number,
    name: string,
    description: string,
    phone: string,
    hoursOfOperation?: TimePeriod[],
    rating: Rating
    
}
