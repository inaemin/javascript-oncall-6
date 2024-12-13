import Calendar from "../src/Calendar.js";

describe("Calendar 클래스 테스트", () => {
  test("1월 달력이 정상적으로 생성되는지 테스트", () => {
    const calendar = new Calendar(1, "일");
    expect(calendar.getCalendar().length).toBe(31);
  });

  test("2월 달력이 정상적으로 생성되는지 테스트", () => {
    const calendar = new Calendar(2, "수");
    expect(calendar.getCalendar().length).toBe(28);
  });
});
