import { HoursOfOperation } from './hours-of-operation.interface'
import { Rating } from './rating.interface';

export interface Vendor {
    id: number,
    name: string,
    description: string,
    phone: string,
    hoursOfOperation: HoursOfOperation[],
    rating: Rating
}
