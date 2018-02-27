import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'digitalTimerPipe'
})
export class DigitalTimerPipePipe implements PipeTransform {

  transform(time: number): string {
    return moment().hour(0).minute(0).second(time).format('HH : mm : ss');
  }

}
