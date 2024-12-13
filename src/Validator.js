import {
  DAY_OF_WEEK,
  MIN_NICKNAME_LENGTH,
  MAX_NICKNAME_LENGTH,
  MIN_ONCALL_MEMBER,
  MAX_ONCALL_MEMBER,
} from "./constants.js";

class Validator {
  static #validateMonth(month) {
    // 1. month는 숫자여야 하고,
    if (isNaN(month) || !month) {
      throw new Error(
        `[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.`
      );
    }
    // 2. 1과 12 사이여야 한다.
    if (month < 1 || month > 12) {
      throw new Error(
        `[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.`
      );
    }
  }

  static #validateStartDay(startDay) {
    // 1. 공백이어서는 안되고, 요일 중 하나여야 한다.
    const days = Object.values(DAY_OF_WEEK);
    if (!startDay || !days.includes(startDay)) {
      throw new Error(
        `[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.`
      );
    }
  }

  static isValidMonthAndStartDay(month, startDay) {
    this.#validateMonth(month);
    this.#validateStartDay(startDay);
  }

  static #validateNickname(members) {
    const set = new Set();
    // 1. 최소 1자, 최대 5자를 만족해야함.
    for (let member of members) {
      if (
        member.length < MIN_NICKNAME_LENGTH ||
        member.length > MAX_NICKNAME_LENGTH
      ) {
        throw new Error(
          `[ERROR] 닉네임은 최소 ${MIN_NICKNAME_LENGTH}자, 최대 ${MAX_NICKNAME_LENGTH}자여야 합니다.`
        );
      }
      set.add(member);
    }
    // 2. 닉네임은 중복이 될 수 없음.
    if (set.size() !== members.length) {
      throw new Error(`[ERROR] 닉네임은 중복이 될 수 없습니다.`);
    }
  }

  static #validateOncallMembers(members) {
    if (
      members.length < MIN_ONCALL_MEMBER ||
      members.length > MAX_ONCALL_MEMBER
    ) {
      throw new Error(
        `[ERROR] 비상 근무자는 최소 ${MIN_ONCALL_MEMBER}명, 최대 ${MAX_ONCALL_MEMBER}명이어야 합니다.`
      );
    }
  }

  static isValidOncallMembers() {
    this.#validateNickname(members);
    this.#validateOncallMembers(members);
  }

  static isBothValidOncallMembers(weekday, weekend) {
    const weekdaySet = new Set([...weekday]);
    const weekendSet = new Set([...weekend]);
    if (weekdaySet.size() !== weekendSet.size()) {
      throw new Error(
        `[ERROR] 평일 근무자와 휴일 근무자의 수는 같아야 합니다.`
      );
    }
  }
}

export default Validator;
