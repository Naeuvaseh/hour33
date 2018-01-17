"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moment = require("moment");
var settings_1 = require("../../../settings");
var CurrentDayPipe = (function () {
    function CurrentDayPipe() {
    }
    CurrentDayPipe.prototype.transform = function (timePeriods) {
        // Checking for undefined param
        if (timePeriods === undefined) {
            return null;
        }
        ;
        var result = timePeriods.filter(function (period) {
            return period.day === moment.utc().day();
        });
        if (settings_1.Debug.console.CurrentDayPipe)
            console.log('CurrentDayPipe():' + JSON.stringify(result));
        return result;
    };
    CurrentDayPipe = __decorate([
        core_1.Pipe({
            name: 'currentDay'
        })
    ], CurrentDayPipe);
    return CurrentDayPipe;
}());
exports.CurrentDayPipe = CurrentDayPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1kYXkucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1cnJlbnQtZGF5LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFFcEQsK0JBQWlDO0FBQ2pDLDhDQUEwQztBQUsxQztJQUFBO0lBV0EsQ0FBQztJQVZHLGtDQUFTLEdBQVQsVUFBVSxXQUF5QjtRQUNuQywrQkFBK0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQUMsQ0FBQztRQUFBLENBQUM7UUFDOUMsSUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FDM0IsVUFBQSxNQUFNO1lBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDNUYsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNkLENBQUM7SUFWUSxjQUFjO1FBSDFCLFdBQUksQ0FBQztZQUNGLElBQUksRUFBRSxZQUFZO1NBQ3JCLENBQUM7T0FDVyxjQUFjLENBVzFCO0lBQUQscUJBQUM7Q0FBQSxBQVhELElBV0M7QUFYWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGltZVBlcmlvZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvdGltZS1wZXJpb2QuaW50ZXJmYWNlJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IERlYnVnIH0gZnJvbSAnLi4vLi4vLi4vc2V0dGluZ3MnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2N1cnJlbnREYXknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW50RGF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm17XHJcbiAgICB0cmFuc2Zvcm0odGltZVBlcmlvZHM6IFRpbWVQZXJpb2RbXSl7XHJcbiAgICAvLyBDaGVja2luZyBmb3IgdW5kZWZpbmVkIHBhcmFtXHJcbiAgICBpZiAodGltZVBlcmlvZHMgPT09IHVuZGVmaW5lZCl7IHJldHVybiBudWxsIH07XHJcbiAgICB2YXIgcmVzdWx0ID0gdGltZVBlcmlvZHMuZmlsdGVyKFxyXG4gICAgICAgIHBlcmlvZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwZXJpb2QuZGF5ID09PSBtb21lbnQudXRjKCkuZGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBpZiAoRGVidWcuY29uc29sZS5DdXJyZW50RGF5UGlwZSkgY29uc29sZS5sb2coJ0N1cnJlbnREYXlQaXBlKCk6JyArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxuIl19