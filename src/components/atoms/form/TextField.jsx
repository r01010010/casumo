import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {
  static propTypes = {
    classes: PropTypes.array,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    classes: [],
    placeholder: '',
    value: '',
    style: {}
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    this.props.onChange(value);
  }

  render() {
    const { classes, placeholder, style } = this.props;
    return (
      <input
        className={['input', ...classes]}
        placeholder={placeholder}
        onChange={this.onChange}
        style={style}
      />
    );
  }
}

export default TextField;
