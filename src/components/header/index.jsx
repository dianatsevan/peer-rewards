import React from 'react';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => (
  <div className="flex justify-between items-center flex-shrink-0 h-16 py-4 bg-gray-600">
    <div className="ml-6">
      <Button
        variant="contained"
        className="bg-white"
      >
        <MenuIcon />
      </Button>
    </div>

    <div className="mr-6">
      <Button
        variant="contained"
        className="bg-white"
      >
        <AccountCircleIcon />
      </Button>
    </div>
  </div>
);

export default Header;
