import React, {Component} from 'react';
import DataApi from '../DataApi';
import { data} from '../testData';
import { ArticleList } from './ArticleList';

const api = new DataApi(data);

export default class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  }

  render() {
    const { articles, authors } = this.state;
    return (
      <ArticleList
        articles={articles}
        authors={authors}
      />
    );
  }
}
