import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  tabId,
  isHidden,
  title,
  onClick,
}) => {
  const click = useCallback(() => onClick(tabId), [onClick, tabId]);

  return (
    <li
      className={`cursor-pointer ${isHidden ? '' : 'text-gray-800 underline'}`}
      onClick={click}
    >
      {title}
    </li>
  );
};

Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  isHidden: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
