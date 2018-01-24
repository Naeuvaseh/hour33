export interface TextSearchVendor {
    formatted_address: string,
    geometry:{  
        location:{  
            lat: number,
            lng: number
        },
        viewport:{  
            northeast:{  
                lat: number,
                lng: number
            },
            southwest:{  
                lat:39.1509552697085,
                lng:-76.7274365802915
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
    price_level: number,
    rating: number,
    reference: string,
    types: string[]
}