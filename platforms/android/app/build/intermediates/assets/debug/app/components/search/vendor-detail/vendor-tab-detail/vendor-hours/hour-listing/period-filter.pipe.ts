import { Pipe, PipeTransform } from '@angular/core';
import { Period } from '../../../../../../interfaces/period.interface';

@Pipe({
    name: 'periodFilter'
})
export class PeriodFilterPipe implements PipeTransform {
    transform(period: Period[], day: number){
    // Checking for undefined param
    if (period === undefined) { return null };
    return period.filter(
        period => {
            if (period.close.day === day && period.open.day === day) {
                console.log('Period: ' + JSON.stringify(period));
                return period;
            }
            else return null;
            // else if (period.open.day === day) {
            //     console.log('Open: ' + JSON.stringify(period));
            //     return period.open.day;
            // }
            //return period.close.day === day || period.open.day === day;
        });
    }
}

