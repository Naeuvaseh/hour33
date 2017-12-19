import { Component, OnInit } from '@angular/core';
import { Theme, Debug } from '../../settings';
import { ListViewEventData, RadListView, ListViewLoadOnDemandMode } from 'nativescript-pro-ui/listview';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

// Interfaces
import { SearchResult } from '../../interfaces/search-result.interface';
import { HoursOfOperation } from '../../interfaces/hours-of-operation.interface';

// Enums
import { Day } from '../../enums/day.enum';

@Component({
  selector: 'search',
  templateUrl: './components/search/search.component.html'
})
export class SearchComponent implements OnInit {

  private theme;
  private debug;
  private _numberOfAddedItems;
  // private items: SearchResult[];
  private items: ObservableArray<SearchResult>;
  
  public listViewVisible: boolean = true;

  constructor() {
    this.theme = Theme;
    this.debug = Debug;
  }

  ngOnInit() {  
    this.items = new ObservableArray([{
      id: 1,
      vendorName: "Geckos",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 2,
      vendorName: "Happy hours at Anodyne Pool Hall & Cocktails",
      description: "Local brewery for the 505!",
      phone: "505-375-3073",
      rating: { likes: 28, dislikes: 8 }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "12:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "4:00 PM",
        close: "10:00 PM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "5:30 PM",
        close: "11:00 PM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "6:00 PM",
        close: "7:00 PM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "4:15 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:30 PM",
        close: "10:00 PM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 3,
      vendorName: "High Noon Restaurant & Saloon",
      description: "All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us!",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "4:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "6:00 PM",
        close: "12:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:30 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "4:30 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "5:15 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "4:45 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 4,
      vendorName: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 5,
      vendorName: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 6,
      vendorName: "Geckos",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 7,
      vendorName: "Marble",
      description: "Local brewery for the 505!",
      phone: "505-335-3973",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 8,
      vendorName: "The Library",
      description: "Not yo' momma's normal library.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 9,
      vendorName: "Gardunio's",
      description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
    }, {
      id: 10,
      vendorName: "El Pinto",
      description: "Family venue for dogs and their moms.",
      phone: "505-235-2833",
      rating: { 
        likes: 60, 
        dislikes: 18 
      }, 
      hoursOfOperation: [{
        day: Day.Sunday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Monday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Tuesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Wednesday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Thursday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Friday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      }, {
        day: Day.Saturday,
        open: "3:00 PM",
        close: "2:00 AM",
        holiday: false
      },]
     }])
  }

  onFilter(){
    console.log("Filter button tapped.");
  }

  onListMapToggle(){
    console.log("ListMap toggle tapped.");
    this.listViewVisible = !this.listViewVisible;
  }

  refresh(args: ListViewEventData){
    console.log(args.object);
    console.log(this.items);
    setTimeout(function () {
      // API Data Request goes here.
      console.log("Pull down initiated.");
      args.object.notifyPullToRefreshFinished();
    }, 1000);
  }

  onVendorTap(args: Event){
    console.log("Row tapped.");
  }

  onLoadMoreItemsRequested(args: ListViewEventData){
    var that = new WeakRef(this);
    setTimeout(function () {
      var listView: RadListView = args.object;
      var initialNumberOfItems = that.get()._numberOfAddedItems;
      for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
          // Check if there are any more pages
          if (i > this.items.names.length - 1) {
              listView.loadOnDemandMode = ListViewLoadOnDemandMode[ListViewLoadOnDemandMode.None];
              break;
          }
          //Get next page and push onto array.
          //that.get()._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
          //that.get()._numberOfAddedItems++;
      }
      listView.notifyLoadOnDemandFinished();
    }, 1000);
    args.returnValue = true;
  }
}