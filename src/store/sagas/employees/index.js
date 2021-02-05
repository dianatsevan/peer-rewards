import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

import { loadEmployeesSuccess } from '../../actions/employees';

function* fetchEmployees() {
  try {
    const employees = yield call(() => axios.get('http://localhost:3000/employees'));

    yield put(loadEmployeesSuccess(employees.data));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchFetchData() {
  yield takeEvery('REQUEST_EMPLOYEES', fetchEmployees);
}
