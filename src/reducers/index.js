import {
  ADD_REMINDER,
  DELETE_REMINDER,
} from '../constants';
import {
  getCookies,
  bakeCookie,
} from './cookies';

const reminder = (action) => {
  const { text, dueDate } = action;
  return {
    text,
    dueDate,
    id: Math.random(),
  };
};

const removeById = (state = [], id) => {
  const reminders = state.filter(
    item => item.id !== id,
  );
  return reminders;
};

const reminders = (state = getCookies('reminders'), action) => {
  switch (action.type) {
    case ADD_REMINDER: {
      const newReminder = reminder(action);
      bakeCookie('reminders', newReminder);

      return [...state, newReminder];
    }

    case DELETE_REMINDER: {
      const newReminders = removeById(state, action.id);
      bakeCookie('reminders', newReminders);

      return newReminders;
    }

    default:
      return state;
  }
};

export default reminders;
