import CalendarDate from "../src/CalendarDate.js";

describe("CalendarDate 클래스 테스트", () => {
  test("주말 판별 테스트", () => {
    const sundayDate = new CalendarDate(1, 1, 0);
    const wednesdayDate = new CalendarDate(1, 2, 3);

    expect(sundayDate.isHoliday()).toBeTruthy();
    expect(wednesdayDate.isHoliday()).toBeFalsy();
  });

  test("공휴일 판별 테스트", () => {
    const newYearDate = new CalendarDate(1, 1, 3);
    const normalDate = new CalendarDate(1, 2, 3);

    expect(newYearDate.isHoliday()).toBeTruthy();
    expect(normalDate.isHoliday()).toBeFalsy();
  });
});
