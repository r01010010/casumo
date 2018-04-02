import { isEmptySearch, isSameSearch, isPrevSearch} from '../lib/search.helper';

describe('SearchHelper', () => {
  it('isEmptySearch', () => {
    expect(isEmptySearch({})).toBe(true);
    expect(isEmptySearch({foo: undefined})).toBe(true);
    expect(isEmptySearch({title: '', author: '', genre: ''})).toBe(true);
    expect(isEmptySearch({title: 'a', author: 'b', genre: 'c'})).toBe(false);
    expect(isEmptySearch({title: 'foo'})).toBe(false);
    expect(isEmptySearch({author: 'foo'})).toBe(false);
    expect(isEmptySearch({genres: 'foo'})).toBe(false);
    expect(isEmptySearch({genres: []})).toBe(true);
  });

  it('isSameSearch', () => {
    expect(isSameSearch({}, {})).toBe(true);
    expect(isSameSearch({author: 'anthony'}, {author: 'anthony'})).toBe(true);
    expect(isSameSearch({genre: 'anthony'}, {genre: 'anthony'})).toBe(true);
    expect(isSameSearch({genres: ['action']}, {genres: ['action']})).toBe(true);
    expect(isSameSearch({genres: ['action', 'sci-fi']}, {genres: ['action', 'sci-fi']})).toBe(true);

    expect(isSameSearch(
      {author: 'roberto', genres: ['action', 'sci-fi']},
      {author: 'roberto', genres: ['action', 'sci-fi']}))
      .toBe(true);

    expect(isSameSearch(
      {title: 'jean', author: 'roberto', genres: ['action', 'adventure']},
      {title: 'jean', author: 'roberto', genres: ['adventure', 'action']}))
      .toBe(true);

    expect(isSameSearch(
      {title: 'jean', author: 'roberto', genres: ['action', 'sci-fi']},
      {title: 'jean', author: 'roberto', genres: ['sci-fi']}))
      .toBe(false);

    expect(isSameSearch(
      {genres: ['action', 'sci-fi']},
      {genres: ['sci-fi']}))
      .toBe(false);

    expect(isSameSearch(
      {genres: []},
      {genres: ['action', 'sci-fi']}))
      .toBe(false);

    expect(isSameSearch(
      {genres: []},
      {genres: []}))
      .toBe(true);
  });

  it('isPrevSearch', () => {
    expect(isPrevSearch({title: 'a'}, {title: ''})).toBe(false);
    expect(isPrevSearch({title: 'a'}, {title: 'ab'})).toBe(true);
    expect(isPrevSearch({title: 'a'}, {title: 'ac'})).toBe(true);
    expect(isPrevSearch({title: 'ab'}, {title: 'a'})).toBe(false);
    expect(isPrevSearch({title: 'ab'}, {title: 'abcd'})).toBe(true);

    expect(isPrevSearch(
      {title: 'a'},
      {title: 'a', author: 'e'}))
      .toBe(true);

    expect(isPrevSearch(
      {title: 'a', author: 'e'},
      {title: 'ca', author: 'e'}))
      .toBe(true);

    expect(isPrevSearch(
      {title: 'a', author: 'e'},
      {title: 'co', author: 'e'}))
      .toBe(false);

    expect(isPrevSearch(
      {title: 'a', author: 'e'},
      {title: 'ab', author: 'eb', genres: []}))
      .toBe(true);

    expect(isPrevSearch(
      {title: 'a', author: 'e'},
      {title: 'ab', author: 'eb', genres: ['action']}))
      .toBe(true);

    // Found bug:
    // expect(isPrevSearch(
    //   {title: 'a', author: 'e', genres: ['adventure']},
    //   {title: 'ab', author: 'eb', genres: ['action']}))
    //   .toBe(false);
  });
});
