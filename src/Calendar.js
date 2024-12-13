import CalendarDate from "./CalendarDate.js";
import { NUM_OF_DATES_IN_MONTH, DAY_OF_WEEK } from "./constants.js";

class Calendar {
  #calendar = [];

  constructor(month, firstDay) {
    const firstDayNum = this.#findFirstDayNumber(firstDay);
    this.#makeCalendar(month, firstDayNum);
  }

  #makeCalendar(month, firstDayNum) {
    let day = firstDayNum;
    for (let date = 1; date <= NUM_OF_DATES_IN_MONTH[month]; date++) {
      const newDate = new CalendarDate(month, date, day);
      day = (day + 1) % 7;
      this.#calendar.push(newDate);
    }
  }

  #findFirstDayNumber(firstDay) {
    const keys = Object.keys(DAY_OF_WEEK);
    for (let i = 0; i < keys.length; i++) {
      const dayNum = keys[i];
      const dayValue = DAY_OF_WEEK[dayNum];
      if (dayValue === firstDay) {
        return +dayNum;
      }
    }
  }

  getCalendar() {
    return [...this.#calendar];
  }
}

export default Calendar;
