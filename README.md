# Law-Inspired Message Generator

This project generates randomized messages combining laws described in "The 48 Laws of Power" with modern professions and personality traits.

## Features

* Fetches and parses laws from a Medium article using web scraping techniques.
* Randomly selects a Law of Power, a contemporary profession, and a personality trait to construct the message.
* Provides error handling for cases when no laws can be extracted. 

## Getting Started

### Prerequisites

1. Node.js and npm (or yarn) installed on your system.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/tane994/mixed-messages-scraper-power.git
   ```

2. Install dependencies:
   ```bash
   cd <your-repo-name>
   npm install 
   ```

### Usage

1. Run the project:
   ```bash
   node index.js 
   ```
   This will generate a random message.

## Example Output

```
AN innovative programmer stated this law: Never Outshine the Master
```

## Technologies Used

* **JavaScript:**  The core programming language.
* **axios:** For making HTTP requests to fetch the Medium article.
* **cheerio:** For parsing and extracting the laws from the HTML.

## Contributing

Contributions to improve and extend the project are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.
