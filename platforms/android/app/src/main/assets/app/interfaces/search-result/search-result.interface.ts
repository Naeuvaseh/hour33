import { Vendor } from './vendor.interface';

export interface SearchResult {
    html_attributions: string[],
    next_page_token: string | null,
    results: Array<Vendor>,
    status: string
}