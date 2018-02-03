"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("./../../../../../../settings");
var moment = require("moment");
var HourListingComponent = (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdXItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQseURBQXFEO0FBR3JELCtCQUFpQztBQU1qQztJQVNFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxJQUFnQjtRQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEgsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEssQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixHQUFXO1FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUF6QlE7UUFBUixZQUFLLEVBQUU7O3VEQUFxQjtJQUNwQjtRQUFSLFlBQUssRUFBRTs7d0RBQWtCO0lBQ2pCO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUNaO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUNaO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUxWLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJHQUEyRztTQUN6SCxDQUFDOztPQUNXLG9CQUFvQixDQTJCaEM7SUFBRCwyQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLy4uLy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hvdXItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9ob3VyLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb3VyTGlzdGluZ0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaG91cnM6IFRpbWVQZXJpb2RbXTsgLy8gQ29taW5nIGZyb20gb3VyIHBlcnNvbmFsIGRhdGFcclxuICBASW5wdXQoKSBwZXJpb2Q6IFBlcmlvZFtdOyAvLyBDb21pbmcgZnJvbSBHb29nbGUgUGxhY2VzIEFQSSBpZiBwcm92aWRlZFxyXG4gIEBJbnB1dCgpIHJvdzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRheTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdGhlbWU7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICBjb25zb2xlLmxvZygnUGVyaW9kOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJpb2QpKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXJzKGhvdXI6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG1vbWVudC51dGMoaG91ci5vcGVuKS5mb3JtYXQoXCJoOm1tYVwiKS50b1N0cmluZygpICsgXCIgLSBcIiArIG1vbWVudC51dGMoaG91ci5jbG9zZSkuZm9ybWF0KFwiaDptbWFcIikudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFBlcmlvZChwZXJpb2Q6IFBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwZXJpb2QpKTtcclxuICAgIHJldHVybiBtb21lbnQudXRjKFwiMDAwMS0wMS0wMSBcIiArIHBlcmlvZC5vcGVuLnRpbWUpLmZvcm1hdChcImg6bW1hXCIpLnRvU3RyaW5nKCkgKyBcIiAtIFwiICsgbW9tZW50LnV0YyhcIjAwMDEtMDEtMDEgXCIgKyBwZXJpb2QuY2xvc2UudGltZSkuZm9ybWF0KFwiaDptbWFcIikudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEN1cnJlbnREYXkoZGF5OiBudW1iZXIpOiBib29sZWFue1xyXG4gICAgdmFyIGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChkYXkgPT09IG5ldyBEYXRlKCkuZ2V0RGF5KCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufSAiXX0=