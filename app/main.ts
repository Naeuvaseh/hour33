// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { Debug } from './settings';
// Firebase
const firebase = require("nativescript-plugin-firebase");
// Geolocation
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
// Google Places
import * as GooglePlaces from 'nativescript-plugin-google-places';

// Init Firebase API
firebase.init({
  onAuthStateChanged: function(data) { 
    if(Debug.console.Firebase.email) console.log(data.loggedIn ? "Logged in to firebase: " + data.user.email : "Logged out from firebase");
    if (data.loggedIn && Debug.console.Firebase.fullUser) {
      console.log("User Data: " + (JSON.stringify(data)));
    }
  }
}).then(
  instance => {
    console.log("firebase.init done");
  },
  error => {
    console.log(`firebase.init error: ${error}`);
  }
);

// Init Location
geolocation.enableLocationRequest();

// Init Google Places API
// API Key: AIzaSyDbY1JhYKBsuzW80PFMjWa2Pg3QMveBNSM
GooglePlaces.init();

platformNativeScriptDynamic().bootstrapModule(AppModule);
