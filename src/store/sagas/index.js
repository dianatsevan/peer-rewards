import { all } from 'redux-saga/effects';

import rewardsSaga from './rewards';
import userSaga from './user';
import employeesSaga from './employees';

export default function* rootSaga() {
  yield all([
    rewardsSaga(),
    userSaga(),
    employeesSaga(),
  ]);
}
