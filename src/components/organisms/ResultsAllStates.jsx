import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ResultsView from '../molecules/ResultsView';
import { isEmptySearch } from '../../lib/search.helper';
import sty from './ResultsAllStates.css.js';

class ResultsAllStates extends Component {
  render() {
    const loadResultsByState = () => {
      const { title, author, genres, isFetching, filteredLibrary } = this.props;
      if(isEmptySearch({title, author, genres})){
        return <div style={{...sty.sthing}}>Search something</div>
      } else if (isFetching) {
        return <div className="loader" style={sty.loader}></div>
      } else if (_.isEmpty(filteredLibrary)) {
        return <div style={{...sty.noresults }}>Sorry, no results!</div>
      } else if(!_.isEmpty(filteredLibrary)) {
        return <ResultsView />
      }
    }

    return (
      <div style={{...sty.results}} >
          { loadResultsByState() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.filter
  }
}

export default connect(mapStateToProps)(ResultsAllStates);
