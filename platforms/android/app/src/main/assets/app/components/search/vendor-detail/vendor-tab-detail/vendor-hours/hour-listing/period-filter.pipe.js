"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PeriodFilterPipe = (function () {
    function PeriodFilterPipe() {
    }
    PeriodFilterPipe.prototype.transform = function (period, day) {
        // Checking for undefined param
        if (period === undefined) {
            return null;
        }
        ;
        return period.filter(function (period) {
            if (period.close.day === day && period.open.day === day) {
                console.log('Period: ' + JSON.stringify(period));
                return period;
            }
            else
                return null;
            // else if (period.open.day === day) {
            //     console.log('Open: ' + JSON.stringify(period));
            //     return period.open.day;
            // }
            //return period.close.day === day || period.open.day === day;
        });
    };
    PeriodFilterPipe = __decorate([
        core_1.Pipe({
            name: 'periodFilter'
        })
    ], PeriodFilterPipe);
    return PeriodFilterPipe;
}());
exports.PeriodFilterPipe = PeriodFilterPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyaW9kLWZpbHRlci5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVyaW9kLWZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBTXBEO0lBQUE7SUFrQkEsQ0FBQztJQWpCRyxvQ0FBUyxHQUFULFVBQVUsTUFBZ0IsRUFBRSxHQUFXO1FBQ3ZDLCtCQUErQjtRQUMvQixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFBQyxDQUFDO1FBQUEsQ0FBQztRQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FDaEIsVUFBQSxNQUFNO1lBQ0YsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDakQsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNsQixDQUFDO1lBQ0QsSUFBSTtnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2pCLHNDQUFzQztZQUN0QyxzREFBc0Q7WUFDdEQsOEJBQThCO1lBQzlCLElBQUk7WUFDSiw2REFBNkQ7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBakJRLGdCQUFnQjtRQUg1QixXQUFJLENBQUM7WUFDRixJQUFJLEVBQUUsY0FBYztTQUN2QixDQUFDO09BQ1csZ0JBQWdCLENBa0I1QjtJQUFELHVCQUFDO0NBQUEsQUFsQkQsSUFrQkM7QUFsQlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQZXJpb2QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9pbnRlcmZhY2VzL3BlcmlvZC5pbnRlcmZhY2UnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3BlcmlvZEZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIFBlcmlvZEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRyYW5zZm9ybShwZXJpb2Q6IFBlcmlvZFtdLCBkYXk6IG51bWJlcil7XHJcbiAgICAvLyBDaGVja2luZyBmb3IgdW5kZWZpbmVkIHBhcmFtXHJcbiAgICBpZiAocGVyaW9kID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIG51bGwgfTtcclxuICAgIHJldHVybiBwZXJpb2QuZmlsdGVyKFxyXG4gICAgICAgIHBlcmlvZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwZXJpb2QuY2xvc2UuZGF5ID09PSBkYXkgJiYgcGVyaW9kLm9wZW4uZGF5ID09PSBkYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQZXJpb2Q6ICcgKyBKU09OLnN0cmluZ2lmeShwZXJpb2QpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwZXJpb2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgLy8gZWxzZSBpZiAocGVyaW9kLm9wZW4uZGF5ID09PSBkYXkpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdPcGVuOiAnICsgSlNPTi5zdHJpbmdpZnkocGVyaW9kKSk7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gcGVyaW9kLm9wZW4uZGF5O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIHBlcmlvZC5jbG9zZS5kYXkgPT09IGRheSB8fCBwZXJpb2Qub3Blbi5kYXkgPT09IGRheTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19