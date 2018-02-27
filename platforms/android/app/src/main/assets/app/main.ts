// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import { Debug } from './settings';
// Firebase
const firebase = require("nativescript-plugin-firebase");
import { Message } from "nativescript-plugin-firebase/firebase";
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
  },
  onPushTokenReceivedCallback: function(token) {
    console.log("Firebase push token: " + token);
  },
  onMessageReceivedCallback: (message: Message) => {
    console.log(`Title: ${message.title}`);
    console.log(`Body: ${message.body}`);
    // if your server passed a custom property called 'foo', then do this:
    console.log(`Value of 'foo': ${message.data.foo}`);
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
if (!geolocation.isEnabled) geolocation.enableLocationRequest();
// Init Google Places API
GooglePlaces.init();

platformNativeScriptDynamic().bootstrapModule(AppModule);
