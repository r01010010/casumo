import React, { Component } from 'react';
import { connect } from 'react-redux';
import VirtualList from 'react-virtual-list';
import _ from 'lodash';
import ResultItem from '../atoms/ResultItem';
import sty from './ResultsView.css';

const ResultsListRaw = ({
  virtual,
  itemHeight,
}) => (
  <div style={{...virtual.style, ...sty.listContainer }}>
    {virtual.items.map((film, i) => (
      <ResultItem
        key={i}
        title={film.title}
        author={film.author}
        genres={film.genres} />
    ))}
  </div>
);

const ResultsList = VirtualList()(ResultsListRaw);

class ResultsView extends Component {

  render() {
    const { filteredLibrary } = this.props;

    return(
      <ResultsList
        items={filteredLibrary}
        itemHeight={100}
        itemBuffer={20}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return _.pick(state.filter, 'filteredLibrary');
};

export default connect(mapStateToProps)(ResultsView);
