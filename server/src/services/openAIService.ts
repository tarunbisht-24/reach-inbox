import axios from 'axios';

const openAIEndpoint = 'https://api.openai.com/v1/completions';
const openAIModel = 'text-davinci-003';

export const analyzeEmail = async (emailContent: string) => {
  const response = await axios.post(openAIEndpoint, {
    prompt: `Categorize the following email into one of these categories: Interested, Not Interested, More information.\n\nEmail: ${emailContent}`,
    max_tokens: 50,
    model: openAIModel,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    }
  });
  return response.data.choices[0].text.trim();
};

export const generateReply = async (emailContent: string) => {
  const response = await axios.post(openAIEndpoint, {
    prompt: `Generate a professional reply for the following email: ${emailContent}`,
    max_tokens: 150,
    model: openAIModel,
  }, {
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    }
  });
  return response.data.choices[0].text.trim();
};
