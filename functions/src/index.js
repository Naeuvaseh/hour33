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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUFnRDtBQUNoRCxzQ0FBd0M7QUFFeEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakQsc0NBQXNDO0FBQ3RDLDJEQUEyRDtBQUM5QyxRQUFBLGVBQWUsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFBLEtBQUs7SUFDakUsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUV0QixNQUFNLENBQUMsS0FBSztTQUNULFFBQVEsRUFBRTtTQUNWLEdBQUcsQ0FBQyxZQUFVLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQztTQUMxQixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBQSxLQUFLO0lBQ25FLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFeEIsTUFBTSxDQUFDLEtBQUs7U0FDVCxRQUFRLEVBQUU7U0FDVixHQUFHLENBQUMsWUFBVSxJQUFJLENBQUMsR0FBRyxNQUFHLENBQUM7U0FDMUIsTUFBTSxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZ1bmN0aW9ucyBmcm9tIFwiZmlyZWJhc2UtZnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIGFkbWluIGZyb20gXCJmaXJlYmFzZS1hZG1pblwiO1xyXG5cclxuYWRtaW4uaW5pdGlhbGl6ZUFwcChmdW5jdGlvbnMuY29uZmlnKCkuZmlyZWJhc2UpO1xyXG5cclxuLy8gLy8gU3RhcnQgd3JpdGluZyBGaXJlYmFzZSBGdW5jdGlvbnNcclxuLy8gLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvZnVuY3Rpb25zL3R5cGVzY3JpcHRcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyTmV3VXNlciA9IGZ1bmN0aW9ucy5hdXRoLnVzZXIoKS5vbkNyZWF0ZShldmVudCA9PiB7XHJcbiAgbGV0IHVzZXIgPSBldmVudC5kYXRhO1xyXG5cclxuICByZXR1cm4gYWRtaW5cclxuICAgIC5kYXRhYmFzZSgpXHJcbiAgICAucmVmKGAvdXNlcnMvJHt1c2VyLnVpZH0vYClcclxuICAgIC5zZXQodXNlcik7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZURlbGV0ZWRVc2VyID0gZnVuY3Rpb25zLmF1dGgudXNlcigpLm9uRGVsZXRlKGV2ZW50ID0+IHtcclxuICBjb25zdCB1c2VyID0gZXZlbnQuZGF0YTtcclxuXHJcbiAgcmV0dXJuIGFkbWluXHJcbiAgICAuZGF0YWJhc2UoKVxyXG4gICAgLnJlZihgL3VzZXJzLyR7dXNlci51aWR9L2ApXHJcbiAgICAucmVtb3ZlKCk7XHJcbn0pO1xyXG4iXX0=