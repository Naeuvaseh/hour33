"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});
exports.registerNewUser = functions.auth.user().onCreate(event => {
    let user = event.data;
    return admin
        .database()
        .ref(`/users/${user.uid}/`)
        .set(user);
});
exports.removeDeletedUser = functions.auth.user().onDelete(event => {
    const user = event.data;
    return admin
        .database()
        .ref(`/users/${user.uid}/`)
        .remove();
});
//# sourceMappingURL=index.js.map