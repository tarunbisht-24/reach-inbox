import { useState, useEffect } from 'react';
import axios from 'axios';

const useEmails = () => {
  const [emails, setEmails] = useState<any[]>([]);

  useEffect(() => {
    // Fetch emails
    const fetchEmails = async () => {
      const response = await axios.get('http://localhost:5000/api/emails');
      setEmails(response.data.emails);
    };

    fetchEmails();
  }, []);

  return emails;
};

export default useEmails;
