/* eslint import/no-webpack-loader-syntax: off */
import WorkerFilter from 'worker-loader!./workers/filter.worker.js';
import {
  isEmptySearch,
  getReusablePrevResults,
  searchInHistory } from '../lib/search.helper';
import Delorean from '../models/Delorean';
import SearchRequest from '../models/SearchRequest';

const ACTIONS = {
  INIT: 'init',
  FILTER: 'filter',
};

let requestNumber = 0;
let library = [];
const delorean = new Delorean();

let filter = createWorkerFilter();

function createWorkerFilter() {
  const newFilter = new WorkerFilter();

  newFilter.addEventListener('message', (e) => {
    const { requestId, filteredLibrary } = e.data;
    delorean.travelTo(requestId).complete(filteredLibrary);
  });

  return newFilter;
}

function applySearch(search, cb) {

  if (isEmptySearch(search)) {
    cb(null, new Response());
  }

  const lastRequest = delorean.getLastRequest();

  if (lastRequest && !lastRequest.finished) {
    filter.terminate();
    filter = createWorkerFilter();
  }

  const history = delorean.toJSON();

  const resultsInHistory = searchInHistory(history, search);

  if (resultsInHistory) {
    return cb(null, resultsInHistory);
  }

  const reusablePrevResults = getReusablePrevResults(history, search);

  requestNumber++;
  delorean.makeHistory(new SearchRequest({requestId: requestNumber, search, cb}));

  sendMessage({
    action: 'filter',
    search,
    requestId: requestNumber,
    reusablePrevResults: reusablePrevResults || library
  });

}

function sendMessage(options) {
  const { search, reusablePrevResults } = options;

  filter.postMessage({
    action: ACTIONS.FILTER,
    search: search,
    requestId: requestNumber,
    reusablePrevResults
  });
}

function init (options) {
  library = options.library;
}

export default {
  init,
  applySearch
}
