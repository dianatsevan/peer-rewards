import React from 'react';
import { useSelector } from 'react-redux';

import Feed from '../../../components/feed';

const UserActivity = () => {
  const [userData, rewardsData] = useSelector(({
    userData: { user },
    rewardsData: { rewards },
  }) => [user, rewards]);

  const filteredRewards = rewardsData.filter((reward) => +reward.givingId === +userData.id);

  return (
    <Feed history={filteredRewards} />
  );
};

export default UserActivity;
