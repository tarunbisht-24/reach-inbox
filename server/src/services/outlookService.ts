import axios from 'axios';

const outlookAuthUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize`;
const outlookTokenUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/token`;

export const getOutlookAuthUrl = () => {
  const params = new URLSearchParams({
    client_id: process.env.OUTLOOK_CLIENT_ID,
    response_type: 'code',
    redirect_uri: process.env.OUTLOOK_REDIRECT_URI,
    scope: 'https://graph.microsoft.com/Mail.Read https://graph.microsoft.com/Mail.Send offline_access'
  });
  return `${outlookAuthUrl}?${params.toString()}`;
};

export const setOutlookCredentials = async (code: string) => {
  const params = new URLSearchParams({
    client_id: process.env.OUTLOOK_CLIENT_ID,
    client_secret: process.env.OUTLOOK_CLIENT_SECRET,
    grant_type: 'authorization_code',
    code,
    redirect_uri: process.env.OUTLOOK_REDIRECT_URI
  });
  const response = await axios.post(outlookTokenUrl, params);
  return response.data;
};

export const fetchOutlookEmails = async (accessToken: string) => {
  const response = await axios.get('https://graph.microsoft.com/v1.0/me/messages', {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return response.data.value;
};
