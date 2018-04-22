"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../../settings");
var common_1 = require("@angular/common");
var specials_service_1 = require("../../../services/specials.service");
var moment = require("moment");
var StarComponent = /** @class */ (function () {
    /*public specials: Specials;*/
    function StarComponent(location, specialsService) {
        this.location = location;
        this.specialsService = specialsService;
        this.currentDate = moment();
        this.theme = settings_1.Theme;
        /* this.specials = this.specialsService.getSpecials();*/
    }
    StarComponent.prototype.ngOnInit = function () { };
    StarComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StarComponent.prototype, "specials", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], StarComponent.prototype, "index", void 0);
    StarComponent = __decorate([
        core_1.Component({
            selector: 'star',
            templateUrl: './components/specials/star/star.component.html'
        }),
        __metadata("design:paramtypes", [common_1.Location, specials_service_1.SpecialsService])
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCw4Q0FBMEM7QUFDMUMsMENBQTJDO0FBQzNDLHVFQUFxRTtBQUVyRSwrQkFBaUM7QUFPakM7SUFTRSw4QkFBOEI7SUFFOUIsdUJBQW9CLFFBQWtCLEVBQVMsZUFBZ0M7UUFBM0QsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUp4RSxnQkFBVyxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBSzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztRQUNwQix3REFBd0Q7SUFDekQsQ0FBQztJQUVELGdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsOEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQWxCWTtRQUFSLFlBQUssRUFBRTs7bURBQW9CO0lBQ25CO1FBQVIsWUFBSyxFQUFFOztnREFBZTtJQUhkLGFBQWE7UUFKekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxnREFBZ0Q7U0FDOUQsQ0FBQzt5Q0FZOEIsaUJBQVEsRUFBMEIsa0NBQWU7T0FYcEUsYUFBYSxDQXFCekI7SUFBRCxvQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNwZWNpYWxzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3NwZWNpYWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTcGVjaWFscyB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvc3BlY2lhbHMuaW50ZXJmYWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG4gXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3RhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbXBvbmVudHMvc3BlY2lhbHMvc3Rhci9zdGFyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvLyBJbnB1dHNcclxuICAgIEBJbnB1dCgpIHNwZWNpYWxzOiBTcGVjaWFscztcclxuICAgIEBJbnB1dCgpIGluZGV4OiBudW1iZXI7XHJcbiAgICBcclxuICBwcml2YXRlIGN1cnJlbnREYXk6IG51bWJlcjtcclxuICBwdWJsaWMgdGhlbWU7XHJcbiAgcHVibGljIGN1cnJlbnREYXRlID0gbW9tZW50KCk7XHJcblxyXG4gIC8qcHVibGljIHNwZWNpYWxzOiBTcGVjaWFsczsqL1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbixwcml2YXRlIHNwZWNpYWxzU2VydmljZTogU3BlY2lhbHNTZXJ2aWNlICkge1xyXG4gICAgdGhpcy50aGVtZSA9IFRoZW1lO1xyXG4gICAvKiB0aGlzLnNwZWNpYWxzID0gdGhpcy5zcGVjaWFsc1NlcnZpY2UuZ2V0U3BlY2lhbHMoKTsqL1xyXG4gIH0gXHJcbiBcclxuICBuZ09uSW5pdCgpeyB9XHJcblxyXG4gIGdvQmFjaygpe1xyXG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XHJcbn1cclxufVxyXG4iXX0=