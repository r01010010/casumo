import ACTNS from '../action_types';
import searcher from '../../data/searcher';

function startFilterAction(search) {
  return {
    type: ACTNS.FILTER_START,
    isFetching: true,
    err: null,
    search,
  };
}

function endFilterAction(err, data) {
  const { filteredLibrary } = data;

  return {
    type: ACTNS.FILTER_END,
    err,
    isFetching: false,
    filteredLibrary
  };
}

const runFilterAction = function (search, dispatch) {
  dispatch(startFilterAction(search));
  return searcher.applySearch(search, (err, data) => {
    dispatch(endFilterAction(err, data));
  });
};

export default {
  runFilterAction
};
