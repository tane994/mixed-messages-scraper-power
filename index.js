import { getH2Titles } from './scraper/scraper.js'

const urlArticle = 'https://medium.com/thefreshwrites/top-8-laws-from-the-48-laws-of-power-by-robert-greene-2cd9097639a9';

async function getLaws() { 
    const h2Titles = await getH2Titles(urlArticle);

    const lawsArr = [];
     h2Titles.slice(0, 6).forEach(element => {
        lawsArr.push(element);
      });
      return lawsArr;
  }
  
const lawsArr =  await getLaws();
console.log(lawsArr);


