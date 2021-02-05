import React from 'react';
import Header from './components/header';
import UserInfo from './pages/home';
import { MOCKED_USER_ID } from './constants';

import './app.scss';

const App = () => (
  <div className="d-flex flex-column w-screen h-screen font-mono">
    <Header />
    <UserInfo userId={MOCKED_USER_ID} />
  </div>
);

export default App;
