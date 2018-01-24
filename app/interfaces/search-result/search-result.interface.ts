import { NearbySearchVendor } from '../search-result/nearby-search/nearby-search-vendor.interface';
import { TextSearchVendor } from '../search-result/text-search/text-search-vendor.interface';

export interface SearchResult {
    html_attributions: string[],
    next_page_token: string | null,
    results: Array<NearbySearchVendor | TextSearchVendor>,
    status: string
}