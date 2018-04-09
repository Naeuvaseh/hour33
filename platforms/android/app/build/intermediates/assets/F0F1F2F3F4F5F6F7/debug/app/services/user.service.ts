import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
const firebase = require("nativescript-plugin-firebase");

@Injectable()
export class UserService {
  private _user: Observable<any>;
  loggedIn: boolean;

  constructor() {
    firebase
      .getCurrentUser()
      .then(user => {
        if (user) {
          console.log("User: " + JSON.stringify(user));
          this._user = user;
          this.loggedIn = true;
        } else {
          this._user = null;
          this.loggedIn = false;
        }
      })
      .catch(error =>
        console.log("UserService.constructor():[ERROR] " + error)
      );
  }

  getUser(): Observable<any> {
    console.log("Getting current user: " + JSON.stringify(this._user));
    return this._user;
  }

  setUset(user: any) {
    this._user = user;
  }

  logout() {
    firebase.logout().then(success => {
      this._user = null;
      this.loggedIn = false;
    });
  }
}
