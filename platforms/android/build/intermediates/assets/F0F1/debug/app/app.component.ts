import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { Theme } from './settings';
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
 
registerElement('BottomBar', () => BottomBar);
 
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
 
export class AppComponent {
    public hidden: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;
    public theme: any;
    public selectedTab: any = {
        index: 0,
        title: ''
    };
    private transition: any = {
        name: 'slide',
        duration: 200,
        curve: 'linear'
    }
 
    constructor(private router: Router, private routerExt: RouterExtensions){
        this.theme = Theme;
        this.selectedTab.index = 0;
        this.selectedTab.title = 'Search';
    }
    
    public items: Array<BottomBarItem> = [
        // new BottomBarItem(0, "Search", "search", "black", new Notification("blue", "white", "1")),
        new BottomBarItem(0, "Search", "search", Theme.bottombarColor),
        new BottomBarItem(1, "Specials", "star", Theme.bottombarColor),
        new BottomBarItem(2, "Favorites", "favorite", Theme.bottombarColor),
        new BottomBarItem(3, "Account", "account", Theme.bottombarColor)
    ];
 
    tabLoaded(event) {
        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.ALWAYS_SHOW;
        this.inactiveColor = Theme.inactiveColor;
        this.accentColor = Theme.accentColor;
    }
    
     tabSelected(args: SelectedIndexChangedEventData) {
         console.log(args.newIndex);
         
         // Adjust transition direction
         this.transition.name = (args.newIndex > this.selectedTab.index) ? 'slideLeft' : 'slideRight';
         
         switch (args.newIndex){
             case 0: 
                 console.log('Navigating to search');
                 this.routerExt.navigate(["/search"], { transition: this.transition });
                 break;
             case 1:
                 console.log('Navigating to specials');
                 this.routerExt.navigate(["/specials"], { transition: this.transition });
                 break;
             case 2:
                 console.log('Navigating to favorites');
                 this.routerExt.navigate(["/favorites"], { transition: this.transition });
                 break;
             case 3:
                 console.log('Navigating to account');
                 this.routerExt.navigate(["/account"], { transition: this.transition });
                 break;
             default:
                 alert('Invalid route.');
                 break;
         }
         
     }
}