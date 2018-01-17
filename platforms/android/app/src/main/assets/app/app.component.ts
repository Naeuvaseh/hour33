import { Component, OnInit } from "@angular/core";
import { registerElement } from 'nativescript-angular';
import { BottomBar, BottomBarItem, TITLE_STATE, SelectedIndexChangedEventData, Notification } from 'nativescript-bottombar';
import { Theme, Debug } from './settings';
import { NativeScriptRouterModule, RouterExtensions } from "nativescript-angular/router";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { PerformanceMonitor, PerformanceMonitorSample } from 'nativescript-performance-monitor';
import { Color } from "color";
 
registerElement('BottomBar', () => BottomBar);
const performanceMonitor: PerformanceMonitor = new PerformanceMonitor();
 
@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
 
export class AppComponent implements OnInit {
    public hidden: boolean;
    public titleState: TITLE_STATE;
    public _bar: BottomBar;
    public inactiveColor: string;
    public accentColor: string;
    public theme: any;
    public debug;
    public selectedTab: any = {
        index: 0,
        title: ''
    };
    private transition: any = {
        name: 'slide',
        duration: 200,
        curve: 'linear'
    };
 
    constructor(private router: Router, private routerExt: RouterExtensions){
        this.theme = Theme;
        this.debug = Debug;
        this.selectedTab.index = 0;
        this.selectedTab.title = 'Search';
    }

    ngOnInit(){
        if (this.debug.fps){
        performanceMonitor.start({
            textColor: new Color("white"),
            backgroundColor: new Color("black"),
            borderColor: new Color("black"),
            hide: false,
            onSample: (sample: PerformanceMonitorSample) => {
              console.log("FPS: " + sample.fps);
              if (sample.cpu) { // iOS only 
                console.log("CPU %: " + sample.cpu);
              }
            }
          });
        }
    }
    
    public items: Array<BottomBarItem> = [
        // new BottomBarItem(0, "Search", "search", "black", new Notification("blue", "white", "1")),
        new BottomBarItem(0, "Search", "search", Theme.darkGrey),
        new BottomBarItem(1, "Specials", "star", Theme.darkGrey),
        new BottomBarItem(2, "Favorites", "favorite", Theme.darkGrey),
        new BottomBarItem(3, "Account", "account", Theme.darkGrey)
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
        
        switch (args.newIndex) {
            case 0: 
                this.routerExt.navigate(["/search"], { transition: this.transition });
                break;
            case 1:
                this.routerExt.navigate(["/specials"], { transition: this.transition });
                break;
            case 2:
                this.routerExt.navigate(["/favorites"], { transition: this.transition });
                break;
            case 3:
                this.routerExt.navigate(["/account"], { transition: this.transition });
                break;
            default:
                alert('Invalid route.');
                break;
        }
         
     }
}