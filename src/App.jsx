import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import NewsListProvider, { NewsList } from "./store/NewsListStore";
import Empty from "./components/Empty";
function App() {
  // const {newsList}=useContext(NewsList)
  const [noNews, setNoNews] = useState()
  // const {loading,searchCountry}=useContext(NewsList);
  return (
    <>
    
      <NewsListProvider setNoNews={setNoNews}>
        <Header />
        {noNews&&<Empty/>}
        <CardContainer />
        <Footer />
      </NewsListProvider>
    </>
  );
}

export default App;
