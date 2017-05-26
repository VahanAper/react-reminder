import {
  ADD_REMINDER,
  DELETE_REMINDER,
} from '../constants';

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

const reminders = (state = [], action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return [...state, reminder(action)];

    case DELETE_REMINDER:
      return removeById(state, action.id);

    default:
      return state;
  }
};

export default reminders;
