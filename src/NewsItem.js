import React from "react";

function NewsItem(props) {

  const {title,description}= props

  return (
    <div>
    <div className="p-6 rounded-lg shadow-lg bg-white">
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        {title}
      </h5>
      <p className="text-gray-700 text-base mb-4">
         {description}
      </p>
    </div>
  </div>
  );
}

export default NewsItem;
