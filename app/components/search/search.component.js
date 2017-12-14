"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_1 = require("../../settings");
// Enums
var day_enum_1 = require("../../enums/day.enum");
var SearchComponent = (function () {
    function SearchComponent() {
        this.items = [{
                vendorName: "Geckos",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "Marble",
                description: "Local brewery for the 505!",
                phone: "505-335-3973",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "The Library",
                description: "Not yo' momma's normal library.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "Gardunio's",
                description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "El Pinto",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "Geckos",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "Marble",
                description: "Local brewery for the 505!",
                phone: "505-335-3973",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "The Library",
                description: "Not yo' momma's normal library.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "Gardunio's",
                description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                vendorName: "El Pinto",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "11:00 AM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            },];
        this.theme = settings_1.Theme;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMkNBQXVDO0FBS3ZDLFFBQVE7QUFDUixpREFBMkM7QUFNM0M7SUFxWkU7UUFsWlEsVUFBSyxHQUFtQixDQUFDO2dCQUMvQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsVUFBVTt3QkFDaEIsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUM7d0JBQ0EsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxVQUFVO3dCQUNoQixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBQzt3QkFDQSxHQUFHLEVBQUUsY0FBRyxDQUFDLE9BQU87d0JBQ2hCLElBQUksRUFBRSxVQUFVO3dCQUNoQixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBQzt3QkFDQSxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxVQUFVO3dCQUNoQixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBQzt3QkFDQSxHQUFHLEVBQUUsY0FBRyxDQUFDLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxVQUFVO3dCQUNoQixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBQzt3QkFDQSxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFVBQVU7d0JBQ2hCLEtBQUssRUFBRSxT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cG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWUgfSBmcm9tICcuLi8uLi9zZXR0aW5ncyc7XHJcblxyXG4vLyBJbnRlcmZhY2VzXHJcbmltcG9ydCB7IFNlYXJjaFJlc3VsdCB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2VhcmNoLXJlc3VsdC5pbnRlcmZhY2UnO1xyXG5cclxuLy8gRW51bXNcclxuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vLi4vZW51bXMvZGF5LmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBwcml2YXRlIHRoZW1lO1xyXG4gIHByaXZhdGUgaXRlbXM6IFNlYXJjaFJlc3VsdFtdID0gW3tcclxuICAgIHZlbmRvck5hbWU6IFwiR2Vja29zXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgdmVudWUgZm9yIGRvZ3MgYW5kIHRoZWlyIG1vbXMuXCIsXHJcbiAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgIGhvdXJzT2ZPcGVyYXRpb246IFt7XHJcbiAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICB9LHtcclxuICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgaG9saWRheTogZmFsc2VcclxuICAgIH0se1xyXG4gICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgaG9saWRheTogZmFsc2VcclxuICAgIH0se1xyXG4gICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgfSx7XHJcbiAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgaG9saWRheTogZmFsc2VcclxuICAgIH0se1xyXG4gICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgfSx7XHJcbiAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgaG9saWRheTogZmFsc2VcclxuICAgIH0sXVxyXG4gICAgfSx7XHJcbiAgICAgIHZlbmRvck5hbWU6IFwiTWFyYmxlXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkxvY2FsIGJyZXdlcnkgZm9yIHRoZSA1MDUhXCIsXHJcbiAgICAgIHBob25lOiBcIjUwNS0zMzUtMzk3M1wiLFxyXG4gICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSxdXHJcbiAgICB9LHtcclxuICAgICAgdmVuZG9yTmFtZTogXCJUaGUgTGlicmFyeVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJOb3QgeW8nIG1vbW1hJ3Mgbm9ybWFsIGxpYnJhcnkuXCIsXHJcbiAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSxdXHJcbiAgICB9LHtcclxuICAgICAgdmVuZG9yTmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFsYnVxdWVycXVlJ3MgbW9zdCB0cnVzdGVkIE5ldyBNZXhpY2FuIHJlc3RhdXJhbnQgZm9yIDIwIHllYXJzLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSx7XHJcbiAgICAgIHZlbmRvck5hbWU6IFwiRWwgUGludG9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSx7XHJcbiAgICAgIHZlbmRvck5hbWU6IFwiR2Vja29zXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZhbWlseSB2ZW51ZSBmb3IgZG9ncyBhbmQgdGhlaXIgbW9tcy5cIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIGhvdXJzT2ZPcGVyYXRpb246IFt7XHJcbiAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0se1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgICAgfSx7XHJcbiAgICAgICAgdmVuZG9yTmFtZTogXCJNYXJibGVcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMb2NhbCBicmV3ZXJ5IGZvciB0aGUgNTA1IVwiLFxyXG4gICAgICAgIHBob25lOiBcIjUwNS0zMzUtMzk3M1wiLFxyXG4gICAgICAgIGhvdXJzT2ZPcGVyYXRpb246IFt7XHJcbiAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSxdXHJcbiAgICAgIH0se1xyXG4gICAgICAgIHZlbmRvck5hbWU6IFwiVGhlIExpYnJhcnlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOb3QgeW8nIG1vbW1hJ3Mgbm9ybWFsIGxpYnJhcnkuXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LF1cclxuICAgICAgfSx7XHJcbiAgICAgICAgdmVuZG9yTmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQWxidXF1ZXJxdWUncyBtb3N0IHRydXN0ZWQgTmV3IE1leGljYW4gcmVzdGF1cmFudCBmb3IgMjAgeWVhcnMuXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LF1cclxuICAgICAgfSx7XHJcbiAgICAgICAgdmVuZG9yTmFtZTogXCJFbCBQaW50b1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhbWlseSB2ZW51ZSBmb3IgZG9ncyBhbmQgdGhlaXIgbW9tcy5cIixcclxuICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgb3BlbjogXCIxMTowMCBBTVwiLFxyXG4gICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICB9LHtcclxuICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgIG9wZW46IFwiMTE6MDAgQU1cIixcclxuICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICBvcGVuOiBcIjExOjAwIEFNXCIsXHJcbiAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgIH0sXVxyXG4gICAgICB9LF1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRoZW1lID0gVGhlbWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpe1xyXG5cclxuICB9XHJcbn0iXX0=