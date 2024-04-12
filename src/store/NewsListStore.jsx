import { countryToAlpha2 } from "country-to-iso";
import { createContext, useEffect, useReducer, useState } from "react";
import React from "react";
import Loading from "../components/Loading";
// const apiKey= process.env.REACT_APP_API_KEY;
export const NewsList = createContext({
  newsList: [],
});

const newsListReducer = (curList, action) => {
  let newList = curList;
  if (action.type == "INITIAL_POSTS") {
    // console.log(action.payload.news);
    newList = action.payload.news;
  }
  return newList;
};

const NewsListProvider = ({ children, setNoNews }) => {
  const [loading, setLoading] = useState(true);
  const [searchCountry, setsearchCountry] = useState("In");
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${searchCountry}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res.articles.length);
        if (res.articles.length == 0) {
          setNoNews(true);
        } else {
          setNoNews(false);
        }
        setLoading(false);
        dispatchNewsList({
          type: "INITIAL_POSTS",
          payload: {
            news: res.articles,
          },
        });
      });
  }, [searchCountry]);

  const getNews = (country) => {
    // dispatchNewsList({
    //   type:"GET_NEWS",
    //   payload:{
    //       country:country.current.value,
    //   }
    // })

    setsearchCountry(countryToAlpha2(country.current.value));
    country.current.value = "";
  };

  const [newsList, dispatchNewsList] = useReducer(newsListReducer, []);
  return (
    <>
     {!loading && <NewsList.Provider value={{ newsList, getNews }}>
        {!loading && children}
      </NewsList.Provider>}
      {loading && <Loading />}
     
    </>
  );
};

export default NewsListProvider;

let DEFAULT_LIST = [
  {
    id: 1,
    author: "MICHELLE L. PRICE",
    title:
      "Trump's campaign is expecting to raise a record $43 million at a high-dollar Florida fundraiser - Yahoo Finance",
    description:
      "Donald Trump's campaign is expecting to raise more than $40 million on Saturday when major donors gather for his biggest fundraiser yet.  The event at the...",
    url: "https://finance.yahoo.com/news/trump-campaign-expecting-raise-43-040302830.html",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/hM9Wq1QIgJQ7lzCsIPqLVg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/82a2a677565eb1ccb976a42c4e8a4a99",
  },
  {
    id: 2,
    author: "LEE KEATH",
    title:
      "Israel says its strike that killed aid workers was a mistake. Rights groups say it was no anomaly - The Associated Press",
    description:
      "The Israeli military says two basic mistakes led to the series of drone strikes that killed seven staffers from the World Central Kitchen charity. The explanation raises a question: If that's the case, how often has Israel made such mistakes in its 6-month-ol…",
    url: "https://apnews.com/article/israel-gaza-mistakes-aid-workers-killed-wck-cb695de7f6ef9e9d7d9cf8fbf6e95364",
    urlToImage:
      "https://dims.apnews.com/dims4/default/96fb678/2147483647/strip/true/crop/5071x2852+0+264/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F83%2Fab%2Fc4e2446c64f5873664bd07862568%2F7dd6343a58ed4ad3a757d618a7e39049",
  },
];
