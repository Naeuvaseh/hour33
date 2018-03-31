import { Component } from '@angular/core';
import { Theme } from '../../settings';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Router } from '@angular/router';
import { LoginState } from '../../enums/login-state.enum';

const firebase = require('nativescript-plugin-firebase');

@Component({
  selector: 'login',
  templateUrl: './components/login/login.component.html'
})
export class LoginComponent {

    private theme;
    public user = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    public loginState: string = LoginState.Login;
  
    constructor(private router: Router) {
      this.theme = Theme;
    }

    toggleForgotPassword(){
        this.loginState = LoginState.ForgotPassword;
    }

    toggleLogin(){
        this.loginState = LoginState.Login;
    }

    resetPassword(email: string){
        console.log('Email: ' + email);
        firebase.resetPassword({
            email: email
          }).then(
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

    toggleCreateAccount(){
        this.loginState = LoginState.CreateAccount;
    }

    onCancel(){
        
    }

    onCreateAccount(email: string, password: string, confirmPassword: string){
        if (email){
            if (password == confirmPassword){
                firebase.createUser({
                    email: this.user.email,
                    password: this.user.password
                  }).then(
                      function (result) {
                        alert({
                          title: "User created",
                          message: "userid: " + result.key,
                          okButtonText: "Nice!"
                        })
                      },
                      function (errorMessage) {
                        alert({
                          title: "No user created",
                          message: errorMessage,
                          okButtonText: "OK, got it"
                        })
                      }
                  );
            }
            else{
                alert('Your passwords must match.');
            }
        }
        else {
            alert('You must include an email');
        }
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