import { Console } from "@woowacourse/mission-utils";
import Validator from "./Validator.js";

class InputManager {
  static async readOncallMonthAndStartDay(calendar) {
    while (true) {
      try {
        let input = await Console.readLineAsync(
          `비상 근무를 배정할 월과 시작 요일을 입력하세요> `
        );
        const [month, startDay] = input.split(",");
        Validator.isValidMonthAndStartDay(+month, startDay);
        return [month, startDay];
      } catch (error) {
        Console.print(`\n${error.message}`);
      }
    }
  }

  static async readOncallMembers() {
    while (true) {
      try {
        const weekday = this.#readWeekDayOncallMembers();
        Validator.isValidOncallMembers(weekday);
        const weekend = this.#readWeekendOncallMembers();
        Validator.isValidOncallMembers(weekend);
        Validator.isBothValidOncallMembers(weekday, weekend);
        return [weekday, weekend];
      } catch (error) {
        Console.print(`\n${error.message}`);
      }
    }
  }

  static async #readWeekDayOncallMembers() {
    let input = await Console.readLineAsync(
      `\n평일 비상 근무 순번대로 사원 닉네임을 입력하세요> `
    );
    return input.split(",").map((el) => el.trim());
  }

  static async #readWeekendOncallMembers() {
    let input = await Console.readLineAsync(
      `\n휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> `
    );
    return input.split(",").map((el) => el.trim());
  }
}

export default InputManager;
