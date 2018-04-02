import _ from 'lodash';

function hasAllValues(filterItems, map) {
  let coincidences = 0;

  filterItems.forEach(value => {
    if (map[value]) coincidences++;
  })

  return coincidences === filterItems.length;
}

function stringIsFound(searchOn, str) {
  return searchOn.indexOf(str) > -1;
}

function checkField(filterValue, filmValue){
  if (_.isString(filterValue))
    return stringIsFound(filmValue, filterValue);
  else {
    return hasAllValues(filterValue, filmValue);
  }
}

function getValidFields(search) {
  const validFields = [];

  Object.keys(search).forEach(field => {
    const value = search[field];
    if(value && value.length > 0) {
      validFields.push(field);
    }
  });

  return validFields;
}

function makeFieldsSearchable(validFields, search){
  validFields.forEach(field => {
    const value = search[field];
    search[field] = (_.isString(value)) ? value.toLowerCase().trim() : value;
  });
}

function filterFilms(search, films, validFields, inclusiveFieldCount) {
  return films.filter(film => {
    let coincidentalFields = 0;

    validFields.forEach(field => {
      if (checkField(search[field], film[field]))
        coincidentalFields++;
    });

    const includeInResults = coincidentalFields === inclusiveFieldCount

    return includeInResults;
  });
}

function filter(search, requestId, reusablePrevResults) {

  const validFields = getValidFields(search);
  const films = reusablePrevResults;
  const inclusiveFieldCount = validFields.length;

  makeFieldsSearchable(validFields, search);

  const results = filterFilms(
    search,
    films,
    validFields,
    inclusiveFieldCount);

  return sendResults(requestId, results);
}

function sendResults(requestId, filteredLibrary) {
  self.postMessage({
    requestId,
    filteredLibrary
  });
}

self.addEventListener('message', function(e) {
  const {
    action,
    search,
    requestId,
    reusablePrevResults
  } = e.data;

  switch(action){
    case 'filter':
      filter(search, requestId, reusablePrevResults);
      break;
    default:
      throw new Error('Please provide an action');
  }
}, false);
