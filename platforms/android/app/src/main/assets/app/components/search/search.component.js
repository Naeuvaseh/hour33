"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var router_1 = require("@angular/router");
// Services
var vendor_service_1 = require("../../services/vendor.service");
var google_location_service_1 = require("../../services/google-location.service");
var search_mode_enum_1 = require("../../enums/search-mode.enum");
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
        // Get location
        var tempLocation;
        this.googleLocationService
            .search(search_mode_enum_1.SearchMode.Default, false)
            .then(function (response) {
            _this.setNextPageFlag(response);
            _this.searchResults = response;
            _this.vendors = response.results;
        });
    };
    SearchComponent.prototype.onFilter = function () {
        console.log("Filter button tapped.");
    };
    SearchComponent.prototype.onListMapToggle = function () {
        console.log("ListMap toggle tapped.");
        this.listViewVisible = !this.listViewVisible;
    };
    SearchComponent.prototype.refresh = function (args) {
        var _this = this;
        this.googleLocationService
            .search(search_mode_enum_1.SearchMode.Default, false)
            .then(function (response) {
            _this.setNextPageFlag(response);
            _this.searchResults = response;
            _this.vendors = response.results;
            args.object.notifyPullToRefreshFinished();
        }, function (error) {
            console.log('SearchComponent.refresh() ERROR: ' + error);
        });
    };
    SearchComponent.prototype.onVendorTap = function (args) {
        var view = args.object;
        var data = view.getSelectedItems();
        console.log(JSON.stringify(data[0]));
        // let vendor: Vendor = this.vendors.find(vendor => vendor.place_id === args.data.place_id);
        // console.log("Vendor ID:", vendor.place_id);
        // //this.vendorService.setSelectedVendor(vendor);
        // this.router.navigate(["search/vendor", vendor.place_id], );
    };
    SearchComponent.prototype.onLoadMoreItemsRequested = function (args) {
        var _this = this;
        if (this.searchResults.next_page_token) {
            this.googleLocationService
                .search(search_mode_enum_1.SearchMode.Default, true, this.searchResults)
                .then(function (response) {
                _this.setNextPageFlag(response);
                _this.searchResults = response;
                for (var _i = 0, _a = response.results; _i < _a.length; _i++) {
                    var vendor = _a[_i];
                    _this.vendors.push(vendor);
                }
                args.object.notifyLoadOnDemandFinished();
            }, function (error) {
                console.log('SearchComponent.onLoadMoreItemsRequested() ERROR: ' + error);
            });
        }
    };
    SearchComponent.prototype.setNextPageFlag = function (response) {
        this.nextPageFlag = (response.next_page_token) ? true : false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQThDO0FBRzlDLDBDQUF5RTtBQUl6RSxXQUFXO0FBQ1gsZ0VBQThEO0FBQzlELGtGQUErRTtBQVEvRSxpRUFBMEQ7QUFNMUQ7SUFXRSx5QkFBb0IsTUFBYyxFQUNkLGFBQTRCLEVBQzVCLHFCQUE0QztRQUY1QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQU56RCxvQkFBZSxHQUFZLElBQUksQ0FBQztRQU9yQyxJQUFJLENBQUMsS0FBSyxHQUFHLGdCQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxlQUFlO1FBQ2YsSUFBSSxZQUFzQixDQUFDO1FBQzNCLElBQUksQ0FBQyxxQkFBcUI7YUFDckIsTUFBTSxDQUFDLDZCQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzthQUNqQyxJQUFJLENBQUMsVUFBQyxRQUFzQjtZQUMzQixLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxPQUFPLEdBQWMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx5Q0FBZSxHQUFmO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBTyxHQUFQLFVBQVEsSUFBdUI7UUFBL0IsaUJBWUM7UUFYQyxJQUFJLENBQUMscUJBQXFCO2FBQ3JCLE1BQU0sQ0FBQyw2QkFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUMsUUFBc0I7WUFDM0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztZQUM5QixLQUFJLENBQUMsT0FBTyxHQUFjLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDM0MsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1FBQzVDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELHFDQUFXLEdBQVgsVUFBWSxJQUF1QjtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBcUIsQ0FBQztRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQWMsQ0FBQztRQUcvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyw0RkFBNEY7UUFDNUYsOENBQThDO1FBQzlDLGtEQUFrRDtRQUNsRCw4REFBOEQ7SUFDaEUsQ0FBQztJQUVELGtEQUF3QixHQUF4QixVQUF5QixJQUF1QjtRQUFoRCxpQkFnQkM7UUFmQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLHFCQUFxQjtpQkFDdkIsTUFBTSxDQUFDLDZCQUFVLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUNwRCxJQUFJLENBQUMsVUFBQyxRQUFRO2dCQUNiLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO2dCQUM5QixHQUFHLENBQUMsQ0FBZSxVQUFnQixFQUFoQixLQUFBLFFBQVEsQ0FBQyxPQUFPLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCO29CQUE5QixJQUFJLE1BQU0sU0FBQTtvQkFDYixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBUyxNQUFNLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQzNDLENBQUMsRUFDRCxVQUFDLEtBQUs7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxvREFBb0QsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM1RSxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDSCxDQUFDO0lBRUQseUNBQWUsR0FBZixVQUFnQixRQUFzQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7SUFDaEUsQ0FBQztJQXJGVSxlQUFlO1FBSjNCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsMkNBQTJDO1NBQ3pELENBQUM7eUNBWTRCLGVBQU07WUFDQyw4QkFBYTtZQUNMLCtDQUFxQjtPQWJyRCxlQUFlLENBc0YzQjtJQUFELHNCQUFDO0NBQUEsQUF0RkQsSUFzRkM7QUF0RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSwgRGVidWcgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IExpc3RWaWV3RXZlbnREYXRhLCBSYWRMaXN0VmlldywgTGlzdFZpZXdMb2FkT25EZW1hbmRNb2RlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXByby11aS9saXN0dmlldyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgKiBhcyBnZW9sb2NhdGlvbiBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nO1xyXG5pbXBvcnQgeyBBY2N1cmFjeSB9IGZyb20gJ3VpL2VudW1zJztcclxuLy8gU2VydmljZXNcclxuaW1wb3J0IHsgVmVuZG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3ZlbmRvci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR29vZ2xlTG9jYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZ29vZ2xlLWxvY2F0aW9uLnNlcnZpY2UnO1xyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0L3NlYXJjaC1yZXN1bHQuaW50ZXJmYWNlJztcclxuLy8gRW51bXNcclxuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vLi4vZW51bXMvZGF5LmVudW0nO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgUmFkaXVzIH0gZnJvbSAnLi4vLi4vZW51bXMvcmFkaXVzLmVudW0nO1xyXG5pbXBvcnQgeyBTZWFyY2hNb2RlIH0gZnJvbSAnLi4vLi4vZW51bXMvc2VhcmNoLW1vZGUuZW51bSc7XHJcbmltcG9ydCB7IGZvckVhY2ggfSBmcm9tICdAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb24nO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHByaXZhdGUgdGhlbWU7XHJcbiAgcHJpdmF0ZSBkZWJ1ZztcclxuICBwcml2YXRlIG5leHRQYWdlRmxhZzogYm9vbGVhbjtcclxuICBwcml2YXRlIGl0ZW1zOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICBcclxuICBwdWJsaWMgbGlzdFZpZXdWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgc2VhcmNoUmVzdWx0czogU2VhcmNoUmVzdWx0O1xyXG4gIHB1YmxpYyB2ZW5kb3JzOiBWZW5kb3JbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2ZW5kb3JTZXJ2aWNlOiBWZW5kb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgZ29vZ2xlTG9jYXRpb25TZXJ2aWNlOiBHb29nbGVMb2NhdGlvblNlcnZpY2UpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIHRoaXMuZGVidWcgPSBEZWJ1ZztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkgeyAgXHJcbiAgICAvLyBHZXQgbG9jYXRpb25cclxuICAgIGxldCB0ZW1wTG9jYXRpb246IExvY2F0aW9uO1xyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgICAuc2VhcmNoKFNlYXJjaE1vZGUuRGVmYXVsdCwgZmFsc2UpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgdGhpcy52ZW5kb3JzID0gPFZlbmRvcltdPiByZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25GaWx0ZXIoKXtcclxuICAgIGNvbnNvbGUubG9nKFwiRmlsdGVyIGJ1dHRvbiB0YXBwZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgb25MaXN0TWFwVG9nZ2xlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxpc3RNYXAgdG9nZ2xlIHRhcHBlZC5cIik7XHJcbiAgICB0aGlzLmxpc3RWaWV3VmlzaWJsZSA9ICF0aGlzLmxpc3RWaWV3VmlzaWJsZTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2goYXJnczogTGlzdFZpZXdFdmVudERhdGEpe1xyXG4gICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgICAuc2VhcmNoKFNlYXJjaE1vZGUuRGVmYXVsdCwgZmFsc2UpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgdGhpcy52ZW5kb3JzID0gPFZlbmRvcltdPiByZXNwb25zZS5yZXN1bHRzO1xyXG4gICAgICAgICAgYXJncy5vYmplY3Qubm90aWZ5UHVsbFRvUmVmcmVzaEZpbmlzaGVkKCk7XHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50LnJlZnJlc2goKSBFUlJPUjogJyArIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uVmVuZG9yVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKXtcclxuICAgIGxldCB2aWV3ID0gYXJncy5vYmplY3QgYXMgUmFkTGlzdFZpZXc7XHJcbiAgICBsZXQgZGF0YSA9IHZpZXcuZ2V0U2VsZWN0ZWRJdGVtcygpIGFzIFZlbmRvcltdO1xyXG5cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YVswXSkpO1xyXG4gICAgLy8gbGV0IHZlbmRvcjogVmVuZG9yID0gdGhpcy52ZW5kb3JzLmZpbmQodmVuZG9yID0+IHZlbmRvci5wbGFjZV9pZCA9PT0gYXJncy5kYXRhLnBsYWNlX2lkKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiVmVuZG9yIElEOlwiLCB2ZW5kb3IucGxhY2VfaWQpO1xyXG4gICAgLy8gLy90aGlzLnZlbmRvclNlcnZpY2Uuc2V0U2VsZWN0ZWRWZW5kb3IodmVuZG9yKTtcclxuICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInNlYXJjaC92ZW5kb3JcIiwgdmVuZG9yLnBsYWNlX2lkXSwgKTtcclxuICB9XHJcblxyXG4gIG9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSkge1xyXG4gICAgaWYgKHRoaXMuc2VhcmNoUmVzdWx0cy5uZXh0X3BhZ2VfdG9rZW4pIHtcclxuICAgICAgdGhpcy5nb29nbGVMb2NhdGlvblNlcnZpY2VcclxuICAgICAgICAuc2VhcmNoKFNlYXJjaE1vZGUuRGVmYXVsdCwgdHJ1ZSwgdGhpcy5zZWFyY2hSZXN1bHRzKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXROZXh0UGFnZUZsYWcocmVzcG9uc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICBmb3IgKGxldCB2ZW5kb3Igb2YgcmVzcG9uc2UucmVzdWx0cykge1xyXG4gICAgICAgICAgICB0aGlzLnZlbmRvcnMucHVzaCg8VmVuZG9yPnZlbmRvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhcmdzLm9iamVjdC5ub3RpZnlMb2FkT25EZW1hbmRGaW5pc2hlZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnU2VhcmNoQ29tcG9uZW50Lm9uTG9hZE1vcmVJdGVtc1JlcXVlc3RlZCgpIEVSUk9SOiAnICsgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TmV4dFBhZ2VGbGFnKHJlc3BvbnNlOiBTZWFyY2hSZXN1bHQpe1xyXG4gICAgdGhpcy5uZXh0UGFnZUZsYWcgPSAocmVzcG9uc2UubmV4dF9wYWdlX3Rva2VuKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn0iXX0=