import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tab from './tab';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div>
        <ul className="flex justify-center space-x-9 bg-blackpx-10 py-2 m-0 bg-white border-b border-t font-bold text-2xl text-gray-400">
          {tabs.map(({ title }, index) => (
            <Tab
              tabId={index}
              isHidden={index !== activeTab}
              title={title}
              key={title + Math.random()}
              onClick={setActiveTab}
            />
          ))}
        </ul>
      </div>

      <div>
        {tabs.map((tab, index) => (
          <div
            className={index !== activeTab ? 'hidden' : 'block'}
            key={tab.title + Math.random()}
          >
            {tab.children}
          </div>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Tabs;
