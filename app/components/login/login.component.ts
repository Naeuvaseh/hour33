import { Component } from '@angular/core';
import { Theme } from '../../settings';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Router } from '@angular/router';
const firebase = require('nativescript-plugin-firebase');

@Component({
  selector: 'login',
  templateUrl: './components/login/login.component.html'
})
export class LoginComponent {

  public user = {
    email: '',
    password: '',
    forgottenEmailPassword: ''
  }

  private theme;
  public forgotPassword: boolean = false;
  
    constructor(private router: Router) {
      this.theme = Theme;
    }

    toggleForgotPassword(){
        this.forgotPassword = !this.forgotPassword;
    }

    resetPassword(){
        console.log('Email: ' + this.user.email);
        firebase.resetPassword({
            email: this.user.forgottenEmailPassword
          }).then(
            function () {
                // called when password reset was successful,
                // you could now prompt the user to check his email
                this.forgotPassword = !this.forgotPassword;
              },
              function (errorMessage) {
                console.log(errorMessage);
              }
          );

        
    }

    onLogin(){
        var router = this.router;
        var user = this.user;
        console.log('User Email: ' + this.user.email + '; Password: ' + this.user.password);
        if(this.user.email == null || this.user.email == ''){
        alert({
            title: "Missing email",
            message: "Please enter an email address.",
            okButtonText: "Ok"
        });
        }
        else if (this.user.password == null || this.user.password == ''){
        alert({
            title: "Missing password",
            message: "Please enter a password.",
            okButtonText: "Ok"
        });
        }
        else {
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
            email: this.user.email,
            password: this.user.password
            }
        }).then(
            // Success
            function (result) {
            JSON.stringify(result);
            //Redirect to Search screen
            router.navigate(["/search"]);
            },
            // Error
            function (errorMessage) {
            console.log(errorMessage);
            // Login Failed
            if (errorMessage.match("The password is invalid or the user does not have a password.")) {
                alert({
                title: "An error occurred",
                message: "The password is invalid or the user does not have a password.",
                okButtonText: "Ok"
                });
            }
            // User doesn't exist
            if (errorMessage.match("There is no user record corresponding to this identifier. The user may have been deleted.")) {
                // Create User
                firebase.createUser({
                email: this.user.email,
                password: this.user.password
                }).then(
                function (result) {
                    alert({
                    title: "User created sucessfully",
                    message: "Congratulations! Happy Drinking!",
                    okButtonText: "Sweet!"
                    });
                    // Send confirmation email
                    firebase.sendEmailVerification().then(
                    function () {
                        console.log("Email verification sent");
                    },
                    function (error) {
                        console.log("Error sending email verification: " + error);
                    }
                    );
                    //Redirect to Search screen
                    router.navigate(["/search"]);
                },
                function (errorMessage) {
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

    onLogout(){
        firebase.logout();
        alert({
        title: "User logged out",
        message: "Sorry to see you go!",
        okButtonText: "Ok"
        });
        this.router.navigate(['/search']);
    }
}