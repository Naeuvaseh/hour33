"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("./../../../../../../settings");
var moment = require("moment");
var HourListingComponent = /** @class */ (function () {
    function HourListingComponent() {
        this.theme = settings_1.Theme;
        console.log('Period: ' + JSON.stringify(this.period));
    }
    HourListingComponent.prototype.formatHours = function (hour) {
        return moment.utc(hour.open).format("h:mma").toString() + " - " + moment.utc(hour.close).format("h:mma").toString();
    };
    HourListingComponent.prototype.formatPeriod = function (period) {
        console.log(JSON.stringify(period));
        return moment.utc("0001-01-01 " + period.open.time).format("h:mma").toString() + " - " + moment.utc("0001-01-01 " + period.close.time).format("h:mma").toString();
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
        __metadata("design:type", Array)
    ], HourListingComponent.prototype, "period", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdXItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQseURBQXFEO0FBR3JELCtCQUFpQztBQU1qQztJQVNFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxJQUFnQjtRQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEgsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEssQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixHQUFXO1FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdEQsQ0FBQztJQXpCUTtRQUFSLFlBQUssRUFBRTs7dURBQXFCO0lBQ3BCO1FBQVIsWUFBSyxFQUFFOzt3REFBa0I7SUFDakI7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBQ1o7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBQ1o7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBTFYsb0JBQW9CO1FBSmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkdBQTJHO1NBQ3pILENBQUM7O09BQ1csb0JBQW9CLENBMkJoQztJQUFELDJCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3BlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaG91ci1saXN0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvaG91ci1saXN0aW5nL2hvdXItbGlzdGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvdXJMaXN0aW5nQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBob3VyczogVGltZVBlcmlvZFtdOyAvLyBDb21pbmcgZnJvbSBvdXIgcGVyc29uYWwgZGF0YVxyXG4gIEBJbnB1dCgpIHBlcmlvZDogUGVyaW9kW107IC8vIENvbWluZyBmcm9tIEdvb2dsZSBQbGFjZXMgQVBJIGlmIHByb3ZpZGVkXHJcbiAgQElucHV0KCkgcm93OiBudW1iZXI7XHJcbiAgQElucHV0KCkgY29sOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZGF5OiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyB0aGVtZTtcclxuICBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICAgIGNvbnNvbGUubG9nKCdQZXJpb2Q6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnBlcmlvZCkpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0SG91cnMoaG91cjogVGltZVBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gbW9tZW50LnV0Yyhob3VyLm9wZW4pLmZvcm1hdChcImg6bW1hXCIpLnRvU3RyaW5nKCkgKyBcIiAtIFwiICsgbW9tZW50LnV0Yyhob3VyLmNsb3NlKS5mb3JtYXQoXCJoOm1tYVwiKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0UGVyaW9kKHBlcmlvZDogUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBlcmlvZCkpO1xyXG4gICAgcmV0dXJuIG1vbWVudC51dGMoXCIwMDAxLTAxLTAxIFwiICsgcGVyaW9kLm9wZW4udGltZSkuZm9ybWF0KFwiaDptbWFcIikudG9TdHJpbmcoKSArIFwiIC0gXCIgKyBtb21lbnQudXRjKFwiMDAwMS0wMS0wMSBcIiArIHBlcmlvZC5jbG9zZS50aW1lKS5mb3JtYXQoXCJoOm1tYVwiKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0Q3VycmVudERheShkYXk6IG51bWJlcik6IGJvb2xlYW57XHJcbiAgICB2YXIgY3VycmVudERheSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4gKGRheSA9PT0gbmV3IERhdGUoKS5nZXREYXkoKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG59ICJdfQ==