import axios from 'axios';
import {
  takeEvery, call, put, select,
} from 'redux-saga/effects';

import {
  loadRewards,
  loadRewardsSuccess,
  loadRewardsError,
} from '../../actions/rewards';

function* fetchRewards() {
  try {
    yield put(loadRewards(true));

    const rewards = yield call(() => axios.get('http://localhost:3000/rewards'));

    yield put(loadRewardsSuccess(rewards.data));
    yield put(loadRewards(false));

    const wasFailed = yield select((state) => state.rewardsData.isFailed);

    if (wasFailed) yield put(loadRewardsError(false));
  } catch (e) {
    yield put(loadRewardsError(true));
  }
}

export default function* watchFetchData() {
  yield takeEvery('REQUEST_REWARDS', fetchRewards);
}
