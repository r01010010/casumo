// @flow
type OrderByOptions = '' | 'title' | 'author';

class Search{
  title: string;
  genres: Array<string>;
  author: string;
  orderBy: OrderByOptions;

  constructor(options: Object = {}) {
    const { title, author, genres, orderBy } = options;

    this.title = (title) ? title.toLowerCase() : '';
    this.author = (author) ? author.toLowerCase() : '';
    this.genres = genres || [];
    this.orderBy = (orderBy) ? orderBy.toLowerCase() : '';
  }
}

export default Search;
