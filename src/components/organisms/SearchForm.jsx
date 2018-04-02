import React, { Component } from 'react';
import { connect } from 'react-redux';
import sty from './SearchForm.css.js';
import Search from '../../models/Search';
import filterActions from '../../state/actions/filter';
import FilterInput from '../molecules/FilterInput';
import GenresMenu from '../molecules/GenresMenu';

class SearchForm extends Component {

  constructor(props){
    super(props);

    this.applyFilter = this.applyFilter.bind(this);
    this.toggleGenre = this.toggleGenre.bind(this);
  }

  toggleGenre(genres) {
    this.applyFilter('genres', genres);
  }

  applyFilter(target, value) {
    const { props } = this;
    const { title, author, genres, dispatch } = props;
    const search = new Search({title, author, genres});
    search[target] = value;

    filterActions.runFilterAction(search, dispatch);
  }

  render () {
    const { title, author } = this.props;
    const { applyFilter, toggleGenre } = this;

    return (
      <div>
        <div style={sty.filters}>
          <div style={ {...sty.filter, ...sty.filterTitle } }>
            <div style={sty.input}>
              <FilterInput
                placeholder="... by Title"
                target="title"
                value={ title }
                style={sty.inputText}
                applyFilter={applyFilter} />
              </div>
          </div>
          <div  style={{...sty.filter, ...sty.filterAuthor }}>
            <div style={sty.input}>
              <FilterInput
                placeholder="... by Author"
                target="author"
                value={ author }
                style={sty.inputText}
                applyFilter={this.applyFilter} />
            </div>
          </div>
        </div>
        <GenresMenu toggleGenre={toggleGenre} />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { title, author, genres } = state.filter;

  return {
    title,
    author,
    genres,
  };
}

export default connect(mapStateToProps)(SearchForm);
