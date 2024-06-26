import React from 'react';
import OAuthGmail from '../components/OAuthGmail';
import OAuthOutlook from '../components/OAuthOutlook';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to ReachInbox</h1>
      <OAuthGmail />
      <OAuthOutlook />
    </div>
  );
};

export default Home;
