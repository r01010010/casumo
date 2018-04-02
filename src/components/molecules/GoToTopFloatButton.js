import React, { Component } from 'react';
import { connect } from 'react-redux';

class GoToTopFloatButton extends Component {
  constructor() {
    super();

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      // use ref instead
      if (scrollY > 400) {
        document.getElementById('buttonUp').classList.remove('turn-invisible');
        document.getElementById('buttonUp').classList.add('turn-visible');
      } else {
        document.getElementById('buttonUp').classList.remove('turn-visible');
        document.getElementById('buttonUp').classList.add('turn-invisible');
      }
    });
  }

  click() {
    // Set timer to make it smooth?
    window.scrollTo(0, 0);
  }

  render () {
    return (
      <div id="buttonUp" className="button-up" onClick={this.click}>
        <a><img src="/images/svg/arrow-up.svg" height="20" alt="up"/></a>
      </div>
    );
  }
}

const mapStateToProps = (state) => {}

export default connect(mapStateToProps)(GoToTopFloatButton);
