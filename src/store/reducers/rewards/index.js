import { handleActions } from 'redux-actions';
import * as actions from '../../actions/rewards';

const initialData = {
  loading: false,
  rewards: [],
  isFailed: false,
};

export default handleActions(
  {
    [actions.requestRewards]: (state) => state,
    [actions.loadRewards]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    [actions.loadRewardsSuccess]: (state, { payload }) => ({
      ...state,
      rewards: payload,
    }),
    [actions.loadRewardsError]: (state, { payload }) => ({
      ...state,
      isFailed: payload,
    }),
    // [actions.giveReward]: (state, { payload }) => state,
    [actions.addNewReward]: (state, { payload }) => ({
      ...state,
      rewards: [payload, ...state.rewards],
    }),
  },
  initialData,
);
