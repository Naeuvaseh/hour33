import { AddressComponents } from './address-components.interface';
import { Reviews } from './reviews.interface';
import { Period } from '../../period.interface';

export interface VendorDetail {
    html_attributions: string[],
    result: {
       address_components: AddressComponents[],
       adr_address: string,
       formatted_address: string,
       formatted_phone_number: string,
       geometry: {
          location: {
             lat: number,
             lng: number
          },
          viewport: {
             northeast: {
                lat: number,
                lng: number
             },
             southwest: {
                lat: number,
                lng: number
             }
          }
       },
       icon: string,
       id: string,
       international_phone_number: string,
       name: string,
       place_id: string,
       rating: number,
       reference: string,
       reviews: Reviews[],
       scope: string,
       types: string[],
       url: string,
       utc_offset: number,
       vicinity: string,
       website: string,
       opening_hours?:{
           open_now?: boolean,
           periods?: Array<Period>
       }
    },
    status: string
 }