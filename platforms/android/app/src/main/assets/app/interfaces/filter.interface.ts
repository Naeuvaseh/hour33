import { SearchMode } from '../enums/search-mode.enum';

export interface Filter {
    mode: SearchMode,
    searchText: string,
    distance: number
}