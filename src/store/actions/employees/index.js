import { createActions } from 'redux-actions';

export const {
  requestEmployees,
  loadEmployeesSuccess,
} = createActions(
  'REQUEST_EMPLOYEES',
  'LOAD_EMPLOYEES_SUCCESS',
);
