import { combineReducers } from 'redux';

import rewardsData from './rewards';
import userData from './user';
import employeesData from './employees';

export default combineReducers({
  rewardsData,
  userData,
  employeesData,
});
