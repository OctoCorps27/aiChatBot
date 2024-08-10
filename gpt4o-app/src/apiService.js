import axios from 'axios';

export const getGPTResponse = async (message) => {
  const options = {
    method: 'POST',
    url: 'https://chatgpt-42.p.rapidapi.com/chatgpt',
    headers: {
      'x-rapidapi-key': '5f834ba477msh534b5b3fbdb9afbp1554b2jsna46e8def9c31',
      'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    data: {
      messages: [
        {
          role: 'user',
          content: message
        }
      ],
      web_access: false
    }
  };

  try {
    const response = await axios.request(options);
    return response.data.result;  // this is to only return the result in the response body
  } catch (error) {
    console.error(error);
    throw error;
  }
};
