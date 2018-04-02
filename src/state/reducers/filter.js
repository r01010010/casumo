// import ACTNS from '../action_types.js';
import Search from '../../models/Search';

const defaultState = {
  ...(new Search()),
  isFetching: false,
  filteredLibrary: []
}

const filter = (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'FILTER_START': {
      const { title, author, genres } = action.search;
      const { isFetching } = action;

      return Object.assign({}, state, {
        title,
        author,
        genres,
        isFetching
      });
    }
    case 'FILTER_END': {
      const { isFetching, filteredLibrary } = action;

      return Object.assign({}, state, {
        isFetching,
        filteredLibrary
      });
    }
    default:
      return state;
  }
};

export default filter;
