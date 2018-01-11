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
        return moment.utc(hour.open).format("h:mma").toString() + " - " + moment.utc(hour.close).format("h:mma").toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdXItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQseURBQXFEO0FBRXJELCtCQUFpQztBQU1qQztJQU9FO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksSUFBZ0I7UUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RILENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBVztRQUMxQixJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDO0lBakJRO1FBQVIsWUFBSyxFQUFFOzt1REFBcUI7SUFDcEI7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBQ1o7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBQ1o7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBSlYsb0JBQW9CO1FBSmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkdBQTJHO1NBQ3pILENBQUM7O09BQ1csb0JBQW9CLENBbUJoQztJQUFELDJCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaG91ci1saXN0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvaG91ci1saXN0aW5nL2hvdXItbGlzdGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvdXJMaXN0aW5nQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBob3VyczogVGltZVBlcmlvZFtdO1xyXG4gIEBJbnB1dCgpIHJvdzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRheTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdGhlbWU7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRIb3Vycyhob3VyOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBtb21lbnQudXRjKGhvdXIub3BlbikuZm9ybWF0KFwiaDptbWFcIikudG9TdHJpbmcoKSArIFwiIC0gXCIgKyBtb21lbnQudXRjKGhvdXIuY2xvc2UpLmZvcm1hdChcImg6bW1hXCIpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRDdXJyZW50RGF5KGRheTogbnVtYmVyKTogYm9vbGVhbntcclxuICAgIHZhciBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiAoZGF5ID09PSBuZXcgRGF0ZSgpLmdldERheSgpKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn0gIl19