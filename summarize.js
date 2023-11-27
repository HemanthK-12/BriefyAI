const axios = require('axios');
async function summarizeText(text) {
  //code-snippet from Postman while calling the API

  let data = JSON.stringify({
    "inputs": text,
    "parameters": {
      "max_length": 100,
      "min_length": 30
    }
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
    },
    data: data
  };
  try {
    const response = await axios.request(config);
    return response.data[0].summary_text;//since the API returns an array of summary_text objects,we only want to access the property of the first element in the array.
  }
  catch (error) {
    console.log(error);
  }

}

module.exports = summarizeText;