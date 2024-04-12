import { useContext } from "react";
import NewsCard from "./NewsCard";
import { NewsList } from "../store/NewsListStore";

const CardContainer = () => {
  const {newsList}=useContext(NewsList)
  return (
    <>
      <div className="card-container">
        {newsList.map((news)=>(
          // console.log(news)
          // console.log(news.author)
          <NewsCard key={news.id} news={news} />
        ))}
      
      </div>
      
    </>
  );
};

export default CardContainer;
