import { Pipe, PipeTransform } from '@angular/core';
import { TimePeriod } from '../../../interfaces/time-period.interface';
import * as moment from 'moment';
import { Debug } from '../../../settings';

@Pipe({
    name: 'currentDay'
})
export class CurrentDayPipe implements PipeTransform{
    transform(timePeriods: TimePeriod[]){
    // Checking for undefined param
    if (timePeriods === undefined){ return null };
    var result = timePeriods.filter(
        period => {
            return period.day === moment.utc().day();
        });
    if (Debug.console.CurrentDayPipe) console.log('CurrentDayPipe():' + JSON.stringify(result));
    return result;
    }
}

