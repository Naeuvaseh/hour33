"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("./../../../../../../settings");
var moment = require("moment");
var HourListingComponent = (function () {
    function HourListingComponent() {
        this.theme = settings_1.Theme;
    }
    HourListingComponent.prototype.formatHours = function (hour) {
        return moment(hour.open).format("h:mm A").toString() + " - " + moment(hour.close).format("h:mm A").toString();
    };
    HourListingComponent.prototype.formatCurrentDay = function (day) {
        var currentDay = new Date();
        return (day === new Date().getDay()) ? true : false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], HourListingComponent.prototype, "hours", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HourListingComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HourListingComponent.prototype, "col", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HourListingComponent.prototype, "day", void 0);
    HourListingComponent = __decorate([
        core_1.Component({
            selector: 'hour-listing',
            templateUrl: './components/search/vendor-detail/vendor-tab-detail/vendor-hours/hour-listing/hour-listing.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], HourListingComponent);
    return HourListingComponent;
}());
exports.HourListingComponent = HourListingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdXItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQseURBQXFEO0FBRXJELCtCQUFpQztBQU1qQztJQU9FO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksSUFBZ0I7UUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoSCxDQUFDO0lBRUQsK0NBQWdCLEdBQWhCLFVBQWlCLEdBQVc7UUFDMUIsSUFBSSxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQWpCUTtRQUFSLFlBQUssRUFBRTs7dURBQXFCO0lBQ3BCO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUNaO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUNaO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUpWLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJHQUEyRztTQUN6SCxDQUFDOztPQUNXLG9CQUFvQixDQW1CaEM7SUFBRCwyQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLy4uLy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hvdXItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9ob3VyLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb3VyTGlzdGluZ0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaG91cnM6IFRpbWVQZXJpb2RbXTtcclxuICBASW5wdXQoKSByb3c6IG51bWJlcjtcclxuICBASW5wdXQoKSBjb2w6IG51bWJlcjtcclxuICBASW5wdXQoKSBkYXk6IG51bWJlcjtcclxuXHJcbiAgcHVibGljIHRoZW1lO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0SG91cnMoaG91cjogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9tZW50KGhvdXIub3BlbikuZm9ybWF0KFwiaDptbSBBXCIpLnRvU3RyaW5nKCkgKyBcIiAtIFwiICsgbW9tZW50KGhvdXIuY2xvc2UpLmZvcm1hdChcImg6bW0gQVwiKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0Q3VycmVudERheShkYXk6IG51bWJlcik6IGJvb2xlYW57XHJcbiAgICB2YXIgY3VycmVudERheSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gKGRheSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59Il19