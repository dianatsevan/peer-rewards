import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import UserCard from './user-card';
import Tabs from '../../components/tabs';
import UserActivity from './user-activity';
import UserFeed from './user-feed';
import { requestUserData } from '../../store/actions/user';
import { requestRewards } from '../../store/actions/rewards';

import './index.scss';

const tabs = [
  {
    title: 'Feed',
    children: <UserFeed />,
  },
  {
    title: 'Activity',
    children: <UserActivity />,
  },
];

const UserInfo = ({ userId }) => {
  const dispatch = useDispatch();
  const userData = useSelector(({ userData: { user } }) => user);

  useEffect(() => {
    dispatch(requestUserData(userId));
    dispatch(requestRewards());
  }, [dispatch, userId]);

  return (
    <>
      <div className="user-card-container flex justify-center p-10 bg-gray-300">
        <UserCard user={userData} />
      </div>

      <Tabs tabs={tabs} />
    </>
  );
};

UserInfo.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserInfo;
