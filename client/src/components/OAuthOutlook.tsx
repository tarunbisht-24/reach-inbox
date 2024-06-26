import React from 'react';

const OAuthOutlook: React.FC = () => {
  const handleOutlookLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/outlook';
  };

  return (
    <button onClick={handleOutlookLogin}>Login with Outlook</button>
  );
};

export default OAuthOutlook;
