import React, { useState } from 'react';
import useEmails from '../hooks/useEmails';
import EmailList from '../components/EmailList';
import EmailViewer from '../components/EmailViewer';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const emails = useEmails();
  const [selectedEmail, setSelectedEmail] = useState<any>(null);

  const handleFetchEmails = async (provider: 'gmail' | 'outlook') => {
    if (provider === 'gmail') {
      await axios.get('http://localhost:5000/api/emails/gmail');
    } else {
      // You would need to handle Outlook OAuth and access token here
      const accessToken = 'YOUR_OUTLOOK_ACCESS_TOKEN';
      await axios.post('http://localhost:5000/api/emails/outlook', { accessToken });
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => handleFetchEmails('gmail')}>Fetch Gmail Emails</button>
      <button onClick={() => handleFetchEmails('outlook')}>Fetch Outlook Emails</button>
      <div style={{ display: 'flex' }}>
        <EmailList emails={emails} onSelectEmail={setSelectedEmail} />
        {selectedEmail && <EmailViewer email={selectedEmail} />}
      </div>
    </div>
  );
};

export default Dashboard;
