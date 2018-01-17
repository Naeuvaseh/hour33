"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StarComponent = (function () {
    function StarComponent() {
    }
    StarComponent.prototype.ngOnInit = function () {
        this.myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    };
    StarComponent.prototype.onTap = function (num) {
        console.log('Number Tapped: ' + num);
    };
    StarComponent = __decorate([
        core_1.Component({
            selector: 'star',
            templateUrl: './components/specials/star/star.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQU1sRDtJQUlFO0lBRUEsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxHQUFXO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBZFUsYUFBYTtRQUp6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLGdEQUFnRDtTQUM5RCxDQUFDOztPQUNXLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3N0YXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NwZWNpYWxzL3N0YXIvc3Rhci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwdWJsaWMgbXlOdW1zOiBudW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKXtcclxuICAgICAgdGhpcy5teU51bXMgPSBbMSwyLDMsNCw1LDYsNyw4LDksMF07XHJcbiAgfVxyXG5cclxuICBvblRhcChudW06IG51bWJlcil7XHJcbiAgICBjb25zb2xlLmxvZygnTnVtYmVyIFRhcHBlZDogJyArIG51bSk7XHJcbiAgfVxyXG5cclxufSJdfQ==