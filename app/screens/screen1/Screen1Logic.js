/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import PropTypes from 'prop-types';

class Screen1Logic extends Component {
  state = {
    count: 0,
    isIncDisabled: false,
    isXDisabled: true,
  };

  increment = () => {
    const { count } = this.state;
    const updatedCount = count + 1;

    this.setState({
      count: updatedCount,
      isXDisabled: false,
    });

    if (updatedCount >= 10) {
      this.setState({ isIncDisabled: true });
    }
  };

  decrement = () => {
    const { count } = this.state;
    const updatedCount = count - 1;

    this.setState({
      count: updatedCount,
      isIncDisabled: false,
    });

    if (updatedCount <= 0) {
      this.setState({
        isIncDisabled: false,
        isXDisabled: true,
      });
    }
  };

  clear = () => {
    return this.setState({
      count: 0,
      isIncDisabled: false,
      isXDisabled: true,
    });
  };

  submit = () => console.warn('Submit');

  render() {
    const { render } = this.props;

    return render({
      logic: {
        increment: this.increment,
        decrement: this.decrement,
        clear: this.clear,
        submit: this.submit,
      },
      state: this.state,
    });
  }
}

Screen1Logic.propTypes = {
  render: PropTypes.func.isRequired,
};

export default Screen1Logic;
