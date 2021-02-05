import { handleActions } from 'redux-actions';
import * as actions from '../../actions/user';

const initialData = {
  user: {
    id: '',
    occupation: '',
    firstName: '',
    lastName: '',
    totalRewards: 0,
    give: 0,
    avatar: '',
  },
  loading: false,
  isFailed: false,
};

export default handleActions(
  {
    [actions.requestUserData]: (state) => state,
    [actions.loadUserData]: (state, { payload }) => ({
      ...state,
      loading: payload,
    }),
    [actions.loadUserDataSuccess]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
    [actions.loadUserDataError]: (state, { payload }) => ({
      ...state,
      isFailed: payload,
    }),
    [actions.decreaseGiveAmount]: (state, { payload }) => ({
      ...state,
      user: {
        ...state.user,
        give: state.user.give - payload,
      },
    }),
  },
  initialData,
);
