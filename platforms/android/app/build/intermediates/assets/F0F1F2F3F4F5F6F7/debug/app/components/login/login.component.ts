import { Component, OnInit } from "@angular/core";
import { Theme } from "../../settings";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { Router } from "@angular/router";
import { LoginState } from "../../enums/login-state.enum";
import { UserService } from "../../services/user.service";

const firebase = require("nativescript-plugin-firebase");

@Component({
  selector: "login",
  templateUrl: "./components/login/login.component.html"
})
export class LoginComponent implements OnInit {
  private theme;
  public title;
  public loginStates = LoginState;
  public loginState: string = LoginState.Login;

  constructor(private router: Router, private userService: UserService) {
    this.theme = Theme;
    this.title = "Login";
  }

  ngOnInit() {
    console.log("LoginComponent()");
    if (this.userService.user) {
      this.router.navigate(["/search"]);
    }
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

  resetPassword(email: string) {
    console.log("Email: " + email);
    firebase
      .resetPassword({
        email: email
      })
      .then(
        success => {
          // called when password reset was successful,
          // you could now prompt the user to check his email
          this.loginState = LoginState.Login;
        },
        error => {
          console.log(error);
        }
      );
  }

  onCancel() {
    this.router.navigate(["/search"]);
  }

  onCreateAccount(email: string, password: string, confirmPassword: string) {
    if (email) {
      if (password == confirmPassword) {
        firebase
          .createUser({
            email: email,
            password: password
          })
          .then(
            function(result) {
              this.router.navigate(["/search"]);
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
                this.toggleView(LoginState.Login);
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

  onLogin(email: string, password: string) {
    console.log("Logging in -- Email: " + email + "; Password: " + password);
    // Check if email is null or blank
    if (email == null || email == "") {
      alert({
        title: "Missing email",
        message: "Please enter an email address.",
        okButtonText: "Ok"
      });
    }
    if (password == null || password == "") {
      alert({
        title: "Missing password",
        message: "Please enter a password.",
        okButtonText: "Ok"
      });
    }
    if (
      (email != null || email != "") &&
      (password != null || password != "")
    ) {
      firebase
        .login({
          type: firebase.LoginType.PASSWORD,
          passwordOptions: {
            email: email,
            password: password
          }
        })
        .then(
          // Success
          function(result) {
            console.log(JSON.stringify(result));
            //Redirect to Search screen
            this.router.navigate(["/search"]);
          },
          // Error
          function(errorMessage) {
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
            // User doesn't exist
            if (
              errorMessage.match(
                "There is no user record corresponding to this identifier. The user may have been deleted."
              )
            ) {
              // Create User
              firebase
                .createUser({
                  email: this.user.email,
                  password: this.user.password
                })
                .then(
                  function(result) {
                    alert({
                      title: "User created sucessfully",
                      message: "Congratulations! Happy Drinking!",
                      okButtonText: "Sweet!"
                    });
                    // Send confirmation email
                    firebase.sendEmailVerification().then(
                      function() {
                        console.log("Email verification sent");
                      },
                      function(error) {
                        console.log(
                          "Error sending email verification: " + error
                        );
                      }
                    );
                    //Redirect to Search screen
                    this.router.navigate(["/search"]);
                  },
                  function(errorMessage) {
                    alert({
                      title: "No user created",
                      message: errorMessage,
                      okButtonText: "OK, got it"
                    });
                  }
                );
            }
          }
        );
    }
  }

  onLogout() {
    firebase.logout();
    alert({
      title: "User logged out",
      message: "Sorry to see you go!",
      okButtonText: "Ok"
    });
    this.router.navigate(["/search"]);
  }
}
