import { HOLIDAYS, DAY_OF_WEEK } from "./constants";

class Date {
  #month;
  #date;
  #day;
  #isWeekDay;
  #isHoliDay;

  constructor(month, date, day) {
    this.#month = month;
    this.#date = date;
    this.#day = DAY_OF_WEEK[day];
    this.#isWeekDay = this.#determineWeekDay(day);
    this.#isHoliDay = this.#determineHoliday(month, date);
  }

  #determineWeekDay(day) {
    if (day === 0 || day === 6) {
      return false;
    }
    return true;
  }

  #determineHoliday(m, d) {
    for (let { month, date } of HOLIDAYS) {
      if (month === m && date === d) {
        return true;
      }
    }
    return false;
  }
}
