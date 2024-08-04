const fetch = require('node-fetch');

const API_URL = 'https://emoji-api1.p.rapidapi.com/emojis/popular';
const API_KEY = '18cba466bemsh05889b43b444132p1faac9jsn61bb856eb865'; // replace with your actual API key
const API_HOST = 'emoji-api1.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST
  }
};

async function fetchPopularEmojis() {
  try {
    const response = await fetch(API_URL, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const emojis = await response.json();
    console.log(emojis);
  } catch (error) {
    console.error('Error fetching popular emojis:', error);
  }
}

fetchPopularEmojis();