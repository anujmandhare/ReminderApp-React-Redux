import constants from "../constants";
import { bake_cookie, read_cookie } from "sfcookies";

let count = 1;

//Add reminder to State funtion
const addReminder = (data) => {
  const { text, date } = data;
  return { text, id: count++, date };
};

//Remove reminder from State funtion
const removeReminder = (reminder, id) => {
  const index = reminder.findIndex((_) => _.id === id);
  reminder.splice(index, 1);
  return reminder;
};

//Main Reducer
const reducer = (state = [], action) => {
  var reminder = null;
  state = read_cookie("reminder", reminder);
  count = read_cookie("count", count);
  switch (action.type) {
    case constants.ADD_REMINDER:
      reminder = [...state, addReminder(action)];
      bake_cookie("reminder", reminder);
      bake_cookie("count", count);
      return reminder;
      break;

    case constants.REMOVE_REMINDER:
      reminder = [...state];
      reminder = removeReminder(reminder, action.id);
      bake_cookie("reminder", reminder);
      bake_cookie("count", count);
      return reminder;
      break;

    case constants.REMOVE_ALL_REMINDERS:
      bake_cookie("reminder", []);
      bake_cookie("count", 1);
      return [];
      break;

    default:
      return state;
      break;
  }
};
export default reducer;
