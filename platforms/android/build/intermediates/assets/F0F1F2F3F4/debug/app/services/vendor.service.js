"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var day_enum_1 = require("../enums/day.enum");
var VendorService = (function () {
    function VendorService() {
        this.vendorList = new observable_array_1.ObservableArray([{
                id: 1,
                vendorName: "Geckos",
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
                vendorName: "Happy hours at Anodyne Pool Hall & Cocktails",
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
                vendorName: "High Noon Restaurant & Saloon",
                description: "All you can eat and drink during our crazy party-time happy hour! Shots on us and free Uber's for all. Come join us!",
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
                vendorName: "Gardunio's",
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
                vendorName: "El Pinto",
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
                vendorName: "Geckos",
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
                vendorName: "Marble",
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
                vendorName: "The Library",
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
                vendorName: "Gardunio's",
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
                vendorName: "El Pinto",
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
    VendorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], VendorService);
    return VendorService;
}());
exports.VendorService = VendorService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2ZW5kb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw0RkFBMEY7QUFDMUYsOENBQXdDO0FBSXhDO0lBR0k7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0NBQWUsQ0FBQyxDQUFDO2dCQUNuQyxFQUFFLEVBQUUsQ0FBQztnQkFDTCxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsS0FBSyxFQUFFLGNBQWM7Z0JBQ3JCLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsRUFBRTtvQkFDVCxRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDRCxnQkFBZ0IsRUFBRSxDQUFDO3dCQUNqQixHQUFHLEVBQUUsY0FBRyxDQUFDLE1BQU07d0JBQ2YsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsT0FBTzt3QkFDaEIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxTQUFTO3dCQUNsQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFFBQVE7d0JBQ2pCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVB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Q0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxPQUFPO3dCQUNoQixJQUFJLEVBQUUsU0FBUzt3QkFDZixLQUFLLEVBQUUsU0FBUzt3QkFDaEIsT0FBTyxFQUFFLEtBQUs7cUJBQ2YsRUFBRTt3QkFDRCxHQUFHLEVBQUUsY0FBRyxDQUFDLFNBQVM7d0JBQ2xCLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7d0JBQ0QsR0FBRyxFQUFFLGNBQUcsQ0FBQyxNQUFNO3dCQUNmLElBQUksRUFBRSxTQUFTO3dCQUNmLEtBQUssRUFBRSxTQUFTO3dCQUNoQixPQUFPLEVBQUUsS0FBSztxQkFDZixFQUFFO3dCQUNELEdBQUcsRUFBRSxjQUFHLENBQUMsUUFBUTt3QkFDakIsSUFBSSxFQUFFLFNBQVM7d0JBQ2YsS0FBSyxFQUFFLFNBQVM7d0JBQ2hCLE9BQU8sRUFBRSxLQUFLO3FCQUNmLEVBQUU7YUFDSCxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFwY08sYUFBYTtRQUR6QixpQkFBVSxFQUFFOztPQUNBLGFBQWEsQ0FxY3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXJjRCxJQXFjQztBQXJjWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVmVuZG9yIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWFyY2gtcmVzdWx0LmludGVyZmFjZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xyXG5pbXBvcnQgeyBEYXkgfSBmcm9tICcuLi9lbnVtcy9kYXkuZW51bSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmVuZG9yU2VydmljZSB7XHJcbiAgICBwdWJsaWMgdmVuZG9yTGlzdDogT2JzZXJ2YWJsZUFycmF5PFZlbmRvcj47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy52ZW5kb3JMaXN0ID0gbmV3IE9ic2VydmFibGVBcnJheShbe1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdmVuZG9yTmFtZTogXCJHZWNrb3NcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICB2ZW5kb3JOYW1lOiBcIkhhcHB5IGhvdXJzIGF0IEFub2R5bmUgUG9vbCBIYWxsICYgQ29ja3RhaWxzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxvY2FsIGJyZXdlcnkgZm9yIHRoZSA1MDUhXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0zNzUtMzA3M1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgbGlrZXM6IDI4LCBkaXNsaWtlczogOCB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNDowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjEwOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI1OjMwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTE6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNjowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjc6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI0OjE1IFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjMwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTA6MDAgUE1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgdmVuZG9yTmFtZTogXCJIaWdoIE5vb24gUmVzdGF1cmFudCAmIFNhbG9vblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbGwgeW91IGNhbiBlYXQgYW5kIGRyaW5rIGR1cmluZyBvdXIgY3JhenkgcGFydHktdGltZSBoYXBweSBob3VyISBTaG90cyBvbiB1cyBhbmQgZnJlZSBVYmVyJ3MgZm9yIGFsbC4gQ29tZSBqb2luIHVzIVwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI0OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCI2OjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMTI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MzAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjQ6MzAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNToxNSBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiNDo0NSBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgdmVuZG9yTmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsYnVxdWVycXVlJ3MgbW9zdCB0cnVzdGVkIE5ldyBNZXhpY2FuIHJlc3RhdXJhbnQgZm9yIDIwIHllYXJzLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICB2ZW5kb3JOYW1lOiBcIkVsIFBpbnRvXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhbWlseSB2ZW51ZSBmb3IgZG9ncyBhbmQgdGhlaXIgbW9tcy5cIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgICAgICAgIHJhdGluZzogeyBcclxuICAgICAgICAgICAgICBsaWtlczogNjAsIFxyXG4gICAgICAgICAgICAgIGRpc2xpa2VzOiAxOCBcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGhvdXJzT2ZPcGVyYXRpb246IFt7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgdmVuZG9yTmFtZTogXCJHZWNrb3NcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmFtaWx5IHZlbnVlIGZvciBkb2dzIGFuZCB0aGVpciBtb21zLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICB2ZW5kb3JOYW1lOiBcIk1hcmJsZVwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMb2NhbCBicmV3ZXJ5IGZvciB0aGUgNTA1IVwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMzM1LTM5NzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgICB2ZW5kb3JOYW1lOiBcIlRoZSBMaWJyYXJ5XCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk5vdCB5bycgbW9tbWEncyBub3JtYWwgbGlicmFyeS5cIixcclxuICAgICAgICAgICAgcGhvbmU6IFwiNTA1LTIzNS0yODMzXCIsXHJcbiAgICAgICAgICAgIHJhdGluZzogeyBcclxuICAgICAgICAgICAgICBsaWtlczogNjAsIFxyXG4gICAgICAgICAgICAgIGRpc2xpa2VzOiAxOCBcclxuICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgIGhvdXJzT2ZPcGVyYXRpb246IFt7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU3VuZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuTW9uZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVHVlc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LldlZG5lc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlRodXJzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuRnJpZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuU2F0dXJkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXVxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogOSxcclxuICAgICAgICAgICAgdmVuZG9yTmFtZTogXCJHYXJkdW5pbydzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFsYnVxdWVycXVlJ3MgbW9zdCB0cnVzdGVkIE5ldyBNZXhpY2FuIHJlc3RhdXJhbnQgZm9yIDIwIHllYXJzLlwiLFxyXG4gICAgICAgICAgICBwaG9uZTogXCI1MDUtMjM1LTI4MzNcIixcclxuICAgICAgICAgICAgcmF0aW5nOiB7IFxyXG4gICAgICAgICAgICAgIGxpa2VzOiA2MCwgXHJcbiAgICAgICAgICAgICAgZGlzbGlrZXM6IDE4IFxyXG4gICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgaG91cnNPZk9wZXJhdGlvbjogW3tcclxuICAgICAgICAgICAgICBkYXk6IERheS5TdW5kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5Nb25kYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UdWVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuV2VkbmVzZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgZGF5OiBEYXkuVGh1cnNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5GcmlkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5TYXR1cmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiAxMCxcclxuICAgICAgICAgICAgdmVuZG9yTmFtZTogXCJFbCBQaW50b1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGYW1pbHkgdmVudWUgZm9yIGRvZ3MgYW5kIHRoZWlyIG1vbXMuXCIsXHJcbiAgICAgICAgICAgIHBob25lOiBcIjUwNS0yMzUtMjgzM1wiLFxyXG4gICAgICAgICAgICByYXRpbmc6IHsgXHJcbiAgICAgICAgICAgICAgbGlrZXM6IDYwLCBcclxuICAgICAgICAgICAgICBkaXNsaWtlczogMTggXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBob3Vyc09mT3BlcmF0aW9uOiBbe1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlN1bmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5Lk1vbmRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlR1ZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5XZWRuZXNkYXksXHJcbiAgICAgICAgICAgICAgb3BlbjogXCIzOjAwIFBNXCIsXHJcbiAgICAgICAgICAgICAgY2xvc2U6IFwiMjowMCBBTVwiLFxyXG4gICAgICAgICAgICAgIGhvbGlkYXk6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICBkYXk6IERheS5UaHVyc2RheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LkZyaWRheSxcclxuICAgICAgICAgICAgICBvcGVuOiBcIjM6MDAgUE1cIixcclxuICAgICAgICAgICAgICBjbG9zZTogXCIyOjAwIEFNXCIsXHJcbiAgICAgICAgICAgICAgaG9saWRheTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgIGRheTogRGF5LlNhdHVyZGF5LFxyXG4gICAgICAgICAgICAgIG9wZW46IFwiMzowMCBQTVwiLFxyXG4gICAgICAgICAgICAgIGNsb3NlOiBcIjI6MDAgQU1cIixcclxuICAgICAgICAgICAgICBob2xpZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICB9LF1cclxuICAgICAgICAgICB9XSk7XHJcbiAgICAgfVxyXG59Il19