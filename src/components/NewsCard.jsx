const NewsCard = ({ news }) => {
  return (


    <div className="news-card">
    <img src={`${news.urlToImage}`} alt="Image Not Available"/>
    <h2>{`${news.title}`}</h2>
    <p>{`${news.description}`}</p>
    <p className="author">{`Author:${news.author}`}</p>
    <a href={`${news.url}`} target="_blank">Read More</a>
</div>
  );
};

export default NewsCard;
