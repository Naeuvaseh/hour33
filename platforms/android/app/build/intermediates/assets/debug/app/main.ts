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

firebase.admob.showBanner({
  size: firebase.admob.AD_SIZE.SMART_BANNER, // see firebase.admob.AD_SIZE for all options
  margins: { // optional nr of device independent pixels from the top or bottom (don't set both)
    bottom: 10,
    top: 0
  },
  androidBannerId: "ca-app-pub-7969618441217720/9053703415",
  testing: true, // when not running in production set this to true, Google doesn't like it any other way
  // iosTestDeviceIds: [ //Android automatically adds the connected device as test device with testing:true, iOS does not
  //     "45d77bf513dfabc2949ba053da83c0c7b7e87715", // Eddy's iPhone 6s
  //     "fee4cf319a242eab4701543e4c16db89c722731f"  // Eddy's iPad Pro
  // ]
}).then(
    function () {
      console.log("AdMob banner showing");
    },
    function (errorMessage) {
      alert({
        title: "AdMob error",
        message: errorMessage,
        okButtonText: "Hmmkay"
      });
    }
);

// Init Location
if (!geolocation.isEnabled) geolocation.enableLocationRequest();
// Init Google Places API
GooglePlaces.init();

platformNativeScriptDynamic().bootstrapModule(AppModule);
