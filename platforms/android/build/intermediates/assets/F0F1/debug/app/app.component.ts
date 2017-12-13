import { Component } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { Settings } from './settings';
 
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
    public Settings: any;
    public selectedTab: any = {
        index: 0,
        title: ''
    };
 
    constructor(){
        this.Settings = Settings;
        this.selectedTab.index = 0;
        this.selectedTab.title = 'Search';
    }
    
    public items: Array<BottomBarItem> = [
        // new BottomBarItem(0, "Search", "search", "black", new Notification("blue", "white", "1")),
        new BottomBarItem(0, "Search", "search", Settings.bottombarColor),
        new BottomBarItem(1, "Specials", "star", Settings.bottombarColor),
        new BottomBarItem(2, "Favorites", "favorite", Settings.bottombarColor),
        new BottomBarItem(3, "Account", "account", Settings.bottombarColor)
    ];
 
    tabLoaded(event) {
        this._bar = <BottomBar>event.object;
        this.hidden = false;
        this.titleState = TITLE_STATE.ALWAYS_SHOW;
        this.inactiveColor = Settings.inactiveColor;
        this.accentColor = Settings.accentColor;
    }
    
     tabSelected(args: SelectedIndexChangedEventData) {
         console.log(args.newIndex);
     }
}