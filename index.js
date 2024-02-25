import { getH2Titles } from './scraper/scraper.js';

const urlArticle = 'https://medium.com/thefreshwrites/top-8-laws-from-the-48-laws-of-power-by-robert-greene-2cd9097639a9';
const modernTitles = ["ambitious", "innovative", "driven", "passionate", "charismatic", "dedicated"];
const modernProfessions = ["entrepreneur", "programmer", "scientist", "artist", "designer", "activist"];

const determineArticle = (title) => {
  return ["a", "e", "i", "o", "u"].includes(title[0].toLowerCase()) ? "an" : 'a';
};

async function getLaws() {
    const h2Titles = await getH2Titles(urlArticle);
    console.log(h2Titles);
    return h2Titles.slice(0, 6); 
}

const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

async function generateMessage() {
  try {
    const lawsArr = await getLaws();

    if (lawsArr.length === 0) {
      throw new Error('No laws could be extracted from the article');
    }

    const randomLaw = getRandomElement(lawsArr);
    const randomTitle = getRandomElement(modernTitles);
    const randomProfession = getRandomElement(modernProfessions);
    const article = determineArticle(randomTitle);

    return `${article.toUpperCase()} ${randomTitle} ${randomProfession} stated this law: ${randomLaw.title}`;
  } catch (error) {
    console.error("Error generating message:", error);
    return "An error occurred while generating the message. Please try again.";
  }
}

(async () => {
  const message = await generateMessage();
  console.log(message);
})(); 

