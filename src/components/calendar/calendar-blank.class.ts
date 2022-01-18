import 'air-datepicker';
import { AirDatepickerInstance } from '@blu3r4y/air-datepicker-types';
import './cell.scss';
import './datepicker-config.scss';
import './datepicker.scss';
import './navigation.scss';
import { mainOptions } from './calendar.instances';

class CalendarBlank {
  datepicker: JQuery<HTMLElement>;

  constructor(datepicker: JQuery<HTMLElement>) {
    this.datepicker = datepicker;
    this.init();
  }

  init(): void {
    this.datepicker.datepicker(mainOptions);
  }
}
export { CalendarBlank };
