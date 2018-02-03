"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("./../../../../../../settings");
var moment = require("moment");
var HourListingComponent = (function () {
    function HourListingComponent() {
        this.theme = settings_1.Theme;
<<<<<<< HEAD
=======
        console.log('Period: ' + JSON.stringify(this.period));
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
    }
    HourListingComponent.prototype.formatHours = function (hour) {
        return moment.utc(hour.open).format("h:mma").toString() + " - " + moment.utc(hour.close).format("h:mma").toString();
    };
<<<<<<< HEAD
=======
    HourListingComponent.prototype.formatPeriod = function (period) {
        console.log(JSON.stringify(period));
        return moment.utc("0001-01-01 " + period.open.time).format("h:mma").toString() + " - " + moment.utc("0001-01-01 " + period.close.time).format("h:mma").toString();
    };
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
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
<<<<<<< HEAD
=======
        __metadata("design:type", Array)
    ], HourListingComponent.prototype, "period", void 0);
    __decorate([
        core_1.Input(),
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
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
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdXItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQseURBQXFEO0FBRXJELCtCQUFpQztBQU1qQztJQU9FO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksSUFBZ0I7UUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RILENBQUM7SUFFRCwrQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBVztRQUMxQixJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0RCxDQUFDO0lBakJRO1FBQVIsWUFBSyxFQUFFOzt1REFBcUI7SUFDcEI7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBQ1o7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBQ1o7UUFBUixZQUFLLEVBQUU7O3FEQUFhO0lBSlYsb0JBQW9CO1FBSmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixXQUFXLEVBQUUsMkdBQTJHO1NBQ3pILENBQUM7O09BQ1csb0JBQW9CLENBbUJoQztJQUFELDJCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vLi4vLi4vLi4vLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaG91ci1saXN0aW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9zZWFyY2gvdmVuZG9yLWRldGFpbC92ZW5kb3ItdGFiLWRldGFpbC92ZW5kb3ItaG91cnMvaG91ci1saXN0aW5nL2hvdXItbGlzdGluZy5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvdXJMaXN0aW5nQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBob3VyczogVGltZVBlcmlvZFtdO1xyXG4gIEBJbnB1dCgpIHJvdzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRheTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdGhlbWU7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRIb3Vycyhob3VyOiBUaW1lUGVyaW9kKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBtb21lbnQudXRjKGhvdXIub3BlbikuZm9ybWF0KFwiaDptbWFcIikudG9TdHJpbmcoKSArIFwiIC0gXCIgKyBtb21lbnQudXRjKGhvdXIuY2xvc2UpLmZvcm1hdChcImg6bW1hXCIpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRDdXJyZW50RGF5KGRheTogbnVtYmVyKTogYm9vbGVhbntcclxuICAgIHZhciBjdXJyZW50RGF5ID0gbmV3IERhdGUoKTtcclxuICAgIHJldHVybiAoZGF5ID09PSBuZXcgRGF0ZSgpLmdldERheSgpKSA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcbn0gIl19
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1saXN0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdXItbGlzdGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQseURBQXFEO0FBR3JELCtCQUFpQztBQU1qQztJQVNFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxnQkFBSyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFBWSxJQUFnQjtRQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEgsQ0FBQztJQUVELDJDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEssQ0FBQztJQUVELCtDQUFnQixHQUFoQixVQUFpQixHQUFXO1FBQzFCLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDNUIsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3RELENBQUM7SUF6QlE7UUFBUixZQUFLLEVBQUU7O3VEQUFxQjtJQUNwQjtRQUFSLFlBQUssRUFBRTs7d0RBQWtCO0lBQ2pCO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUNaO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUNaO1FBQVIsWUFBSyxFQUFFOztxREFBYTtJQUxWLG9CQUFvQjtRQUpoQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJHQUEyRztTQUN6SCxDQUFDOztPQUNXLG9CQUFvQixDQTJCaEM7SUFBRCwyQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLy4uLy4uLy4uLy4uLy4uLy4uL3NldHRpbmdzJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy9wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2hvdXItbGlzdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc2VhcmNoL3ZlbmRvci1kZXRhaWwvdmVuZG9yLXRhYi1kZXRhaWwvdmVuZG9yLWhvdXJzL2hvdXItbGlzdGluZy9ob3VyLWxpc3RpbmcuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb3VyTGlzdGluZ0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaG91cnM6IFRpbWVQZXJpb2RbXTsgLy8gQ29taW5nIGZyb20gb3VyIHBlcnNvbmFsIGRhdGFcclxuICBASW5wdXQoKSBwZXJpb2Q6IFBlcmlvZFtdOyAvLyBDb21pbmcgZnJvbSBHb29nbGUgUGxhY2VzIEFQSSBpZiBwcm92aWRlZFxyXG4gIEBJbnB1dCgpIHJvdzogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGNvbDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRheTogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgdGhlbWU7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgICBjb25zb2xlLmxvZygnUGVyaW9kOiAnICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJpb2QpKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEhvdXJzKGhvdXI6IFRpbWVQZXJpb2QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIG1vbWVudC51dGMoaG91ci5vcGVuKS5mb3JtYXQoXCJoOm1tYVwiKS50b1N0cmluZygpICsgXCIgLSBcIiArIG1vbWVudC51dGMoaG91ci5jbG9zZSkuZm9ybWF0KFwiaDptbWFcIikudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdFBlcmlvZChwZXJpb2Q6IFBlcmlvZCk6IHN0cmluZyB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwZXJpb2QpKTtcclxuICAgIHJldHVybiBtb21lbnQudXRjKFwiMDAwMS0wMS0wMSBcIiArIHBlcmlvZC5vcGVuLnRpbWUpLmZvcm1hdChcImg6bW1hXCIpLnRvU3RyaW5nKCkgKyBcIiAtIFwiICsgbW9tZW50LnV0YyhcIjAwMDEtMDEtMDEgXCIgKyBwZXJpb2QuY2xvc2UudGltZSkuZm9ybWF0KFwiaDptbWFcIikudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGZvcm1hdEN1cnJlbnREYXkoZGF5OiBudW1iZXIpOiBib29sZWFue1xyXG4gICAgdmFyIGN1cnJlbnREYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIChkYXkgPT09IG5ldyBEYXRlKCkuZ2V0RGF5KCkpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxufSAiXX0=
>>>>>>> ee0648c0654d85533f2dc27ac4f49ec1b6f60a4f
