import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/base.scss';

class Icon extends Component {
  static propTypes = {
    classes: PropTypes.array,
    path: PropTypes.string
  };

  static defaultProps = {
    classes: [],
    path: ''
  }

  render() {
    const { classes, path } = this.props;
    return (
      <img className={['job-box-icon', ...classes]} src={path} alt="" />
    );
  }
}

export default Icon;
