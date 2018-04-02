// @flow
import Search from './Search';
import Response from './Response';

class SearchRequest {
  requestId: Number;
  search: Search;
  finished: boolean;
  filteredLibrary: Array<Object>;
  cb: Function;

  constructor(options: Object = {}) {
    this.requestId = options.requestId;
    this.search = options.search;
    this.finished = false;
    this.filteredLibrary = [];
    this.cb = options.cb || (() => {});
  }

  complete(filteredLibrary: Array<Object>){
    this.finished = true;
    this.filteredLibrary = filteredLibrary;
    this.cb(null, new Response({
      requestId: this.requestId,
      filteredLibrary: this.filteredLibrary
    }));
  }
}

export default SearchRequest;
