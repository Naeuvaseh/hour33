import { Component, OnInit } from "@angular/core";
import { Theme } from "../../settings";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { Router } from "@angular/router";
import { LoginState } from "../../enums/login-state.enum";
import { UserService } from "../../services/user.service";
import { TextField } from "ui/text-field";

const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "login",
  templateUrl: "./components/login/login.component.html"
})
export class LoginComponent implements OnInit {
  private theme;
  private _email: string;
  private _password: string;
  private _confirmPassword: string;
  public title;
  public loginStates = LoginState;
  public loginState: string = LoginState.Login;

  constructor(private router: Router, private userService: UserService) {
    this.theme = Theme;
    this.title = "Login";
  }

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      if (user) this.router.navigate(["/search"]);
    });
  }

  resetPassword() {
    this.printEmail();
    firebase
      .resetPassword({
        email: this._email
      })
      .then(
        success => {
          // called when password reset was successful,
          // you could now prompt the user to check his email
          alert({
            title: "Check your email!",
            message: "An email has been sent to reset your password.",
            okButtonText: "Sounds good!"
          });
          this.loginState = LoginState.Login;
        },
        error => {
          console.log(error);
        }
      );
  }

  onCreateAccount() {
    this.printEmail();
    this.printPassword();
    this.printConfirmPassword();
    let router = this.router;
    if (this._email) {
      if (this._password == this._confirmPassword) {
        firebase
          .createUser({
            email: this._email,
            password: this._password
          })
          .then(
            function(result) {
              router.navigate(["/search"]);
            },
            function(errorMessage) {
              if (
                errorMessage.search(
                  "The email address is already in use by another account."
                )
              ) {
                alert({
                  title: "Email already exists!",
                  message:
                    "This email address already exists. Please try logging in instead.",
                  okButtonText: "OK, got it"
                });
              }
              alert({
                title: "No user created",
                message: errorMessage,
                okButtonText: "OK, got it"
              });
            }
          );
      } else {
        alert("Your passwords must match.");
      }
    } else {
      alert("You must include an email");
    }
  }

  onLogin() {
    this.printEmail();
    this.printPassword();
    let router = this.router;
    // Check if email is null or blank
    if (this._email == null || this._email == "") {
      alert({
        title: "Missing email",
        message: "Please enter an email address.",
        okButtonText: "Ok"
      });
    }
    if (this._password == null || this._password == "") {
      alert({
        title: "Missing password",
        message: "Please enter a password.",
        okButtonText: "Ok"
      });
    }
    if (
      (this._email != null || this._email != "") &&
      (this._password != null || this._password != "")
    ) {
      firebase
        .login({
          type: firebase.LoginType.PASSWORD,
          passwordOptions: {
            email: this._email,
            password: this._password
          }
        })
        .then(
          // Success
          data => {
            console.log(JSON.stringify(data));
            this.userService.setUser(data);
            //Redirect to Search screen
            router.navigate(["/search"]);
          },
          // Error
          errorMessage => {
            console.log(errorMessage);
            // Login Failed
            if (
              errorMessage.match(
                "The password is invalid or the user does not have a password."
              )
            ) {
              alert({
                title: "An error occurred",
                message:
                  "The password is invalid or the user does not have a password.",
                okButtonText: "Ok"
              });
            }
          }
        );
    }
  }

  printEmail() {
    console.log("Email: " + this._email);
  }

  printPassword() {
    console.log("Password: " + this._password);
  }

  printConfirmPassword() {
    console.log("Confirm Password: " + this._confirmPassword);
  }

  onLogout() {
    this.userService.logout().subscribe(success => {
      alert({
        title: "User logged out",
        message: "Sorry to see you go!",
        okButtonText: "Ok"
      });
      this.router.navigate(["/search"]);
    });
  }

  toggleView(action: string) {
    switch (action) {
      case LoginState.Login:
        {
          this.title = "Login";
          this.loginState = LoginState.Login;
        }
        break;
      case LoginState.ForgotPassword:
        {
          this.title = "Forgot Password?";
          this.loginState = LoginState.ForgotPassword;
        }
        break;
      case LoginState.CreateAccount: {
        this.title = "Create an Account";
        this.loginState = LoginState.CreateAccount;
      }
    }
  }

  emailTextChange(args) {
    let email = <TextField>args.object;
    this._email = email.text;
  }

  passwordTextChange(args) {
    let password = <TextField>args.object;
    this._password = password.text;
  }

  passwordConfirmTextChange(args) {
    let passwordConfirm = <TextField>args.object;
    this._confirmPassword = passwordConfirm.text;
  }
}
