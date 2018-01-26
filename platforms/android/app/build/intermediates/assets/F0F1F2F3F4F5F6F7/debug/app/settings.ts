export const Theme ={
    // Red
    accentColor: '#d50000',
    // Teal
    // accentColor: '#4CCAFF',
    primaryColor: '#212121',
    lightGrey: '#6d6d6d',
    darkGrey: '#3D3638',
    pageBackgroundColor: '#1b1819',
    actionBarTextColor: '#FFF',
    inactiveColor: '#FFF',
   // greenColor: '#3cba54',
    greenColor: '#00C800',
   // yellowColor: '#f4c20d',    
    yellowColor: '#FAE300'
}

export const GooglePlacesAPIKey = "AIzaSyDbY1JhYKBsuzW80PFMjWa2Pg3QMveBNSM";

export const Debug = {
    console: {
        // APIs
        Firebase: {
            fullUser: false,
            email: true
        },
        Geolocation: {
            init: true
        },
        // Services
        GoogleLocation: {
            url: true,
            data: false,
            error: true
        },
        Vendor: true,
        // Components
        AppComponent: true,
        // Pipes
        CurrentDayPipe: false
    },
    display: {
        SearchComponent: false
    },
    fps: false,
    backgroundColor: false
}
