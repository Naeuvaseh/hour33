// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
// Firebase
const firebase = require("nativescript-plugin-firebase");
// Geolocation
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
// Google Places
import * as GooglePlaces from 'nativescript-plugin-google-places';

// Init Firebase API
firebase.init({
  onAuthStateChanged: function(user) { // optional but useful to immediately re-logon the user when he re-visits your app
    console.log(user.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
    if (user.loggedIn) {
      console.log("User Data: " + (JSON.stringify(user)));
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
