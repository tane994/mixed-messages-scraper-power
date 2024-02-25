import * as cheerio from 'cheerio';
import axios from 'axios';

async function getH2Titles(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const laws = [];

    $('h2').each((index, element) => {
      const lawTitle = $(element).text().trim();
      const lawDescription = $(element).next('p').text().trim();

      laws.push({ title: lawTitle, description: lawDescription });
    });

    return laws; 

  } catch (error) {
    console.error('Error fetching or parsing data:', error);
    return []; 
  }
}


export { getH2Titles };