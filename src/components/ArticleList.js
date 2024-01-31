import React from "react";
import Article from "./Article";

export default function ArticleList(props) {
  const { posts } = props;

  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}
