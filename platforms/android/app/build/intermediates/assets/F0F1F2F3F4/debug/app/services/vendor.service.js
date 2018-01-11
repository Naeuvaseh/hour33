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
                        open: new Date("0001-01-01T15:00"),
                        close: new Date("0001-01-01T17:00"),
                        holiday: false
                    }, {
                        day: day_enum_1.Day.Friday,
                        open: new Date("0001-01-01T21:00"),
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
        // const vendorCol = firestore.collection("vendors");
        // vendorCol.get().then(querySnapshot => {
        //   querySnapshot.forEach(doc => {
        //     console.log(`VendorService(): ${doc.id} => ${JSON.stringify(doc.data())}`);
        //   });
        // }, (error) =>{
        //   console.log('VendorService() ERROR: ' + JSON.stringify(error));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw0RkFBMEY7QUFDMUYsOENBQXdDO0FBSXhDO0lBS0U7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxDQUFDO2dCQUNyQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxLQUFLLEVBQUUsY0FBYztnQkFDckIsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxFQUFFO29CQUNULFFBQVEsRUFBRSxFQUFFO2lCQUNiO2dCQUNELFVBQVUsRUFBRSxDQUFDO3dCQUNYLEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7d0JBQ2xDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbkMsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUNsQyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7d0JBQ25DLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbEMsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDO3dCQUNuQyxPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsTUFBTTt3QkFDZixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JB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QUMsa0JBQWtCLENBQUM7d0JBQ2xDLEtBQUssRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDbkMsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTthQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUoscURBQXFEO1FBRXJELDBDQUEwQztRQUMxQyxtQ0FBbUM7UUFDbkMsa0ZBQWtGO1FBQ2xGLFFBQVE7UUFDUixpQkFBaUI7UUFDakIsb0VBQW9FO1FBQ3BFLE1BQU07SUFFUixDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLE1BQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELHNDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsc0NBQWMsR0FBZCxVQUFlLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQXBpQlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0FxaUJ6QjtJQUFELG9CQUFDO0NBQUEsQUFyaUJELElBcWlCQztBQXJpQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gJy4uL2ludGVyZmFjZXMvdmVuZG9yLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi9lbnVtcy9kYXkuZW51bSc7XHJcbmltcG9ydCB7IGZpcmVzdG9yZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvZmlyZWJhc2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yU2VydmljZSB7XHJcbiAgcHJpdmF0ZSB2ZW5kb3JMaXN0OiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPjtcclxuICBwcml2YXRlIHNlbGVjdGVkVmVuZG9yOiBWZW5kb3I7XHJcbiAgcHJpdmF0ZSBzZWxlY3RlZFRhYjogbnVtYmVyO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnZlbmRvckxpc3QgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFt7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuYW1lOiBcIkdlY2tvc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgdmVudWUgZm9yIGRvZ3MgYW5kIHRoZWlyIG1vbXMuXCIsXHJcbiAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICByYXRpbmc6IHtcclxuICAgICAgICBsaWtlczogNjAsXHJcbiAgICAgICAgZGlzbGlrZXM6IDE4XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhcHB5SG91cnM6IFt7XHJcbiAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE3OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDA4OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTk6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwODowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDA4OjQ1XCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTE6MzBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNDowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE0OjMwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjE6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9XSxcclxuICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjE6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMjE6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE3OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE3OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9XVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogMixcclxuICAgICAgbmFtZTogXCJIYXBweSBob3VycyBhdCBBbm9keW5lIFBvb2wgSGFsbCAmIENvY2t0YWlsc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJMb2NhbCBicmV3ZXJ5IGZvciB0aGUgNTA1IVwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMzc1LTMwNzNcIixcclxuICAgICAgcmF0aW5nOiB7IGxpa2VzOiAyOCwgZGlzbGlrZXM6IDggfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTY6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MzBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQyMzowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxODowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE5OjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTY6MTVcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTozMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDIyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6IFwiSGlnaCBOb29uIFJlc3RhdXJhbnQgJiBTYWxvb25cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyEgQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyEgQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyEgQWxsIHlvdSBjYW4gZWF0IGFuZCBkcmluayBkdXJpbmcgb3VyIGNyYXp5IHBhcnR5LXRpbWUgaGFwcHkgaG91ciEgU2hvdHMgb24gdXMgYW5kIGZyZWUgVWJlcidzIGZvciBhbGwuIENvbWUgam9pbiB1cyFcIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE2OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTg6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MzBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNjozMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTc6MTVcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNjo0NVwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDQsXHJcbiAgICAgIG5hbWU6IFwiR2FyZHVuaW8nc1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJBbGJ1cXVlcnF1ZSdzIG1vc3QgdHJ1c3RlZCBOZXcgTWV4aWNhbiByZXN0YXVyYW50IGZvciAyMCB5ZWFycy5cIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDUsXHJcbiAgICAgIG5hbWU6IFwiRWwgUGludG9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogNixcclxuICAgICAgbmFtZTogXCJHZWNrb3NcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogNyxcclxuICAgICAgbmFtZTogXCJNYXJibGVcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTG9jYWwgYnJld2VyeSBmb3IgdGhlIDUwNSFcIixcclxuICAgICAgcGhvbmU6IFwiNTA1LTMzNS0zOTczXCIsXHJcbiAgICAgIHJhdGluZzoge1xyXG4gICAgICAgIGxpa2VzOiA2MCxcclxuICAgICAgICBkaXNsaWtlczogMThcclxuICAgICAgfSxcclxuICAgICAgaGFwcHlIb3VyczogW3tcclxuICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LF1cclxuICAgIH0sIHtcclxuICAgICAgaWQ6IDgsXHJcbiAgICAgIG5hbWU6IFwiVGhlIExpYnJhcnlcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiTm90IHlvJyBtb21tYSdzIG5vcm1hbCBsaWJyYXJ5LlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogOSxcclxuICAgICAgbmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkFsYnVxdWVycXVlJ3MgbW9zdCB0cnVzdGVkIE5ldyBNZXhpY2FuIHJlc3RhdXJhbnQgZm9yIDIwIHllYXJzLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfSwge1xyXG4gICAgICBpZDogMTAsXHJcbiAgICAgIG5hbWU6IFwiRWwgUGludG9cIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgcmF0aW5nOiB7XHJcbiAgICAgICAgbGlrZXM6IDYwLFxyXG4gICAgICAgIGRpc2xpa2VzOiAxOFxyXG4gICAgICB9LFxyXG4gICAgICBoYXBweUhvdXJzOiBbe1xyXG4gICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICBvcGVuOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMTU6MDBcIiksXHJcbiAgICAgICAgY2xvc2U6IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQwMjowMFwiKSxcclxuICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICB9LCB7XHJcbiAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgb3BlbjogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDE1OjAwXCIpLFxyXG4gICAgICAgIGNsb3NlOiBuZXcgRGF0ZShcIjAwMDEtMDEtMDFUMDI6MDBcIiksXHJcbiAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgfSwge1xyXG4gICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgIG9wZW46IG5ldyBEYXRlKFwiMDAwMS0wMS0wMVQxNTowMFwiKSxcclxuICAgICAgICBjbG9zZTogbmV3IERhdGUoXCIwMDAxLTAxLTAxVDAyOjAwXCIpLFxyXG4gICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgIH0sXVxyXG4gICAgfV0pO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCB2ZW5kb3JDb2wgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcInZlbmRvcnNcIik7XHJcblxyXG4gICAgLy8gdmVuZG9yQ29sLmdldCgpLnRoZW4ocXVlcnlTbmFwc2hvdCA9PiB7XHJcbiAgICAvLyAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGBWZW5kb3JTZXJ2aWNlKCk6ICR7ZG9jLmlkfSA9PiAke0pTT04uc3RyaW5naWZ5KGRvYy5kYXRhKCkpfWApO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0sIChlcnJvcikgPT57XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdWZW5kb3JTZXJ2aWNlKCkgRVJST1I6ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0U2V0VmVuZG9ycygpOiBPYnNlcnZhYmxlQXJyYXk8VmVuZG9yPiB7XHJcbiAgICByZXR1cm4gdGhpcy52ZW5kb3JMaXN0O1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRWZW5kb3IoKTogVmVuZG9yIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmVuZG9yO1xyXG4gIH1cclxuXHJcbiAgc2V0U2VsZWN0ZWRWZW5kb3IodmVuZG9yOiBWZW5kb3IpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWZW5kb3IgPSB2ZW5kb3I7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZFRhYigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRUYWI7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3RlZFRhYihpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGFiID0gaW5kZXg7XHJcbiAgfVxyXG59Il19