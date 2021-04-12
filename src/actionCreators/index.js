import constants from "../constants";

//Add a new Reminder Action Creator
const addReminder = (text, date) => ({
  type: constants.ADD_REMINDER,
  text,
  date,
});

//Remove a reminder Action Creator
const removeReminder = (id) => ({ type: constants.REMOVE_REMINDER, id });

//Remove All reminders Action Creator
const removeAllReminder = () => ({ type: constants.REMOVE_ALL_REMINDERS });

export { addReminder, removeReminder, removeAllReminder };
