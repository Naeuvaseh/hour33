"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var functions = require("firebase-functions");
var admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
exports.registerNewUser = functions.auth.user().onCreate(function (event) {
    var user = event.data;
    return admin
        .database()
        .ref("/users/" + user.uid + "/")
        .set(user);
});
exports.removeDeletedUser = functions.auth.user().onDelete(function (event) {
    var user = event.data;
    return admin
        .database()
        .ref("/users/" + user.uid + "/")
        .remove();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFnRDtBQUNoRCxzQ0FBd0M7QUFFeEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakQsc0NBQXNDO0FBQ3RDLDJEQUEyRDtBQUM5QyxRQUFBLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFBLEtBQUs7SUFDakUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUV0QixNQUFNLENBQUMsS0FBSztTQUNULFFBQVEsRUFBRTtTQUNWLEdBQUcsQ0FBQyxZQUFVLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQztTQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBQSxLQUFLO0lBQ25FLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFeEIsTUFBTSxDQUFDLEtBQUs7U0FDVCxRQUFRLEVBQUU7U0FDVixHQUFHLENBQUMsWUFBVSxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUM7U0FDMUIsTUFBTSxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyBhZG1pbiBmcm9tIFwiZmlyZWJhc2UtYWRtaW5cIjtcblxuYWRtaW4uaW5pdGlhbGl6ZUFwcChmdW5jdGlvbnMuY29uZmlnKCkuZmlyZWJhc2UpO1xuXG4vLyAvLyBTdGFydCB3cml0aW5nIEZpcmViYXNlIEZ1bmN0aW9uc1xuLy8gLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvZnVuY3Rpb25zL3R5cGVzY3JpcHRcbmV4cG9ydCBjb25zdCByZWdpc3Rlck5ld1VzZXIgPSBmdW5jdGlvbnMuYXV0aC51c2VyKCkub25DcmVhdGUoZXZlbnQgPT4ge1xuICBsZXQgdXNlciA9IGV2ZW50LmRhdGE7XG5cbiAgcmV0dXJuIGFkbWluXG4gICAgLmRhdGFiYXNlKClcbiAgICAucmVmKGAvdXNlcnMvJHt1c2VyLnVpZH0vYClcbiAgICAuc2V0KHVzZXIpO1xufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVEZWxldGVkVXNlciA9IGZ1bmN0aW9ucy5hdXRoLnVzZXIoKS5vbkRlbGV0ZShldmVudCA9PiB7XG4gIGNvbnN0IHVzZXIgPSBldmVudC5kYXRhO1xuXG4gIHJldHVybiBhZG1pblxuICAgIC5kYXRhYmFzZSgpXG4gICAgLnJlZihgL3VzZXJzLyR7dXNlci51aWR9L2ApXG4gICAgLnJlbW92ZSgpO1xufSk7XG4iXX0=