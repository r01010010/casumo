import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import allGenres from '../../data/genres';
import sty from './GenresMenu.css.js';
import Genre from '../atoms/form/Genre';

class GenresMenu extends Component {

  constructor(options){
    super(options);

    this.toggleGenre = this.toggleGenre.bind(this);
    this.renderAllGenres = this.renderAllGenres.bind(this);
  }

  toggleGenre(genre) {
    const genres = _.clone(this.props.genres);
    const foundGenre = genres.find(item => genre === item);

    if (foundGenre) {
      _.remove(genres, (item) => {
        return item === genre;
      });
    } else {
      genres.push(genre);
    }

    this.props.toggleGenre(genres);
  }

  renderAllGenres() {
    const { toggleGenre } = this;
    const { genres } = this.props;

    return allGenres.map(genre =>
       <Genre key={genre} genre={genre} selected={_.includes(genres, genre)} toggleGenre={ toggleGenre } />
    );
  }

  render () {
    const { renderAllGenres } = this;

    return (
      <div style={sty.container}>
        { renderAllGenres() }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.filter.genres || []
  }
}

export default connect(mapStateToProps)(GenresMenu);
