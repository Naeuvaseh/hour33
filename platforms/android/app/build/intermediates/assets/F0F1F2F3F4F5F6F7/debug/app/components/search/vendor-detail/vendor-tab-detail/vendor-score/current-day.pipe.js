"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var CurrentDayPipe = (function () {
    function CurrentDayPipe() {
    }
    CurrentDayPipe.prototype.transform = function (timePeriod) {
        // Checking for undefined param
        if (timePeriod === undefined) {
            return null;
        }
        ;
        return timePeriod.filter(function (timePeriod) {
            return timePeriod.day === moment.utc().day();
        });
    };
    CurrentDayPipe = __decorate([
        core_1.Pipe({
            name: 'currentDay'
        })
    ], CurrentDayPipe);
    return CurrentDayPipe;
}());
exports.CurrentDayPipe = CurrentDayPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1kYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbnQtZGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFFcEQsK0JBQWlDO0FBS2pDO0lBQUE7SUFTQSxDQUFDO0lBUkcsa0NBQVMsR0FBVCxVQUFVLFVBQXdCO1FBQ2xDLCtCQUErQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFBQyxDQUFDO1FBQUEsQ0FBQztRQUM5QyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FDcEIsVUFBQSxVQUFVO1lBQ04sTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVJRLGNBQWM7UUFIMUIsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFlBQVk7U0FDckIsQ0FBQztPQUNXLGNBQWMsQ0FTMUI7SUFBRCxxQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaW1lUGVyaW9kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaW50ZXJmYWNlcy90aW1lLXBlcmlvZC5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdjdXJyZW50RGF5J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VycmVudERheVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG4gICAgdHJhbnNmb3JtKHRpbWVQZXJpb2Q6IFRpbWVQZXJpb2RbXSl7XHJcbiAgICAvLyBDaGVja2luZyBmb3IgdW5kZWZpbmVkIHBhcmFtXHJcbiAgICBpZiAodGltZVBlcmlvZCA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiBudWxsIH07XHJcbiAgICByZXR1cm4gdGltZVBlcmlvZC5maWx0ZXIoXHJcbiAgICAgICAgdGltZVBlcmlvZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lUGVyaW9kLmRheSA9PT0gbW9tZW50LnV0YygpLmRheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=