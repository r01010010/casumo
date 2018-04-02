/**
 * Pure functions helper for search process
 */

import _ from 'lodash';

/**
 * Checks if user actually is searching anything
 * @method isEmptySearch
 * @param  {Search}      search [description]
 * @return {Boolean}            [description]
 */
export function isEmptySearch(search) {
  const { title, author, genres } = search;
  const { isEmpty } = _;

  return (isEmpty(title) && isEmpty(author) && isEmpty(genres));
}

/**
 * Checks if both search objects are deeply equal
 * @method isSameSearch
 * @param  {Search}     pastSearch [description]
 * @param  {Search}     newSearch  [description]
 * @return {Boolean}               [description]
 */
export function isSameSearch(pastSearch, newSearch) {
  const fields = Object.keys(newSearch);
  const fieldsCount = fields.length;
  let coincidenceCount = 0;

  fields.forEach(field => {
    const pastSearchField = pastSearch[field];
    const newSearchField = newSearch[field];
    const areSameLength = (newSearchField.length === pastSearchField.length);

    if (areSameLength) {
      if (_.isString(newSearchField)){
        if (_.isEmpty(pastSearchField) && _.isEmpty(newSearchField))
          coincidenceCount++;
        else if (newSearchField === pastSearchField) {
          coincidenceCount++;
        }
      } else if (_.isArray(newSearchField)) {
        const intersection = _.intersection(newSearchField, pastSearchField);
        if (intersection.length === newSearchField.length) {
          coincidenceCount++;
        }
      }
    }
  });

  return coincidenceCount === fieldsCount;
}

/**
 * Checks if same search was already performed and returns cached results for it
 * @method searchInHistory
 * @param  {Array<Request>}        history [description]
 * @param  {Search}        search  [description]
 * @return {Boolean|Request}                [description]
 */
export function searchInHistory(history, search) {
  const requestsIds = Object.keys(history);
  const requestsIdsCount = requestsIds.length;

  for(let i=requestsIdsCount-1; i >= 0; i--){
    const request = history[requestsIds[i]];
    if (request.finished && isSameSearch(request.search, search)) {
      return request;
    }
  }

  return false;
}

/**
 * Determines if prevSearch results can be reused as base for newSearch
 * @method isPrevSearch
 * @param  {Search}     prevSearch [description]
 * @param  {Search}     newSearch  [description]
 * @return {Boolean}               [description]
 */
export function isPrevSearch(prevSearch, newSearch) {
  const fields = Object.keys(newSearch);
  let coincidentFields = 0;

  fields.forEach(field => {
    const prevField = prevSearch[field];
    const newField = newSearch[field];

    if (_.isString(newField)){
      if (_.isEmpty(prevField) || _.includes(newField, prevField)) {
        coincidentFields++;
      }
    } else {
      let coincidentalArrayItems = 0;

      if (_.isEmpty(newField) || _.isEmpty(prevField)) {
        coincidentFields++;
      } else {
        prevField.forEach(item => {
          if (_.includes(newField, item)) coincidentalArrayItems++;
        });

        if (coincidentalArrayItems === prevField.length - 1) {
          coincidentFields++;
        }
      }
    }
  });

  return coincidentFields === fields.length;
}

/**
 * Iterates over cached results till it finds the last one whose results can be
 * reused as base for a new search
 * @method getReusablePrevResults
 * @param  {Array<Requests>}               history [description]
 * @param  {Search}               search  [description]
 * @return {Boolean|Array<Film>}                       [description]
 */
export function getReusablePrevResults(history, search) {
  const requestsIds = Object.keys(history);
  const requestsIdsCount = requestsIds.length - 1;

  for(let i = requestsIdsCount; i >= 1; i--){
    const request = history[requestsIds[i]];
    if (request && request.finished && isPrevSearch(request.search, search)) {
      return request.filteredLibrary;
    }
  }

  return false;
}

export default {
  isEmptySearch,
  isPrevSearch,
  isSameSearch,
  getReusablePrevResults,
  searchInHistory
}
