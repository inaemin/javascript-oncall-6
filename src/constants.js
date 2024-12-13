// 요일 데이터
export const DAY_OF_WEEK = {
  0: "일",
  1: "월",
  2: "화",
  3: "수",
  4: "목",
  5: "금",
  6: "토",
};

// 공휴일 데이터
export const HOLIDAYS = [
  { month: 1, date: 1, desc: "신정" },
  { month: 3, date: 1, desc: "삼일절" },
  { month: 5, date: 5, desc: "어린이날" },
  { month: 6, date: 6, desc: "현충일" },
  { month: 8, date: 15, desc: "광복절" },
  { month: 10, date: 3, desc: "개천절" },
  { month: 10, date: 9, desc: "한글날" },
  { month: 12, date: 25, desc: "성탄절" },
];

// 월 일수 데이터
export const NUM_OF_DATES_IN_MONTH = [
  null,
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

// 최소 비상 근무자 수
export const MIN_ONCALL_MEMBER = 5;

// 최대 비상 근무자 수
export const MAX_ONCALL_MEMBER = 35;

// 최소 닉네임 길이
export const MIN_NICKNAME_LENGTH = 1;

// 최대 닉네임 길이
export const MAX_NICKNAME_LENGTH = 5;
