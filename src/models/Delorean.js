// @flow
import Request from './SearchRequest';

class Delorean {
  history: Object;

  constructor() {
    this.history = {};
  }

  makeHistory(request: Request) {
    this.history[request.requestId] = request;
  }

  isThereFluzo(requestId: Number) {
    return (this.history[requestId]);
  }

  travelTo(requestId: Number) {
    return this.history[requestId];
  }

  getLastRequest() {
    return this.history[Object.keys(this.history).pop()];
  }

  toJSON() {
    return this.history;
  }
}

export default Delorean;
