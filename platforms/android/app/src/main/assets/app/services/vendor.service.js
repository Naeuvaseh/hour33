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
                hoursOfOperation: [{
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
                id: 2,
                name: "Happy hours at Anodyne Pool Hall & Cocktails",
                description: "Local brewery for the 505!",
                phone: "505-375-3073",
                rating: { likes: 28, dislikes: 8 },
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
                hoursOfOperation: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw0RkFBMEY7QUFDMUYsOENBQXdDO0FBSXhDO0lBS0k7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxDQUFDO2dCQUNuQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSw4Q0FBOEM7Z0JBQ3BELFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLEtBQUssRUFBRSxjQUFjO2dCQUNyQixNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7Z0JBQ2xDLGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsVUFBVTt3QkFDakIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFVBQVU7d0JBQ2pCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsVUFBVTt3QkFDakIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxVQUFVO3dCQUNqQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSwrQkFBK0I7Z0JBQ3JDLFdBQVcsRUFBRSxxZEFBcWQ7Z0JBQ2xlLEtBQUssRUFBRSxjQUFjO2dCQUNyQixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLEVBQUU7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDakIsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsVUFBVTt3QkFDakIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE9BQU87d0JBQ2hCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsU0FBUzt3QkFDbEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxRQUFRO3dCQUNqQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxRQUFRO3dCQUNqQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTthQUNKLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFdBQVcsRUFBRSxpRUFBaUU7Z0JBQzlFLEtBQUssRUFBRSxjQUFjO2dCQUNyQixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLEVBQUU7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDakIsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE9BQU87d0JBQ2hCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsU0FBUzt3QkFDbEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxRQUFRO3dCQUNqQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxRQUFRO3dCQUNqQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTthQUNKLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELEtBQUssRUFBRSxjQUFjO2dCQUNyQixNQUFNLEVBQUU7b0JBQ04sS0FBSyxFQUFFLEVBQUU7b0JBQ1QsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0QsZ0JBQWdCLEVBQUUsQ0FBQzt3QkFDakIsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE9BQU87d0JBQ2hCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsU0FBUzt3QkFDbEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxRQUFRO3dCQUNqQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxRQUFRO3dCQUNqQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTthQUNKLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsRUFBRTtvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDRCxnQkFBZ0IsRUFBRSxDQUFDO3dCQUNqQixHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsT0FBTzt3QkFDaEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxTQUFTO3dCQUNsQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO2FBQ0osRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxhQUFhO2dCQUNuQixXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSixFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxZQUFZO2dCQUNsQixXQUFXLEVBQUUsaUVBQWlFO2dCQUM5RSxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSixFQUFFO2dCQUNELEVBQUUsRUFBRSxFQUFFO2dCQUNOLElBQUksRUFBRSxVQUFVO2dCQUNoQixXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELGdCQUFnQixFQUFFLENBQUM7d0JBQ2pCLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSCxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxxQ0FBYSxHQUFiO1FBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzFCLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM5QixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLE1BQWM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQTNkTyxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQTRkekI7SUFBRCxvQkFBQztDQUFBLEFBNWRELElBNGRDO0FBNWRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWZW5kb3IgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3ZlbmRvci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5JztcclxuaW1wb3J0IHsgRGF5IH0gZnJvbSAnLi4vZW51bXMvZGF5LmVudW0nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFZlbmRvclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB2ZW5kb3JMaXN0OiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRWZW5kb3I6IFZlbmRvcjtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRUYWI6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnZlbmRvckxpc3QgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFt7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkdlY2tvc1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgdmVudWUgZm9yIGRvZ3MgYW5kIHRoZWlyIG1vbXMuXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiSGFwcHkgaG91cnMgYXQgQW5vZHluZSBQb29sIEhhbGwgJiBDb2NrdGFpbHNcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9jYWwgYnJld2VyeSBmb3IgdGhlIDUwNSFcIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiNTA1LTM3NS0zMDczXCIsXHJcbiAgICAgICAgICAgIHJhdGluZzogeyBsaWtlczogMjgsIGRpc2xpa2VzOiA4IH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIxMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI0OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTA6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjU6MzAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIxMTowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI2OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiNzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjQ6MTUgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MzAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIxMDowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkhpZ2ggTm9vbiBSZXN0YXVyYW50ICYgU2Fsb29uXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhIEFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhIEFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhIEFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjQ6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjY6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIxMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzozMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNDozMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI1OjE1IFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI0OjQ1IFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkdhcmR1bmlvJ3NcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWxidXF1ZXJxdWUncyBtb3N0IHRydXN0ZWQgTmV3IE1leGljYW4gcmVzdGF1cmFudCBmb3IgMjAgeWVhcnMuXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiRWwgUGludG9cIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkdlY2tvc1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgdmVudWUgZm9yIGRvZ3MgYW5kIHRoZWlyIG1vbXMuXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiTWFyYmxlXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvY2FsIGJyZXdlcnkgZm9yIHRoZSA1MDUhXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0zMzUtMzk3M1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIG5hbWU6IFwiVGhlIExpYnJhcnlcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTm90IHlvJyBtb21tYSdzIG5vcm1hbCBsaWJyYXJ5LlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA5LFxyXG4gICAgICAgICAgICBuYW1lOiBcIkdhcmR1bmlvJ3NcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWxidXF1ZXJxdWUncyBtb3N0IHRydXN0ZWQgTmV3IE1leGljYW4gcmVzdGF1cmFudCBmb3IgMjAgeWVhcnMuXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IDEwLFxyXG4gICAgICAgICAgICBuYW1lOiBcIkVsIFBpbnRvXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhbWlseSB2ZW51ZSBmb3IgZG9ncyBhbmQgdGhlaXIgbW9tcy5cIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgICAgICAgIHJhdGluZzogeyBcclxuICAgICAgICAgICAgICBsaWtlczogNjAsIFxyXG4gICAgICAgICAgICAgIGRpc2xpa2VzOiAxOCBcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGhvdXJzT2ZPcGVyYXRpb246IFt7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgIH1dKTtcclxuICAgICB9XHJcblxyXG4gICAgIGdldFNldFZlbmRvcnMoKTogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXF1ZXN0aW5nIFZlbmRvciBMaXN0LicpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZlbmRvckxpc3Q7XHJcbiAgICAgfVxyXG5cclxuICAgICBnZXRTZWxlY3RlZFZlbmRvcigpOiBWZW5kb3J7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRWZW5kb3I7XHJcbiAgICAgfVxyXG5cclxuICAgICBzZXRTZWxlY3RlZFZlbmRvcih2ZW5kb3I6IFZlbmRvcil7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZlbmRvciA9IHZlbmRvcjtcclxuICAgICB9XHJcblxyXG4gICAgIGdldFNlbGVjdGVkVGFiKCk6IG51bWJlciB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFRhYjtcclxuICAgICB9XHJcblxyXG4gICAgIHNldFNlbGVjdGVkVGFiKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICAgdGhpcy5zZWxlY3RlZFRhYiA9IGluZGV4O1xyXG4gICAgIH1cclxufSJdfQ==