import { Injectable } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");


@Injectable()
export class UserService {

    private _user: any;

    constructor(){
        firebase.getCurrentUser()
                .then(user => {
                    console.log("User: " + JSON.stringify(user));
                    this._user = user;
                })
                .catch(error => console.log("Trouble in paradise: " + error));
    }

    get user() {
        console.log('Getting current user: ' + JSON.stringify(this._user));
        return this._user;
    }


}