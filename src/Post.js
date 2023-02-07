import React from "react";
import { fetchNews } from "./api";

function Post() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    fetchNews(setPost)
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
