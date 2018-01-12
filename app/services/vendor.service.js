"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var day_enum_1 = require("../enums/day.enum");
var firebase = require('nativescript-plugin-firebase');
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Sunday,
                        open: new Date("0001-01-01T08:00"),
                        close: new Date("0001-01-01T19:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T21:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    },
                    {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T21:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    },
                    {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T08:00"),
                        close: new Date("0001-01-01T08:45"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T11:30"),
                        close: new Date("0001-01-01T14:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T14:30"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T08:00"),
                        close: new Date("0001-01-01T10:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T10:15"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T18:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T21:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }],
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T21:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T21:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T16:00"),
                        close: new Date("0001-01-01T22:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T17:30"),
                        close: new Date("0001-01-01T23:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T18:00"),
                        close: new Date("0001-01-01T19:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T16:15"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:30"),
                        close: new Date("0001-01-01T22:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T16:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T18:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:30"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T16:30"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T17:15"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T16:45"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T02:00"),
                        holiday: false
                    },]
            }]);
        // firebase.getValue('/vendors').then(function(result) {
        //   console.log(JSON.stringify(result.value));
        // });
    }
    VendorService.prototype.getSetVendors = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw0RkFBMEY7QUFDMUYsOENBQXdDO0FBQ3hDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBR3pEO0lBS0U7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNYLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7d0JBQ2xDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbkMsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUNsQyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7d0JBQ25DLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxj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QUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUNsQyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7d0JBQ25DLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSixDQUFDLENBQUMsQ0FBQztRQUVKLHdEQUF3RDtRQUN4RCwrQ0FBK0M7UUFDL0MsTUFBTTtJQUNSLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsTUFBYztRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsS0FBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBbGlCVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQW1pQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5pQkQsSUFtaUJDO0FBbmlCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uL2VudW1zL2RheS5lbnVtJztcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIHZlbmRvckxpc3Q6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+O1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRWZW5kb3I6IFZlbmRvcjtcclxuICBwcml2YXRlIHNlbGVjdGVkVGFiOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudmVuZG9yTGlzdCA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW3tcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6IFwiR2Vja29zXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZhbWlseSB2ZW51ZSBmb3IgZG9ncyBhbmQgdGhlaXIgbW9tcy5cIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDg6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxOTowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE3OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIxOjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIxOjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDA4OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDg6NDVcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxMTozMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE0OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTQ6MzBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwODowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDEwOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDEwOjE1XCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxODowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjE6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9XSxcclxuICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjE6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjE6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE3OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE3OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogXCJIYXBweSBob3VycyBhdCBBbm9keW5lIFBvb2wgSGFsbCAmIENvY2t0YWlsc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJMb2NhbCBicmV3ZXJ5IGZvciB0aGUgNTA1IVwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMzc1LTMwNzNcIixcclxuICAgICAgcmF0aW5nOiB7IGxpa2VzOiAyOCwgZGlzbGlrZXM6IDggfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTY6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MzBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxODowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE5OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTY6MTVcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTozMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6IFwiSGlnaCBOb29uIFJlc3RhdXJhbnQgJiBTYWxvb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyEgQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyEgQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyEgQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyFcIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE2OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTg6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MzBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNjozMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MTVcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNjo0NVwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6IFwiR2FyZHVuaW8nc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBbGJ1cXVlcnF1ZSdzIG1vc3QgdHJ1c3RlZCBOZXcgTWV4aWNhbiByZXN0YXVyYW50IGZvciAyMCB5ZWFycy5cIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIG5hbWU6IFwiRWwgUGludG9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogNixcclxuICAgICAgbmFtZTogXCJHZWNrb3NcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogNyxcclxuICAgICAgbmFtZTogXCJNYXJibGVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTG9jYWwgYnJld2VyeSBmb3IgdGhlIDUwNSFcIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTMzNS0zOTczXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIG5hbWU6IFwiVGhlIExpYnJhcnlcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTm90IHlvJyBtb21tYSdzIG5vcm1hbCBsaWJyYXJ5LlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgbmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFsYnVxdWVycXVlJ3MgbW9zdCB0cnVzdGVkIE5ldyBNZXhpY2FuIHJlc3RhdXJhbnQgZm9yIDIwIHllYXJzLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogMTAsXHJcbiAgICAgIG5hbWU6IFwiRWwgUGludG9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfV0pO1xyXG5cclxuICAgIC8vIGZpcmViYXNlLmdldFZhbHVlKCcvdmVuZG9ycycpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZSkpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBnZXRTZXRWZW5kb3JzKCk6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+IHtcclxuICAgIHJldHVybiB0aGlzLnZlbmRvckxpc3Q7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFZlbmRvcigpOiBWZW5kb3Ige1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWZW5kb3I7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZFZlbmRvcih2ZW5kb3I6IFZlbmRvcikge1xyXG4gICAgdGhpcy5zZWxlY3RlZFZlbmRvciA9IHZlbmRvcjtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkVGFiKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFRhYjtcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkVGFiKGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBpbmRleDtcclxuICB9XHJcbn0iXX0=