import React, { Component } from 'react';
import sty from './Presentation.css.js';

class Presentation extends Component {
  render () {
    return (
      <div>
        <div style={sty.titleContainer}>
          <div style={sty.title}>
            <img
              src="/images/svg/clapperboard3.svg"
              style={sty.logo}
              alt="logo"
            />
            Videoclub
          </div>
          <div style={sty.by}>by @R01010010</div>
        </div>

        <div style={sty.subtitleContainer}>
          <strong>Search</strong> & <strong>Order</strong>
          &nbsp;by <span style={ sty.underline }>title</span>,
          &nbsp;<span style={ sty.underline }>genre</span> and
          &nbsp;<span style={ sty.underline }>author</span>.
        </div>
      </div>
    );
  }
}

export default Presentation;
