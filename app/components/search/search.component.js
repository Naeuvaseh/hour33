"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
var SearchComponent = (function () {
    function SearchComponent() {
        this.items = [{
                vendorName: "Geckos",
                description: "A venue that everyone and their dogs can enjoy!",
                phone: "505-239-9825",
                hoursOfOperation: [{
                        day: "Monday",
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },
                ]
            },
            {
                vendorName: "Geckos",
                description: "A venue that everyone and their dogs can enjoy!",
                phone: "505-239-9825",
                hoursOfOperation: [{
                        day: "Monday",
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },
                ]
            },
            {
                vendorName: "Geckos",
                description: "A venue that everyone and their dogs can enjoy!",
                phone: "505-239-9825",
                hoursOfOperation: [{
                        day: "Monday",
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },
                ]
            }];
        this.theme = settings_1.Theme;
    }
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: './components/search/search.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMkNBQXVDO0FBT3ZDO0lBd0NFO1FBckNRLFVBQUssR0FBbUIsQ0FBQztnQkFDL0IsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFdBQVcsRUFBRSxpREFBaUQ7Z0JBQzlELEtBQUssRUFBRSxjQUFjO2dCQUNyQixnQkFBZ0IsRUFBRSxDQUFDO3dCQUNqQixHQUFHLEVBQUUsUUFBUTt3QkFDYixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmO2lCQUNBO2FBQ0Y7WUFDRDtnQkFDRSxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsV0FBVyxFQUFFLGlEQUFpRDtnQkFDOUQsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxRQUFRO3dCQUNiLElBQUksRUFBRSxVQUFVO3dCQUNoQixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2Y7aUJBQ0E7YUFDRjtZQUNEO2dCQUNFLFVBQVUsRUFBRSxRQUFRO2dCQUNwQixXQUFXLEVBQUUsaURBQWlEO2dCQUM5RCxLQUFLLEVBQUUsY0FBYztnQkFDckIsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDakIsR0FBRyxFQUFFLFFBQVE7d0JBQ2IsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZjtpQkFDQTthQUNGLENBQUMsQ0FBQTtRQUdBLElBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQUssQ0FBQztJQUNyQixDQUFDO0lBMUNVLGVBQWU7UUFKM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSwyQ0FBMkM7U0FDekQsQ0FBQzs7T0FDVyxlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQge1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgaXRlbXM6IFNlYXJjaFJlc3VsdFtdID0gW3tcclxuICAgIHZlbmRvck5hbWU6IFwiR2Vja29zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHZlbnVlIHRoYXQgZXZlcnlvbmUgYW5kIHRoZWlyIGRvZ3MgY2FuIGVuam95IVwiLFxyXG4gICAgcGhvbmU6IFwiNTA1LTIzOS05ODI1XCIsXHJcbiAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICBkYXk6IFwiTW9uZGF5XCIsXHJcbiAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHZlbmRvck5hbWU6IFwiR2Vja29zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHZlbnVlIHRoYXQgZXZlcnlvbmUgYW5kIHRoZWlyIGRvZ3MgY2FuIGVuam95IVwiLFxyXG4gICAgcGhvbmU6IFwiNTA1LTIzOS05ODI1XCIsXHJcbiAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICBkYXk6IFwiTW9uZGF5XCIsXHJcbiAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIHZlbmRvck5hbWU6IFwiR2Vja29zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJBIHZlbnVlIHRoYXQgZXZlcnlvbmUgYW5kIHRoZWlyIGRvZ3MgY2FuIGVuam95IVwiLFxyXG4gICAgcGhvbmU6IFwiNTA1LTIzOS05ODI1XCIsXHJcbiAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICBkYXk6IFwiTW9uZGF5XCIsXHJcbiAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIF1cclxuICB9XVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGhlbWUgPSBUaGVtZTtcclxuICB9XHJcbn0iXX0=