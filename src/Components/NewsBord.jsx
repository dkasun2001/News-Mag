import { useEffect, useState } from "preact/hooks";
import NewsItem from "./NewsItem";

const NewsBord = ({ category }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2def08bc4d3e4da58b4ef7781e2ee693`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  },[category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBord;
