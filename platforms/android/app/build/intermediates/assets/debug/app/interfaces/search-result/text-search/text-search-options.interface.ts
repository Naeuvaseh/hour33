import { Radius } from "../../../enums/radius.enum";
import { Price } from "../../../enums/price.enum";
import { VendorType } from "../../../enums/vendor-type.enum";

export interface TextSearchOptions {
    radius?: Radius,
    minPrice?: Price,
    maxPrice?: Price,
    type?: VendorType
}