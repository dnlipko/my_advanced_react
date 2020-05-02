import React from 'react';

export const Article = ({ article, author }) => {
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <div>
        <a href={author.website}></a>
      </div>
      <div>{article.body}</div>
    </div>
  )
}
