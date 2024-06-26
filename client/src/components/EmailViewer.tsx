import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface EmailViewerProps {
  email: any;
}

const EmailViewer: React.FC<EmailViewerProps> = ({ email }) => {
  const [category, setCategory] = useState<string>('');
  const [reply, setReply] = useState<string>('');

  useEffect(() => {
    const categorizeEmail = async () => {
      const response = await axios.post('http://localhost:5000/api/emails/categorize', { content: email.snippet });
      setCategory(response.data.category);
    };

    const generateEmailReply = async () => {
      const response = await axios.post('http://localhost:5000/api/emails/reply', { content: email.snippet });
      setReply(response.data.reply);
    };

    categorizeEmail();
    generateEmailReply();
  }, [email]);

  return (
    <div>
      <h3>Email Content</h3>
      <p>{email.snippet}</p>
      <h3>Category: {category}</h3>
      <h3>Suggested Reply</h3>
      <p>{reply}</p>
    </div>
  );
};

export default EmailViewer;
