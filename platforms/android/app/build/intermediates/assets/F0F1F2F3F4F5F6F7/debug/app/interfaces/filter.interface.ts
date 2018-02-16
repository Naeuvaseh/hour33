import { VendorType } from '../enums/vendor-type.enum';
import { DistPop } from '../enums/distance-popularity.enum'

export interface Filter {
    distance: number,
    keyword?: string, 
    vendorType?: VendorType,
    minPrice?: number,
    maxPrice?: number,
    distPop: DistPop // For searching by distance or by popularity
}