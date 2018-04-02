// @flow
class Response {
  requestId: ?number;
  filteredLibrary: Array<Object>;

  constructor(options: Object) {
    this.requestId = options.requestId || null;
    this.filteredLibrary = options.filteredLibrary || [];
  }
}

export default Response;
