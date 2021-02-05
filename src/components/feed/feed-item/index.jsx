import React from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({
  item: {
    giving,
    recipient,
    date,
    message,
    avatar,
  },
}) => (
  <div className="flex px-10 py-3 sm:w-full xl:w-7/12 lg:w-9/12">
    <div className="mr-4">
      <img
        className="w-20 mr-4 rounded-full object-cover"
        src={avatar}
        alt={`${giving} avatar`}
      />
    </div>

    <div className="w-full mt-4">
      <div>
        {recipient}
        rewarded by
        {giving}
      </div>
      <div className="text-gray-600 text-xs">{date}</div>
      <div className="mt-6 text-lg">{message}</div>
    </div>
  </div>
);

FeedItem.propTypes = {
  item: PropTypes.shape({
    giving: PropTypes.string.isRequired,
    recipient: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeedItem;
