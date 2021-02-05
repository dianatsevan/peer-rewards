import React from 'react';
import PropTypes from 'prop-types';

import FeedItem from './feed-item';

const Feed = ({ history }) => (
  <div
    className="flex flex-col items-center divide-y bg-gray-50"
  >
    {history.map((item) => (
      <FeedItem
        item={item}
        key={item.message + Math.random()}
      />
    ))}
  </div>
);

Feed.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Feed;
