import AssignManager from "../src/AssignManager.js";
import Calendar from "../src/Calendar.js";

describe("AssignManager 클래스 테스트", () => {
  const weekdayMembers = ["준팍", "도밥", "고니", "수아", "루루"];
  const weekendMembers = ["수아", "루루", "준팍", "도밥", "고니"];
  let calendar;
  let assignManager;

  beforeEach(() => {
    calendar = new Calendar(5, "월");
    assignManager = new AssignManager(calendar, weekdayMembers, weekendMembers);
  });

  test("모든 날짜에 온콜 멤버가 할당되는지 테스트", () => {
    const allDates = calendar.getCalendar();
    const hasAllMembersAssigned = allDates.every(
      (date) => date.getOncallMember() !== undefined
    );

    expect(hasAllMembersAssigned).toBeTruthy();
  });

  test("연속된 날짜에 같은 멤버가 배정되지 않는지 테스트", () => {
    const allDates = calendar.getCalendar();
    let hasConsecutiveMembers = false;
    for (let i = 0; i < allDates.length - 1; i++) {
      if (allDates[i].getOncallMember() === allDates[i + 1].getOncallMember()) {
        hasConsecutiveMembers = true;
        break;
      }
    }
    expect(hasConsecutiveMembers).toBeFalsy();
  });

  test("평일/휴일에 맞는 멤버가 배정되는지 테스트", () => {
    const allDates = calendar.getCalendar();
    const weekdayAssignments = allDates
      .filter((date) => !date.isHoliday())
      .every((date) => weekdayMembers.includes(date.getOncallMember()));

    const weekendAssignments = allDates
      .filter((date) => date.isHoliday())
      .every((date) => weekendMembers.includes(date.getOncallMember()));

    expect(weekdayAssignments).toBeTruthy();
    expect(weekendAssignments).toBeTruthy();
  });
});
