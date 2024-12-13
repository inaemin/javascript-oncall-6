class AssignManager {
  #calendar;
  #weekdayOncallMembers;
  #weekendOncallMembers;

  constructor(calendar, weekday, weekend) {
    this.#calendar = calendar;
    this.#weekdayOncallMembers = weekday;
    this.#weekendOncallMembers = weekend;
    this.assignOncallMembers();
    this.findAdjacentMemeber();
  }

  assignOncallMembers() {
    let p1 = 0;
    let p2 = 0;
    for (let date of this.#calendar.getCalendar()) {
      switch (date.isHoliday()) {
        case false:
          date.setOncallMember(this.#weekdayOncallMembers[p1]);
          p1 = (p1 + 1) % this.#weekdayOncallMembers.length;
          break;
        case true:
          date.setOncallMember(this.#weekendOncallMembers[p2]);
          p2 = (p2 + 1) % this.#weekendOncallMembers.length;
          break;
      }
    }
  }

  findAdjacentMemeber() {
    for (let i = 0; i < this.#calendar.getCalendar().length - 1; i++) {
      const curr = this.#calendar.getCalendar()[i];
      const next = this.#calendar.getCalendar()[i + 1];
      if (curr.getOncallMember() === next.getOncallMember()) {
        let swapIndex = i + 2;
        while (swapIndex < this.#calendar.getCalendar().length) {
          if (
            next.isHoliday() ===
            this.#calendar.getCalendar()[swapIndex].isHoliday()
          )
            break;
          swapIndex++;
        }
        this.#swapWithNextShift(i + 1, swapIndex);
      }
    }
  }

  #swapWithNextShift(left, right) {
    const swap1 = this.#calendar.getCalendar()[left];
    const swap2 = this.#calendar.getCalendar()[right];
    let temp = swap1.getOncallMember();
    swap1.setOncallMember(swap2.getOncallMember());
    swap2.setOncallMember(temp);
  }
}

export default AssignManager;
