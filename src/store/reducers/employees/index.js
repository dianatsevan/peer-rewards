import { handleActions } from 'redux-actions';
import * as actions from '../../actions/employees';

const initialData = {
  employees: [],
};

export default handleActions(
  {
    [actions.requestEmployees]: (state) => state,
    [actions.loadEmployeesSuccess]: (state, { payload }) => ({
      ...state,
      employees: payload,
    }),
  },
  initialData,
);
