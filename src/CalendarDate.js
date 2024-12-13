import { HOLIDAYS, DAY_OF_WEEK } from "./constants.js";

class CalendarDate {
  #month;
  #date;
  #day;
  #isWeekDay;
  #isHoliDay;
  #oncallMember;

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

  setOncallMember(member) {
    this.#oncallMember = member;
  }

  getOncallMember() {
    return this.#oncallMember;
  }

  getMonth() {
    return this.#month;
  }

  getDate() {
    return this.#date;
  }

  getDay() {
    // 평일이면서 공휴일인 경우
    if (this.#isWeekDay && this.#isHoliDay) {
      return `${this.#day}(휴일)`;
    }
    return this.#day;
  }

  isHoliday() {
    if (this.#isWeekDay && this.#isHoliDay) {
      return true;
    }
    if (!this.#isWeekDay) return true;
    return false;
  }
}

export default CalendarDate;
