import { Component, OnInit } from "@angular/core";
import { Theme } from "../../settings";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "account",
  templateUrl: "./components/account/account.component.html"
})
export class AccountComponent implements OnInit {
  public loginState: boolean;

  private theme;

  constructor(private router: Router, private userService: UserService) {
    this.theme = Theme;
  }

  ngOnInit() {
    console.log(
      "AccountComponent.OnInit(): User: " +
        JSON.stringify(this.userService.getUser())
    );
    this.loginState = this.userService.loggedIn;
    console.log("AccountComponent.OnInit(): LoginState:" + this.loginState);
  }

  onLogin() {
    this.router.navigate(["/login"]);
  }

  onLogout() {
    this.userService.logout();
    alert({
      title: "User logged out",
      message: "Sorry to see you go!",
      okButtonText: "Ok"
    });
    this.router.navigate(["/search"]);
  }
}
