import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/base.scss';

class Button extends Component {
  static propTypes = {
    classes: PropTypes.array,
    text: PropTypes.string,
    onClick: PropTypes.function
  };

  static defaultProps = {
    classes: [],
    text: 'Press Here',
    onClick: () => {}
  }

  render() {
    const { classes, text, enabled } = this.props;
    const mainClass = enabled ? 'button-enabled' : 'button-disabled';
    return (
      <button
        className={[mainClass, ...classes]}
        onClick={this.props.onClick}
      >
        { text }
      </button>
    );
  }
}

export default Button;
