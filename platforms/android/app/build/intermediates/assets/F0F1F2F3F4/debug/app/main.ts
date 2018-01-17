// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
// import * as GooglePlaces from 'nativescript-plugin-google-places';
const firebase = require("nativescript-plugin-firebase");
 
// Init Firebase API
firebase.init({
  onAuthStateChanged: function(data) { // optional but useful to immediately re-logon the user when he re-visits your app
    console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
    if (data.loggedIn) {
      console.log("User's email address: " + (data.user.email ? data.user.email : "N/A"));
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
// Init Google Places API
// GooglePlaces.init();

platformNativeScriptDynamic().bootstrapModule(AppModule);
