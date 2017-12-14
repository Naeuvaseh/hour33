import { HoursOfOperation } from './hours-of-operation.interface'
import { Rating } from './rating.interface';

export interface SearchResult{
    vendorName: string,
    description: string,
    phone: string,
    hoursOfOperation: HoursOfOperation[],
    rating: Rating
}
