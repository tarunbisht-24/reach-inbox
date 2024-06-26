import React from 'react';

interface EmailListProps {
  emails: any[];
  onSelectEmail: (email: any) => void;
}

const EmailList: React.FC<EmailListProps> = ({ emails, onSelectEmail }) => {
  return (
    <div>
      {emails.map(email => (
        <div key={email.id} onClick={() => onSelectEmail(email)}>
          {email.snippet}
        </div>
      ))}
    </div>
  );
};

export default EmailList;
