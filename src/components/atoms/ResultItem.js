import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import sty from './ResultItem.css.js';

class ResultItem extends Component {

  render () {
    const { title, author, genres, itemHeight, key, search } = this.props;

    // Improve so it wrapps ALL coincidences
    const wrapCoincidence = (str, substr) => {
      const i = str.indexOf(substr);
      const prev = str.substr(0, i);
      let coincidence = str.substr(i, substr.length);
      const rest = str.substr(i+substr.length, str.length);
      if (prev === '') coincidence = _.capitalize(coincidence);

      return <div>
        { _.capitalize(prev) }
        <span style={sty.coincidence}>
        { coincidence }
        </span>
        { rest }
      </div>
    }

    return (
      <div>
        <div
          key={`film_${key}`}
          className="resultItem"
          style={{ ...sty.resultItem, height: itemHeight}}
        >
          <div style={sty.title}>{ wrapCoincidence(title, search.title) }</div>

          <div style={sty.author}>by { author }</div>
          <div>{ Object.keys(genres).map((genre, index) =>
            <img
            key={index}
            src={`/images/svg/${genre}-w.svg`}
            style={sty.genres}
            alt={genre} />)
          }</div>
        </div>
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    search: state.filter
  }
}
export default connect(mapStateToProps)(ResultItem);
