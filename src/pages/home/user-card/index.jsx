import React from 'react';
import PropTypes from 'prop-types';

import MatGiveAwardModal from '../../../components/modals/give-award-modal';

const UserCard = ({
  user: {
    avatar,
    firstName,
    lastName,
    occupation,
    totalRewards,
    give,
  },
}) => (
  <div className="relative bg-white flex flex-col items-center lg:w-9/12 ring-2 ring-gray-800 ring-opacity-50 rounded-lg sm:flex-row sm:items-stretch sm:w-full xl:w-7/12">

    <div className="flex flex-none relative">
      <img
        className="h-full w-48 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
        src={avatar}
        alt="User's avatar"
      />
    </div>

    <div className="flex-auto md:m-5 p-2">
      <h2 className="flex-auto text-2xl font-semibold">
        {firstName}
        {lastName}
      </h2>
      <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">{occupation}</div>
    </div>

    <div className="flex flex-auto flex-col items-center mb-4 sm:items-start sm:m-0 sm:p-2">
      <div className="flex flex-col items-center sm:items-start flex-auto text-xl">
        My rewards
        <span className="font-semibold">
          $
          {totalRewards}
        </span>
      </div>

      <div className="flex flex-col items-center sm:items-start flex-auto text-xl mt-6">
        Give
        <span className="font-semibold">
          $
          {give}
        </span>
      </div>
    </div>

    <div className="absolute -bottom-4 -right-4 rounded">
      <MatGiveAwardModal />
    </div>
  </div>
);
// };

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    totalRewards: PropTypes.number.isRequired,
    give: PropTypes.number.isRequired,
  }).isRequired,
};

export default UserCard;
