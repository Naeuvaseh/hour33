import { Place, Viewport } from './index';
export declare function init(): void;
export declare function pickPlace(viewport: Viewport): Promise<Place>;
export declare function getPlacesById(ids: string[]): Promise<Place[]>;
export declare function getStaticMapUrl(place: Place, options: {
    width: number;
    height: number;
}): string;
export declare function getStaticMapUrlByAddress(address: string, options: {
    width: number;
    height: number;
}): string;
