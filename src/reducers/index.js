import { ADD_REMINDER } from '../constants';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random(),
  };
};

const reminders = (state = [], action) => {
  let remindersArray = null;
  switch (action.type) {
    case ADD_REMINDER:
      remindersArray = [...state, reminder(action)];
      console.log('remindersArray', remindersArray);
      return remindersArray;

    default:
      return state;
  }
};

export default reminders;
