import React, { Component } from 'react';

class GenreIcon extends Component {

  constructor(options) {
    super(options);
    this.toggleGenre = this.toggleGenre.bind(this);
  }

  toggleGenre(genre){
    this.props.toggleGenre(genre);
  }

  render () {
    const { toggleGenre } = this;
    const { genre, selected } = this.props;
    const classNames = selected ? 'genreButton genreSelected' : ['genreButton'];

    return (
      <a
        className={ classNames }
        onClick={() => toggleGenre(genre)}
      >
        <div>
          <img
            src={`/images/svg/${genre.toLowerCase()}-w.svg`}
            style={{paddingLeft: 3, width: 20, height: 20}}
            alt={`icon ${genre}`} />
        </div>
        <div>{ genre }</div>
      </a>
    );
  }
}

export default GenreIcon;
