# News App using ReactJS and Bootstrap

This is a ReactJS application that fetches news articles from the news API and displays them in a user-friendly interface. The application uses Bootstrap components for styling.

## Features

- Fetches news articles from a news API
- Displays articles with images, titles, and descriptions
- Responsive design using Bootstrap

## Screenshots

![Screenshot 1](https://github.com/dkasun2001/news-mag/blob/main/screenshot1.JPG)
![Screenshot 2](https://github.com/dkasun2001/news-mag/blob/main/screenshot2.JPG)

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository
   ```bash
   git clone https://github.com/dkasun2001/news-mag.git
   ```
2. Install dependencies
 ```bash
   npm install
   ```
4. Create a .env file in the root directory and add your news API key: REACT_APP_API_KEY=YOUR_API_KEY
5. Start the development server
 ```bash
   npm run start
   ```
## Dependencies
   - ReactJS
   - Bootstrap
   - News API

## Folder Structure
   src/
     components/
       Navbar.jsx
       NewsBoard.jsx
       NewsItem.jsx
     App.jsx
   .env
   package.json
   public/
     index.html

## Usage
The application fetches news articles by category. By default, it fetches general news articles. You can filter the news articles by clicking on the category buttons in the navbar.

## API
The application uses the news API to fetch news articles. You can find more information about the news API here: https://newsapi.org/

## License
#MIT

This readme file covers the basic steps to get you started with the project. Be sure to replace YOUR_API_KEY with your own news API key before running the application.
