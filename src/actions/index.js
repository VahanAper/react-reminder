import {
  ADD_REMINDER,
  DELETE_REMINDER,
} from '../constants';

export const addReminder = text => ({
  type: ADD_REMINDER,
  text,
});

export const deleteReminder = id => ({
  type: DELETE_REMINDER,
  id,
});
