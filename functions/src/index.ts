import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
export const registerNewUser = functions.auth.user().onCreate(event => {
  let user = event.data;

  return admin
    .database()
    .ref(`/users/${user.uid}/`)
    .set(user);
});

export const removeDeletedUser = functions.auth.user().onDelete(event => {
  const user = event.data;

  return admin
    .database()
    .ref(`/users/${user.uid}/`)
    .remove();
});
