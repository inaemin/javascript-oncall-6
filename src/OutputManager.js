import { Console } from "@woowacourse/mission-utils";

class OutputManager {
  static printOncallMemberOnCalendar(calendar) {
    const calendarDates = calendar.getCalendar();
    for (let date of calendarDates) {
      Console.print(
        `${date.getMonth()}월 ${date.getDate()}일 ${date.getDay()} ${date.getOncallMember()}`
      );
    }
  }
}

export default OutputManager;
