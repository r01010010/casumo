import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../atoms/form/TextField';

const { setTimeout } = window;


class FilterInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    target: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    placeholder: '',
    target: PropTypes.string,
    value: '',
    style: {}
  }

  constructor(options) {
    super(options);
    this.state = {
      timeout: null,
    };

    this.onChange = this.onChange.bind(this);
    this.filterBy = this.filterBy.bind(this);
  }

  onChange(value) {
    const self = this;

    const newTimeout = () => setTimeout(() => {
      myClearTimeout();
      self.filterBy(value);
    }, 0);

    const myClearTimeout = () => {
      clearTimeout(timeout);
      self.setState({
        timeout: null
      });
    };

    const startTimeout = () => {
      const timeout = newTimeout();
      self.setState({
        timeout
      });
    };

    const resetTimeout = () => {
      myClearTimeout();
      startTimeout();
    };

    const { timeout } = self.state;

    if (!timeout) {
      startTimeout();
    } else {
      resetTimeout();
    }
  }

  filterBy(value) {
    const { target } = this.props;
    this.props.applyFilter(target, value);
  }

  render() {
    const {
      placeholder,
      target,
      value,
      style
    } = this.props;

    return (
      <div>
        <TextField
          placeholder={placeholder}
          target={target}
          onChange={this.onChange}
          value={value}
          style={style}
        />
      </div>
    );
  }
}

export default FilterInput;
