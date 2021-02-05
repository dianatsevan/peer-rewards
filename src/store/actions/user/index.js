import { createActions } from 'redux-actions';

export const {
  requestUserData,
  loadUserData,
  loadUserDataSuccess,
  loadUserDataError,
  decreaseGiveAmount,
} = createActions(
  'REQUEST_USER_DATA',
  'LOAD_USER_DATA',
  'LOAD_USER_DATA_SUCCESS',
  'LOAD_USER_DATA_ERROR',
  'DECREASE_GIVE_AMOUNT',
);
