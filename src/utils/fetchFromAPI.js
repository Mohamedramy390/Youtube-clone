import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': '8e6f40e900mshf4ea36fa25f9326p1184ccjsn536b1f640ccb',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}