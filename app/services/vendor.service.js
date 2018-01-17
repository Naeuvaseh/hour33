"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var day_enum_1 = require("../enums/day.enum");
var firebase = require('nativescript-plugin-firebase');
var GooglePlaces = require("nativescript-plugin-google-places");
var VendorService = (function () {
    function VendorService() {
        this.vendorList = new observable_array_1.ObservableArray([{
                id: 1,
                name: "Geckos",
                description: "All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us! All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us!",
                phone: "505-235-2833",
                rating: {
                    likes: 60,
                    dislikes: 18
                },
                happyHours: [{
                        day: day_enum_1.Day.Sunday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Sunday,
                        open: new Date("0001-01-01T08:00Z"),
                        close: new Date("0001-01-01T19:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T21:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    },
                    {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T10:05Z"),
                        close: new Date("0001-01-01T20:00Z"),
                        holiday: false
                    },
                    {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T21:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    },
                    {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T08:00Z"),
                        close: new Date("0001-01-01T11:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T11:30Z"),
                        close: new Date("0001-01-01T14:30Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T08:00Z"),
                        close: new Date("0001-01-01T08:45Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T11:30Z"),
                        close: new Date("0001-01-01T14:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T14:30Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T08:00Z"),
                        close: new Date("0001-01-01T14:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T14:15Z"),
                        close: new Date("0001-01-01T15:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T13:30Z"),
                        close: new Date("0001-01-01T16:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T16:30Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T21:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }],
                hoursOfOperation: [{
                        day: day_enum_1.Day.Sunday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T21:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T21:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T17:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T16:00Z"),
                        close: new Date("0001-01-01T22:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T17:30Z"),
                        close: new Date("0001-01-01T23:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T18:00Z"),
                        close: new Date("0001-01-01T19:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T16:15Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:30Z"),
                        close: new Date("0001-01-01T22:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T16:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T18:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:30Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T16:30Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T17:15Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T16:45Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
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
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Monday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Tuesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Wednesday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Thursday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Saturday,
                        open: new Date("0001-01-01T15:00Z"),
                        close: new Date("0001-01-01T02:00Z"),
                        holiday: false
                    },]
            }]);
        // firebase.getValue('/vendors').then(function(result) {
        //   console.log(JSON.stringify(result.value));
        // });
    }
    VendorService.prototype.onGooglePlaces = function () {
        var center = {
            latitude: -33.865143,
            longitude: 151.2099
        };
        var viewport = {
            northEast: {
                latitude: center.latitude + 0.001,
                longitude: center.longitude + 0.001
            },
            southWest: {
                latitude: center.latitude - 0.001,
                longitude: center.longitude - 0.001
            }
        };
        console.log('Viewport: ' + JSON.stringify(viewport));
        GooglePlaces.pickPlace(viewport)
            .then(function (place) { return console.log(JSON.stringify(place)); })
            .catch(function (error) { return console.log(error); });
    };
    VendorService.prototype.getVendors = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw0RkFBMEY7QUFDMUYsOENBQXdDO0FBRXhDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELGdFQUFrRTtBQUtsRTtJQUtFO1FBQ0EsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtDQUFlLENBQUMsQ0FBQztnQkFDbkMsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsV0FBVyxFQUFFLHFkQUFxZDtnQkFDbGUsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsRUFBRTtvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDRCxVQUFVLEVBQUUsQ0FBQzt3QkFDWCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO3dCQUNuQyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7d0JBQ3BDLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDbkMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO3dCQUNwQyxPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7d0JBQ25DLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDcEMsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFD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Y0FBYyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRUQsc0NBQWMsR0FBZDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsS0FBYTtRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUMzQixDQUFDO0lBN2tCVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7O09BQ0EsYUFBYSxDQStrQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQS9rQkQsSUEra0JDO0FBL2tCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy92ZW5kb3IuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XHJcbmltcG9ydCB7IERheSB9IGZyb20gJy4uL2VudW1zL2RheS5lbnVtJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XHJcbmltcG9ydCAqIGFzIEdvb2dsZVBsYWNlcyBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWdvb2dsZS1wbGFjZXMnO1xyXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZ29vZ2xlLXBsYWNlcyc7XHJcbmltcG9ydCB7IHZpZXdDbGFzc05hbWUgfSBmcm9tICdAYW5ndWxhci9jb21waWxlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZW5kb3JTZXJ2aWNlIHtcclxuICBwcml2YXRlIHZlbmRvckxpc3Q6IE9ic2VydmFibGVBcnJheTxWZW5kb3I+O1xyXG4gIHByaXZhdGUgc2VsZWN0ZWRWZW5kb3I6IFZlbmRvcjtcclxuICBwcml2YXRlIHNlbGVjdGVkVGFiOiBudW1iZXI7XHJcblxyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICB0aGlzLnZlbmRvckxpc3QgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFt7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiBcIkdlY2tvc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzISBBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzISBBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzISBBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzIVwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDA4OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE5OjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjE6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxMDowNVpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMDowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIxOjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwODowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxMTowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxMTozMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNDozMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSx7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwODowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwODo0NVpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxMTozMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNDowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNDozMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDg6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTQ6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE0OjE1WlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDEzOjMwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE2OjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE2OjMwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIxOjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9XSxcclxuICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE3OjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIxOjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH1dXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAyLFxyXG4gICAgICBuYW1lOiBcIkhhcHB5IGhvdXJzIGF0IEFub2R5bmUgUG9vbCBIYWxsICYgQ29ja3RhaWxzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkxvY2FsIGJyZXdlcnkgZm9yIHRoZSA1MDUhXCIsXHJcbiAgICAgIHBob25lOiBcIjUwNS0zNzUtMzA3M1wiLFxyXG4gICAgICByYXRpbmc6IHsgbGlrZXM6IDI4LCBkaXNsaWtlczogOCB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE2OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MzBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjM6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE4OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE5OjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE2OjE1WlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTozMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSxdXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiAzLFxyXG4gICAgICBuYW1lOiBcIkhpZ2ggTm9vbiBSZXN0YXVyYW50ICYgU2Fsb29uXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhIEFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhIEFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhIEFsbCB5b3UgY2FuIGVhdCBhbmQgZHJpbmsgZHVyaW5nIG91ciBjcmF6eSBwYXJ0eS10aW1lIGhhcHB5IGhvdXIhIFNob3RzIG9uIHVzIGFuZCBmcmVlIFViZXIncyBmb3IgYWxsLiBDb21lIGpvaW4gdXMhXCIsXHJcbiAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICByYXRpbmc6IHtcclxuICAgICAgICBsaWtlczogNjAsXHJcbiAgICAgICAgZGlzbGlrZXM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhcHB5SG91cnM6IFt7XHJcbiAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNjowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTg6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTozMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTY6MzBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MTVaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE2OjQ1WlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6IFwiR2FyZHVuaW8nc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBbGJ1cXVlcnF1ZSdzIG1vc3QgdHJ1c3RlZCBOZXcgTWV4aWNhbiByZXN0YXVyYW50IGZvciAyMCB5ZWFycy5cIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogNSxcclxuICAgICAgbmFtZTogXCJFbCBQaW50b1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgdmVudWUgZm9yIGRvZ3MgYW5kIHRoZWlyIG1vbXMuXCIsXHJcbiAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICByYXRpbmc6IHtcclxuICAgICAgICBsaWtlczogNjAsXHJcbiAgICAgICAgZGlzbGlrZXM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhcHB5SG91cnM6IFt7XHJcbiAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDYsXHJcbiAgICAgIG5hbWU6IFwiR2Vja29zXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkZhbWlseSB2ZW51ZSBmb3IgZG9ncyBhbmQgdGhlaXIgbW9tcy5cIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogNyxcclxuICAgICAgbmFtZTogXCJNYXJibGVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTG9jYWwgYnJld2VyeSBmb3IgdGhlIDUwNSFcIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTMzNS0zOTczXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogOCxcclxuICAgICAgbmFtZTogXCJUaGUgTGlicmFyeVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJOb3QgeW8nIG1vbW1hJ3Mgbm9ybWFsIGxpYnJhcnkuXCIsXHJcbiAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICByYXRpbmc6IHtcclxuICAgICAgICBsaWtlczogNjAsXHJcbiAgICAgICAgZGlzbGlrZXM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhcHB5SG91cnM6IFt7XHJcbiAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDksXHJcbiAgICAgIG5hbWU6IFwiR2FyZHVuaW8nc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBbGJ1cXVlcnF1ZSdzIG1vc3QgdHJ1c3RlZCBOZXcgTWV4aWNhbiByZXN0YXVyYW50IGZvciAyMCB5ZWFycy5cIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogMTAsXHJcbiAgICAgIG5hbWU6IFwiRWwgUGludG9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBaXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBaXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwWlwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwWlwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFpcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFpcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSxdXHJcbiAgICB9XSk7XHJcblxyXG4gICAgLy8gZmlyZWJhc2UuZ2V0VmFsdWUoJy92ZW5kb3JzJykudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlKSk7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkdvb2dsZVBsYWNlcygpe1xyXG4gICAgbGV0IGNlbnRlcjogTG9jYXRpb24gPSB7XHJcbiAgICAgIGxhdGl0dWRlOiAtMzMuODY1MTQzLFxyXG4gICAgICBsb25naXR1ZGU6IDE1MS4yMDk5XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHZpZXdwb3J0ID0ge1xyXG4gICAgICBub3J0aEVhc3Q6IHtcclxuICAgICAgICBsYXRpdHVkZTogY2VudGVyLmxhdGl0dWRlICsgMC4wMDEsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXIubG9uZ2l0dWRlICsgMC4wMDFcclxuICAgICAgfSxcclxuICAgICAgc291dGhXZXN0OiB7XHJcbiAgICAgICAgbGF0aXR1ZGU6IGNlbnRlci5sYXRpdHVkZSAtIDAuMDAxLFxyXG4gICAgICAgIGxvbmdpdHVkZTogY2VudGVyLmxvbmdpdHVkZSAtIDAuMDAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKCdWaWV3cG9ydDogJyArIEpTT04uc3RyaW5naWZ5KHZpZXdwb3J0KSk7XHJcbiAgICBHb29nbGVQbGFjZXMucGlja1BsYWNlKHZpZXdwb3J0KVxyXG4gICAgLnRoZW4ocGxhY2UgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocGxhY2UpKSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmVuZG9ycygpOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZW5kb3JMaXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRWZW5kb3IoKTogVmVuZG9yIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmVuZG9yO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRWZW5kb3IodmVuZG9yOiBWZW5kb3IpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWZW5kb3IgPSB2ZW5kb3I7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFRhYigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUYWI7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZFRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gaW5kZXg7XHJcbiAgfVxyXG5cclxufSJdfQ==