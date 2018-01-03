"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var day_enum_1 = require("../enums/day.enum");
var VendorService = (function () {
    function VendorService() {
        this.vendorList = new observable_array_1.ObservableArray([{
                id: 1,
                name: "Geckos",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "5:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Sunday,
                        open: "8:00 AM",
                        close: "7:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "5:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "9:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    },
                    {
                        day: day_enum_1.Day.Tuesday,
                        open: "9:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "5:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "5:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "9:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "5:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "9:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "5:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "9:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "5:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "9:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    }]
            }, {
                id: 2,
                name: "Happy hours at Anodyne Pool Hall & Cocktails",
                description: "Local brewery for the 505!",
                phone: "505-375-3073",
                rating: { likes: 28, dislikes: 8 },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "4:00 PM",
                        close: "10:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "5:30 PM",
                        close: "11:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "6:00 PM",
                        close: "7:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "4:15 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:30 PM",
                        close: "10:00 PM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 3,
                name: "High Noon Restaurant & Saloon",
                description: "All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us!",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "4:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "6:00 PM",
                        close: "12:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:30 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "4:30 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "5:15 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "4:45 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 4,
                name: "Gardunio's",
                description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 5,
                name: "El Pinto",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 6,
                name: "Geckos",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 7,
                name: "Marble",
                description: "Local brewery for the 505!",
                phone: "505-335-3973",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 8,
                name: "The Library",
                description: "Not yo' momma's normal library.",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 9,
                name: "Gardunio's",
                description: "Albuquerque's most trusted New Mexican restaurant for 20 years.",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }, {
                id: 10,
                name: "El Pinto",
                description: "Family venue for dogs and their moms.",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: "3:00 PM",
                        close: "2:00 AM",
                        holiday: false
                    },]
            }]);
    }
    VendorService.prototype.getSetVendors = function () {
        console.log('Requesting Vendor List.');
        return this.vendorList;
    };
    VendorService.prototype.getSelectedVendor = function () {
        return this.selectedVendor;
    };
    VendorService.prototype.setSelectedVendor = function (vendor) {
        this.selectedVendor = vendor;
    };
    VendorService.prototype.getSelectedTab = function () {
        return this.selectedTab;
    };
    VendorService.prototype.setSelectedTab = function (index) {
        this.selectedTab = index;
    };
    VendorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], VendorService);
    return VendorService;
}());
exports.VendorService = VendorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw0RkFBMEY7QUFDMUYsOENBQXdDO0FBSXhDO0lBS0k7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxDQUFDO2dCQUNuQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNYLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBQzt3QkFDQSxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUM7d0JBQ0EsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFDO3dCQUNBLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsVUFBVTt3QkFDakIsT0FBTyxFQUFFLEtBQUs7cUJBQ2Y7b0JBQ0Q7d0JBQ0UsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsVUFBVTt3QkFDakIsT0FBTyxFQUFFLEtB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ci9jb3JlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uL2VudW1zL2RheS5lbnVtJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdmVuZG9yTGlzdDogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj47XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkVmVuZG9yOiBWZW5kb3I7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkVGFiOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy52ZW5kb3JMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheShbe1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogXCJHZWNrb3NcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiNTowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjg6MDAgQU1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCI3OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjU6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI5OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjk6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIxMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiNTowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiNTowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI5OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiNTowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiOTowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjEyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCI1OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiOTowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjEyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjU6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjk6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIxMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkhhcHB5IGhvdXJzIGF0IEFub2R5bmUgUG9vbCBIYWxsICYgQ29ja3RhaWxzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvY2FsIGJyZXdlcnkgZm9yIHRoZSA1MDUhXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0zNzUtMzA3M1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgbGlrZXM6IDI4LCBkaXNsaWtlczogOCB9LCBcclxuICAgICAgICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNDowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjEwOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI1OjMwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTE6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNjowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjc6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI0OjE1IFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjMwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTA6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgbmFtZTogXCJIaWdoIE5vb24gUmVzdGF1cmFudCAmIFNhbG9vblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzISBBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzISBBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzISBBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzIVwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI0OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI2OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MzAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjQ6MzAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNToxNSBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNDo0NSBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgbmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsYnVxdWVycXVlJ3MgbW9zdCB0cnVzdGVkIE5ldyBNZXhpY2FuIHJlc3RhdXJhbnQgZm9yIDIwIHllYXJzLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkVsIFBpbnRvXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhbWlseSB2ZW51ZSBmb3IgZG9ncyBhbmQgdGhlaXIgbW9tcy5cIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgICAgICAgIHJhdGluZzogeyBcclxuICAgICAgICAgICAgICBsaWtlczogNjAsIFxyXG4gICAgICAgICAgICAgIGRpc2xpa2VzOiAxOCBcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGhhcHB5SG91cnM6IFt7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgbmFtZTogXCJHZWNrb3NcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICBuYW1lOiBcIk1hcmJsZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb2NhbCBicmV3ZXJ5IGZvciB0aGUgNTA1IVwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMzM1LTM5NzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgICBuYW1lOiBcIlRoZSBMaWJyYXJ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk5vdCB5bycgbW9tbWEncyBub3JtYWwgbGlicmFyeS5cIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgICAgICAgIHJhdGluZzogeyBcclxuICAgICAgICAgICAgICBsaWtlczogNjAsIFxyXG4gICAgICAgICAgICAgIGRpc2xpa2VzOiAxOCBcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGhhcHB5SG91cnM6IFt7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogOSxcclxuICAgICAgICAgICAgbmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsYnVxdWVycXVlJ3MgbW9zdCB0cnVzdGVkIE5ldyBNZXhpY2FuIHJlc3RhdXJhbnQgZm9yIDIwIHllYXJzLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiAxMCxcclxuICAgICAgICAgICAgbmFtZTogXCJFbCBQaW50b1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgdmVudWUgZm9yIGRvZ3MgYW5kIHRoZWlyIG1vbXMuXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICAgICB9XSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRTZXRWZW5kb3JzKCk6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdGluZyBWZW5kb3IgTGlzdC4nKTtcclxuICAgICAgICByZXR1cm4gdGhpcy52ZW5kb3JMaXN0O1xyXG4gICAgIH1cclxuXHJcbiAgICAgZ2V0U2VsZWN0ZWRWZW5kb3IoKTogVmVuZG9ye1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmVuZG9yO1xyXG4gICAgIH1cclxuXHJcbiAgICAgc2V0U2VsZWN0ZWRWZW5kb3IodmVuZG9yOiBWZW5kb3Ipe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWZW5kb3IgPSB2ZW5kb3I7XHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRTZWxlY3RlZFRhYigpOiBudW1iZXIge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUYWI7XHJcbiAgICAgfVxyXG5cclxuICAgICBzZXRTZWxlY3RlZFRhYihpbmRleDogbnVtYmVyKXtcclxuICAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBpbmRleDtcclxuICAgICB9XHJcbn0iXX0=