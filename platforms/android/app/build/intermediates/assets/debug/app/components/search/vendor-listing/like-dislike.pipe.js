"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LikeDislikePipe = /** @class */ (function () {
    function LikeDislikePipe() {
    }
    LikeDislikePipe.prototype.transform = function (rating, like) {
        // Checking for undefined param
        if (rating === undefined) {
            return '??';
        }
        ;
        switch (like) {
            case true:
                return Math.round((rating / 5.0) * 100).toString() + '%';
            case false:
                return Math.round((1 - (rating / 5.0)) * 100).toString() + '%';
            default:
                console.log('LikeDislikePipe Failed.');
                return '??';
        }
    };
    LikeDislikePipe = __decorate([
        core_1.Pipe({
            name: 'likeDislike'
        })
    ], LikeDislikePipe);
    return LikeDislikePipe;
}());
exports.LikeDislikePipe = LikeDislikePipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrZS1kaXNsaWtlLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWtlLWRpc2xpa2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUtwRDtJQUFBO0lBY0EsQ0FBQztJQWJHLG1DQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsSUFBYTtRQUNuQywrQkFBK0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQUMsQ0FBQztRQUFBLENBQUM7UUFDekMsTUFBTSxDQUFBLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNULEtBQUssSUFBSTtnQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFDN0QsS0FBSyxLQUFLO2dCQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO1lBQ25FO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNwQixDQUFDO0lBQ0wsQ0FBQztJQWJRLGVBQWU7UUFIM0IsV0FBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGFBQWE7U0FDdEIsQ0FBQztPQUNXLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2xpa2VEaXNsaWtlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlrZURpc2xpa2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybXtcclxuICAgIHRyYW5zZm9ybShyYXRpbmc6IG51bWJlciwgbGlrZTogYm9vbGVhbil7XHJcbiAgICAgICAgLy8gQ2hlY2tpbmcgZm9yIHVuZGVmaW5lZCBwYXJhbVxyXG4gICAgICAgIGlmIChyYXRpbmcgPT09IHVuZGVmaW5lZCl7IHJldHVybiAnPz8nIH07XHJcbiAgICAgICAgc3dpdGNoKGxpa2Upe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgocmF0aW5nIC8gNS4wKSAqIDEwMCkudG9TdHJpbmcoKSArICclJztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCgxIC0gKHJhdGluZyAvIDUuMCkpICogMTAwKS50b1N0cmluZygpICsgJyUnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xpa2VEaXNsaWtlUGlwZSBGYWlsZWQuJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJz8/JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==