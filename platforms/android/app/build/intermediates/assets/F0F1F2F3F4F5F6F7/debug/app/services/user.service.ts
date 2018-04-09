import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
const firebase = require("nativescript-plugin-firebase");

@Injectable()
export class UserService {
  public user: Observable<any>;
  loggedIn: boolean;

  constructor() {}

  getUser(): Observable<any> {
    return Observable.fromPromise(
      firebase
        .getCurrentUser()
        .then(user => {
          //console.log("UserService.getUser()::: User: " + JSON.stringify(user));
          this.user = user;
          return user;
        })
        .catch(error => console.log("UserService.getUser():[ERROR] " + error))
    );
  }

  setUser(user: any) {
    this.user = user;
  }

  logout(): Observable<any> {
    return Observable.fromPromise(
      firebase.logout().then(success => {
        this.user = null;
        this.loggedIn = false;
        return true;
      })
    );
  }
}
