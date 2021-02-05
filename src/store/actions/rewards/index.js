import { createActions } from 'redux-actions';

export const {
  requestRewards,
  loadRewards,
  loadRewardsSuccess,
  loadRewardsError,
  giveReward,
  addNewReward,
} = createActions(
  'REQUEST_REWARDS',
  'LOAD_REWARDS',
  'LOAD_REWARDS_SUCCESS',
  'LOAD_REWARDS_ERROR',
  'GIVE_REWARD',
  'ADD_NEW_REWARD',
);
