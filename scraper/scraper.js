import * as cheerio from 'cheerio';
import axios from 'axios';

async function getH2Titles(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const laws = $('h2').map((index, element) => {
      const lawTitle = $(element).text().trim();
      const lawDescription = $(element).next('p').text().trim();

      return { title: lawTitle, description: lawDescription };
    }).get(); 

    return laws; 
  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    throw error; 
  }
}

export { getH2Titles };