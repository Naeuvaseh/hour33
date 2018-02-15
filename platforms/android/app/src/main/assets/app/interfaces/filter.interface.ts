import { VendorType } from '../enums/vendor-type.enum';

export interface Filter {
    distance: number,
    keyword?: string, 
    vendorType?: VendorType
}