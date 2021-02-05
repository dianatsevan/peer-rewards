import React from 'react';
import { useSelector } from 'react-redux';

import Feed from '../../../components/feed';

const UserFeed = () => {
  const rewardsData = useSelector(({ rewardsData: { rewards } }) => rewards);

  return (
    <Feed history={rewardsData} />
  );
};

export default UserFeed;
