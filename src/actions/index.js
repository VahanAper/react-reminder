import { ADD_REMINDER } from '../constants';

const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text,
  };
  console.log('addReminder', action);
};

export default addReminder;
