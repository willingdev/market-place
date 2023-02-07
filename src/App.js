import React from "react";
import NewsContainer from "./NewsContainer";
import { fetchNews, findNews } from "./api";
import "./App.css";

function App() {
  const [news, setNews] = React.useState(null);
  let [search, setSearch] = React.useState("");
  React.useEffect(() => {
    fetchNews(setNews);
  }, []);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  function onSearch() {
    setNews(null);
    findNews(search, setNews);
  }

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-x-2 pt-8">
            <input
              type="text"
              className="rounded text-pink-500"
              value={search}
              onChange={handleChange}
            />
            <button
              onClick={onSearch}
              type="button"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Search
            </button>
          </div>
          <NewsContainer news={news} />
        </div>
      </div>
    </div>
  );
}

export default App;
