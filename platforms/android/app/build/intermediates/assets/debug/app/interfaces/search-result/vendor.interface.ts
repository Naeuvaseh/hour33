export interface Vendor {  
    // Common attributes
    geometry: {  
       location: {  
          lat: number,
          lng: number
       },
       viewport: {  
          northeast: {  
             lat:number,
             lng:number
          },
          southwest:{  
             lat:number,
             lng:number
          }
       }
    },
    icon: string,
    id: string,
    name: string,
    opening_hours:{  
       open_now: boolean,
       weekday_text: string[]
    },
    photos:[  
       {  
          height: number,
          html_attributions: string[],
          photo_reference: string,
          width: number
       }
    ],
    place_id: string,
    rating: number,
    reference: string
    types: string[],
    vicinity: string,
    //Text Search-specific
    formatted_address?: string,
    price_level?: number
    // Nearby-specific
    scope?: string,
 }