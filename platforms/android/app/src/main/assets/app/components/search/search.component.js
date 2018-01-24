"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var listview_1 = require("nativescript-pro-ui/listview");
var router_1 = require("@angular/router");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var SearchComponent = (function () {
    function SearchComponent(router, vendorService, googleLocationService) {
        this.router = router;
        this.vendorService = vendorService;
        this.googleLocationService = googleLocationService;
        this.listViewVisible = true;
        this.theme = settings_1.Theme;
        this.debug = settings_1.Debug;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.vendorService.getVendors();
        // Get location
        var tempLocation;
        geolocation
            .getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            updateTime: 500,
            maximumAge: 5000,
            timeout: 20000
        })
            .then(function (result) {
            if (result) {
                console.log('SearchComponent.NgOnInit(): Location: ' + JSON.stringify(result));
                // Update user location
                _this.googleLocationService.userLocation = result;
                // Pull default search data
                _this.googleLocationService
                    .defaultSearch(result)
                    .then(function (results) {
                    console.log(JSON.stringify(results));
                    _this.searchResults = results;
                    _this.vendors = results.results;
                });
            }
        }, function (error) {
            console.log('CurrentLocationResolver() ERROR: ' + error);
        });
        // this.googleLocationService
        //     .textSearch()
        //     .subscribe(
        //       (data: SearchResult) => {
        //         console.log('Results: ' + data);
        //         this.searchResults = data;
        //       },
        //       (error) =>{
        //         console.log('SearchComponent.ngOnInit() ERROR: ' + error);
        //     });
        // this.googleLocationService
        //     .nearbySearch()
        //     .subscribe((data: any) => {
        //       console.log('Data', JSON.stringify(data));
        //       this.results = data;
        //     });
    };
    SearchComponent.prototype.onFilter = function () {
        console.log("Filter button tapped.");
    };
    SearchComponent.prototype.onListMapToggle = function () {
        console.log("ListMap toggle tapped.");
        // console.log('Results: ' + JSON.stringify(this.results));
        //this.searchResults = this.googleLocationService.nearbySearch();
        // this.googleLocationService
        //     .textSearch("bars", Radius.mi5)
        //     .subscribe(
        //       (data: SearchResult) => {
        //         this.searchResults = data;
        //       },
        //       (error) => {
        //         console.log("SearchComponent.OnListMapToggle() ERROR: " + error);
        //       });
        this.listViewVisible = !this.listViewVisible;
    };
    SearchComponent.prototype.refresh = function (args) {
        setTimeout(function () {
            // API Data Request goes here.
            console.log("Pull down initiated.");
            args.object.notifyPullToRefreshFinished();
        }, 500);
    };
    SearchComponent.prototype.onVendorTap = function (args) {
        var vendor = this.items.getItem(args.index);
        console.log("Vendor ID:", vendor.id);
        this.vendorService.setSelectedVendor(vendor);
        this.router.navigate(["search/vendor", vendor.id]);
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var that = new WeakRef(this);
        setTimeout(function () {
            var listView = args.object;
            var initialNumberOfItems = that.get()._numberOfAddedItems;
            for (var i = that.get()._numberOfAddedItems; i < initialNumberOfItems + 2; i++) {
                // Check if there are any more pages
                if (i > this.items.names.length - 1) {
                    listView.loadOnDemandMode = listview_1.ListViewLoadOnDemandMode[listview_1.ListViewLoadOnDemandMode.None];
                    break;
                }
                //Get next page and push onto array.
                //that.get()._dataItems.push(new DataItem(i, posts.names[i], "This is item description", posts.titles[i], posts.text[i], "res://" + imageUri));
                //that.get()._numberOfAddedItems++;
            }
            listView.notifyLoadOnDemandFinished();
        }, 500);
        args.returnValue = true;
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: './components/search/search.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            vendor_service_1.VendorService,
            google_location_service_1.GoogleLocationService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBQzlDLHlEQUF3RztBQUV4RywwQ0FBeUU7QUFFekUsc0RBQXdEO0FBQ3hELGtDQUFvQztBQUNwQyxXQUFXO0FBQ1gsZ0VBQThEO0FBQzlELGtGQUErRTtBQWMvRTtJQVdFLHlCQUFvQixNQUFjLEVBQ2QsYUFBNEIsRUFDNUIscUJBQTRDO1FBRjVDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBTnpELG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBT3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkE4Q0M7UUE3Q0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzdDLGVBQWU7UUFDZixJQUFJLFlBQXNCLENBQUM7UUFDM0IsV0FBVzthQUNSLGtCQUFrQixDQUFDO1lBQ2hCLGVBQWUsRUFBRSxnQkFBUSxDQUFDLElBQUk7WUFDOUIsVUFBVSxFQUFFLEdBQUc7WUFDZixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsTUFBZ0I7WUFDckIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDL0UsdUJBQXVCO2dCQUN2QixLQUFJLENB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QUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxtQ0FBd0IsQ0FBQyxtQ0FBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEYsS0FBSyxDQUFDO2dCQUNWLENBQUM7Z0JBQ0Qsb0NBQW9DO2dCQUNwQywrSUFBK0k7Z0JBQy9JLG1DQUFtQztZQUN2QyxDQUFDO1lBQ0QsUUFBUSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDeEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQXZIVSxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMkNBQTJDO1NBQ3pELENBQUM7eUNBWTRCLGVBQU07WUFDQyw4QkFBYTtZQUNMLCtDQUFxQjtPQWJyRCxlQUFlLENBd0gzQjtJQUFELHNCQUFDO0NBQUEsQUF4SEQsSUF3SEM7QUF4SFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSwgRGVidWcgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gJ3VpL2VudW1zJztcclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRleHRTZWFyY2hWZW5kb3IgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3NlYXJjaC1yZXN1bHQvdGV4dC1zZWFyY2gvdGV4dC1zZWFyY2gtdmVuZG9yLmludGVyZmFjZSc7XHJcbi8vIEVudW1zXHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uLy4uL2VudW1zL2RheS5lbnVtJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFJhZGl1cyB9IGZyb20gJy4uLy4uL2VudW1zL3JhZGl1cy5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcHJpdmF0ZSB0aGVtZTtcclxuICBwcml2YXRlIGRlYnVnO1xyXG4gIHByaXZhdGUgX251bWJlck9mQWRkZWRJdGVtcztcclxuICBwcml2YXRlIGl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICBcclxuICBwdWJsaWMgbGlzdFZpZXdWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gIHB1YmxpYyB2ZW5kb3JzOiBUZXh0U2VhcmNoVmVuZG9yW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgdmVuZG9yU2VydmljZTogVmVuZG9yU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIGdvb2dsZUxvY2F0aW9uU2VydmljZTogR29vZ2xlTG9jYXRpb25TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICB0aGlzLmRlYnVnID0gRGVidWc7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgIFxyXG4gICAgdGhpcy5pdGVtcyA9IHRoaXMudmVuZG9yU2VydmljZS5nZXRWZW5kb3JzKCk7XHJcbiAgICAvLyBHZXQgbG9jYXRpb25cclxuICAgIGxldCB0ZW1wTG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgZ2VvbG9jYXRpb25cclxuICAgICAgLmdldEN1cnJlbnRMb2NhdGlvbih7XHJcbiAgICAgICAgICBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsXHJcbiAgICAgICAgICB1cGRhdGVUaW1lOiA1MDAsXHJcbiAgICAgICAgICBtYXhpbXVtQWdlOiA1MDAwLFxyXG4gICAgICAgICAgdGltZW91dDogMjAwMDBcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3VsdDogTG9jYXRpb24pID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0KXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2hDb21wb25lbnQuTmdPbkluaXQoKTogTG9jYXRpb246ICcgKyBKU09OLnN0cmluZ2lmeShyZXN1bHQpKTtcclxuICAgICAgICAgIC8vIFVwZGF0ZSB1c2VyIGxvY2F0aW9uXHJcbiAgICAgICAgICB0aGlzLmdvb2dsZUxvY2F0aW9uU2VydmljZS51c2VyTG9jYXRpb24gPSByZXN1bHQ7XHJcbiAgICAgICAgICAvLyBQdWxsIGRlZmF1bHQgc2VhcmNoIGRhdGFcclxuICAgICAgICAgIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAgICAgICAgICAgLmRlZmF1bHRTZWFyY2gocmVzdWx0KVxyXG4gICAgICAgICAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHRzKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSByZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3JzID0gPFRleHRTZWFyY2hWZW5kb3JbXT4gcmVzdWx0cy5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDdXJyZW50TG9jYXRpb25SZXNvbHZlcigpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICB9KTsgICBcclxuICAgIC8vIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAvLyAgICAgLnRleHRTZWFyY2goKVxyXG4gICAgLy8gICAgIC5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAoZGF0YTogU2VhcmNoUmVzdWx0KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRzOiAnICsgZGF0YSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IGRhdGE7XHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAgKGVycm9yKSA9PntcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaENvbXBvbmVudC5uZ09uSW5pdCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlXHJcbiAgICAvLyAgICAgLm5lYXJieVNlYXJjaCgpXHJcbiAgICAvLyAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XHJcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnRGF0YScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgIC8vICAgICAgIHRoaXMucmVzdWx0cyA9IGRhdGE7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkZpbHRlcigpe1xyXG4gICAgY29uc29sZS5sb2coXCJGaWx0ZXIgYnV0dG9uIHRhcHBlZC5cIik7XHJcbiAgfVxyXG5cclxuICBvbkxpc3RNYXBUb2dnbGUoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiTGlzdE1hcCB0b2dnbGUgdGFwcGVkLlwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdSZXN1bHRzOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5yZXN1bHRzKSk7XHJcbiAgICAvL3RoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuZ29vZ2xlTG9jYXRpb25TZXJ2aWNlLm5lYXJieVNlYXJjaCgpO1xyXG4gICAgLy8gdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgIC8vICAgICAudGV4dFNlYXJjaChcImJhcnNcIiwgUmFkaXVzLm1pNSlcclxuICAgIC8vICAgICAuc3Vic2NyaWJlKFxyXG4gICAgLy8gICAgICAgKGRhdGE6IFNlYXJjaFJlc3VsdCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSBkYXRhO1xyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIlNlYXJjaENvbXBvbmVudC5Pbkxpc3RNYXBUb2dnbGUoKSBFUlJPUjogXCIgKyBlcnJvcik7XHJcbiAgICAvLyAgICAgICB9KTtcclxuICAgIHRoaXMubGlzdFZpZXdWaXNpYmxlID0gIXRoaXMubGlzdFZpZXdWaXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgcmVmcmVzaChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSl7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gQVBJIERhdGEgUmVxdWVzdCBnb2VzIGhlcmUuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHVsbCBkb3duIGluaXRpYXRlZC5cIik7XHJcbiAgICAgIGFyZ3Mub2JqZWN0Lm5vdGlmeVB1bGxUb1JlZnJlc2hGaW5pc2hlZCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcblxyXG4gIG9uVmVuZG9yVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKXtcclxuICAgIGxldCB2ZW5kb3I6IFZlbmRvciA9IHRoaXMuaXRlbXMuZ2V0SXRlbShhcmdzLmluZGV4KTtcclxuICAgIGNvbnNvbGUubG9nKFwiVmVuZG9yIElEOlwiLCB2ZW5kb3IuaWQpO1xyXG4gICAgdGhpcy52ZW5kb3JTZXJ2aWNlLnNldFNlbGVjdGVkVmVuZG9yKHZlbmRvcik7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJzZWFyY2gvdmVuZG9yXCIsIHZlbmRvci5pZF0sICk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWRNb3JlSXRlbXNSZXF1ZXN0ZWQoYXJnczogTGlzdFZpZXdFdmVudERhdGEpe1xyXG4gICAgdmFyIHRoYXQgPSBuZXcgV2Vha1JlZih0aGlzKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgbGlzdFZpZXc6IFJhZExpc3RWaWV3ID0gYXJncy5vYmplY3Q7XHJcbiAgICAgIHZhciBpbml0aWFsTnVtYmVyT2ZJdGVtcyA9IHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtcztcclxuICAgICAgZm9yICh2YXIgaSA9IHRoYXQuZ2V0KCkuX251bWJlck9mQWRkZWRJdGVtczsgaSA8IGluaXRpYWxOdW1iZXJPZkl0ZW1zICsgMjsgaSsrKSB7XHJcbiAgICAgICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgYW55IG1vcmUgcGFnZXNcclxuICAgICAgICAgIGlmIChpID4gdGhpcy5pdGVtcy5uYW1lcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgbGlzdFZpZXcubG9hZE9uRGVtYW5kTW9kZSA9IExpc3RWaWV3TG9hZE9uRGVtYW5kTW9kZVtMaXN0Vmlld0xvYWRPbkRlbWFuZE1vZGUuTm9uZV07XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvL0dldCBuZXh0IHBhZ2UgYW5kIHB1c2ggb250byBhcnJheS5cclxuICAgICAgICAgIC8vdGhhdC5nZXQoKS5fZGF0YUl0ZW1zLnB1c2gobmV3IERhdGFJdGVtKGksIHBvc3RzLm5hbWVzW2ldLCBcIlRoaXMgaXMgaXRlbSBkZXNjcmlwdGlvblwiLCBwb3N0cy50aXRsZXNbaV0sIHBvc3RzLnRleHRbaV0sIFwicmVzOi8vXCIgKyBpbWFnZVVyaSkpO1xyXG4gICAgICAgICAgLy90aGF0LmdldCgpLl9udW1iZXJPZkFkZGVkSXRlbXMrKztcclxuICAgICAgfVxyXG4gICAgICBsaXN0Vmlldy5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gICAgfSwgNTAwKTtcclxuICAgIGFyZ3MucmV0dXJuVmFsdWUgPSB0cnVlO1xyXG4gIH1cclxufSJdfQ==