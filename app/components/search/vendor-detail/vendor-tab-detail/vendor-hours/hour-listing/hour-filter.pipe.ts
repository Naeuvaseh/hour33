import { Pipe, PipeTransform } from '@angular/core';
import { TimePeriod } from '../../../../../../interfaces/time-period.interface';

@Pipe({
    name: 'hourFilter'
})
export class HourFilterPipe implements PipeTransform{
    transform(hours: TimePeriod[], day: number){
    // Checking for undefined param
    if (hours === undefined){ return null };
    return hours.filter(
        hour => {
            return hour.day === day;
        });
    }
}

