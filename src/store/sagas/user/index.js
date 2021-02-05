import axios from 'axios';
import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';

import {
  loadUserData,
  loadUserDataSuccess,
  loadUserDataError,
} from '../../actions/user';

function* fetchUserData({ payload }) {
  try {
    yield put(loadUserData(true));

    const user = yield call(() => axios.get(`http://localhost:3000/employees/${payload}`));

    yield put(loadUserDataSuccess(user.data));
    yield put(loadUserData(false));

    const wasFailed = yield select((state) => state.userData.isFailed);

    if (wasFailed) yield put(loadUserDataError(false));
  } catch (e) {
    yield put(loadUserDataError(true));
  }
}

export default function* watchFetchData() {
  yield takeEvery('REQUEST_USER_DATA', fetchUserData);
}
