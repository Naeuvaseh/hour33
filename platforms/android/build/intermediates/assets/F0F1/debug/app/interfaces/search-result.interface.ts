import { HoursOfOperation } from './hours-of-operation.interface'

export interface SearchResult{
    vendorName: string,
    description: string,
    phone: string,
    hoursOfOperation: HoursOfOperation[]
}
