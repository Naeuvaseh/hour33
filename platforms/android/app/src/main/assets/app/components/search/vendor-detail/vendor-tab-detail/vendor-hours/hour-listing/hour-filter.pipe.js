"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HourFilterPipe = (function () {
    function HourFilterPipe() {
    }
    HourFilterPipe.prototype.transform = function (hours, day) {
        // Checking for undefined param
        if (hours === undefined) {
            return null;
        }
        ;
        return hours.filter(function (hour) {
            return hour.day === day;
        });
    };
    HourFilterPipe = __decorate([
        core_1.Pipe({
            name: 'hourFilter'
        })
    ], HourFilterPipe);
    return HourFilterPipe;
}());
exports.HourFilterPipe = HourFilterPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG91ci1maWx0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvdXItZmlsdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFNcEQ7SUFBQTtJQVNBLENBQUM7SUFSRyxrQ0FBUyxHQUFULFVBQVUsS0FBbUIsRUFBRSxHQUFXO1FBQzFDLCtCQUErQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFBQyxDQUFDO1FBQUEsQ0FBQztRQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDZixVQUFBLElBQUk7WUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBUlEsY0FBYztRQUgxQixXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsWUFBWTtTQUNyQixDQUFDO09BQ1csY0FBYyxDQVMxQjtJQUFELHFCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRpbWVQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3RpbWUtcGVyaW9kLmludGVyZmFjZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnaG91ckZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvdXJGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuICAgIHRyYW5zZm9ybShob3VyczogVGltZVBlcmlvZFtdLCBkYXk6IG51bWJlcil7XHJcbiAgICAvLyBDaGVja2luZyBmb3IgdW5kZWZpbmVkIHBhcmFtXHJcbiAgICBpZiAoaG91cnMgPT09IHVuZGVmaW5lZCl7IHJldHVybiBudWxsIH07XHJcbiAgICByZXR1cm4gaG91cnMuZmlsdGVyKFxyXG4gICAgICAgIGhvdXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaG91ci5kYXkgPT09IGRheTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19