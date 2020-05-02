import React from 'react';
import { Article } from './Article';

export const ArticleList = ({ articles, authors }) => {
  return (
    <div>
      {Object.values(articles)
        .map((article) => (
          <Article
            article={article}
            author={authors[article.authorId]}
          />
        ))
      }
    </div>
  )
}
