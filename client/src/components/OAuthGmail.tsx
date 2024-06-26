import React from 'react';

const OAuthGmail: React.FC = () => {
  const handleGmailLogin = () => {
    window.location.href = 'http://localhost:5000/api/auth/google';
  };

  return (
    <button onClick={handleGmailLogin}>Login with Gmail</button>
  );
};

export default OAuthGmail;
