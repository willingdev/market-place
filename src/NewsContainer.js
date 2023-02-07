import React from "react";
import NewsItem from "./NewsItem";
function NewsContainer(props) {
  const { news } = props;

  if (!news) return <div>loading...</div>;

  const listItems = news.map((item,index) => <NewsItem  key={index} title={item.title} description={item.description}/>);

  return <div> {listItems}</div>;
}

export default NewsContainer;
