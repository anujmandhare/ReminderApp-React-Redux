import constants from "../constants";

const addReminder = (text, date) => ({
  type: constants.ADD_REMINDER,
  text,
  date,
});

const removeReminder = (id) => ({ type: constants.REMOVE_REMINDER, id });

const removeAllReminder = () => ({ type: constants.REMOVE_ALL_REMINDERS });

export { addReminder, removeReminder, removeAllReminder };
