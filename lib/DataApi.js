
const mapIntoObject = (array) => {
  return array.reduce((newObject, value) => {
      newObject[value.id] = value;
      return newObject;
  }, {})
}

class DataApi {
  constructor(data) {
    this.data = data;
  }
  getArticles = () =>  mapIntoObject(this.data.articles);
  getAuthors = () => mapIntoObject(this.data.authors);
}

export default DataApi;
