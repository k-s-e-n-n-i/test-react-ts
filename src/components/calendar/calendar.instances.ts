import 'air-datepicker';
import { AirDatepickerInstance } from '@blu3r4y/air-datepicker-types';
import './cell.scss';
import './datepicker-config.scss';
import './datepicker.scss';
import './navigation.scss';
import { CalendarDropdown } from './calendar-dropdown.class';
import { CalendarDropdownDates } from './calendar-dropdown-dates.class';
import { CalendarBlank } from './calendar-blank.class';

import JQuery from 'jquery';
var $ = JQuery;

function runCalendar() {
  $(function () {
    if ($('.js-dropdown .js-datepicker-here').length !== 0) {
      $('.js-dropdown .js-datepicker-here').each((i, item) => {
        new CalendarDropdown($(item));
      });
    }

    if ($('.js-dropdown-dates .js-datepicker-here').length !== 0) {
      $('.js-dropdown-dates .js-datepicker-here').each((i, item) => {
        new CalendarDropdownDates($(item));
      });
    }

    if ($('.js-ui-kit-cards__calendar-block .js-datepicker-here').length !== 0) {
      $('.js-ui-kit-cards__calendar-block .js-datepicker-here').each((i, item) => {
        new CalendarBlank($(item));
      });
    }
  });
}

const mainOptions = {
  range: true,
  clearButton: true,
  todayButtonL: true,
  prevHtml: `<span class="datepicker--nav-action-prev"></span>`,
  nextHtml: `<span class="datepicker--nav-action-next"></span>`,
  button: `<span class="datepicker--button" data-action="#{action}">#{label}</span> <span class="datepicker--button-ok">Применить</span>`,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
};

export { mainOptions, runCalendar };
