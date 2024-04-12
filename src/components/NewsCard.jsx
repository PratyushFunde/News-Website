const NewsCard = ({ news }) => {
  return (
    // <div className="card single-card">
    //   <img  src={`${news.urlToImage}`} className="card-image cover-card-image" alt="..." />
    //   <div className="card-body">
    //     <h5 className="card-title">{news.title}</h5>
    //     <p className="card-text news-description ">
    //       {news.description}
    //     </p>
    //     <a href={`${news.url}`} target="_blank" className="btn btn-primary">
    //       Go To Article
    //     </a>
    //     <div className="m-2 text-secondary">{`Written By : ${news.author}`}</div>
    //   </div>
    // </div>

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
