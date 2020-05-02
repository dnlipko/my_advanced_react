import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('express articles as an object', () => {
    const articles = api.getArticles();
    const [{ id, title }] = data.articles;

    console.log(articles);

    expect(articles).toHaveProperty(id);
    expect(articles[id].title).toBe(title);
  });

  it('express authors as an object', () => {
    const authors = api.getAuthors();
    const [{ id, firstName }] = data.authors;

    expect(authors).toHaveProperty(id);
    expect(authors[id].firstName).toBe(firstName);
  });
})
