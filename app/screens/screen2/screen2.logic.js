/* eslint-disable react/no-unused-state */
/* eslint-disable react/forbid-prop-types */
import { Component } from 'react';
import PropTypes from 'prop-types';

class Screen2Logic extends Component {
  state = {};

  submit = () => {
    // eslint-disable-next-line no-console
    console.warn('Submit');
  };

  render() {
    const { currentData, toStyle } = this.props;

    return toStyle({
      state: this.state,
      logic: {
        submit: this.submit,
      },
      data: {
        loading: currentData.loading,
        error: currentData.error,
        data: currentData.data,
      },
    });
  }
}

Screen2Logic.propTypes = {
  toStyle: PropTypes.func.isRequired,
  currentData: PropTypes.object.isRequired,
};

export default Screen2Logic;
