import InputManager from "./InputManager.js";
import AssignManager from "./AssignManager.js";
import Calendar from "./Calendar.js";
import OutputManager from "./OutputManager.js";

class App {
  #calendarManager;
  #assignManager;

  async run() {
    const [month, firstDay] = await InputManager.readOncallMonthAndStartDay();
    this.#calendarManager = new Calendar(month, firstDay);
    const [weekday, weekend] = await InputManager.readOncallMembers();
    this.#assignManager = new AssignManager(
      this.#calendarManager,
      weekday,
      weekend
    );
    OutputManager.printOncallMemberOnCalendar(this.#calendarManager);
  }
}

export default App;
