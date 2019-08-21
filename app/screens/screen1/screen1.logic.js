/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import PropTypes from 'prop-types';
import updateCountry from 'app/data/client/mutation/updateCountry';

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

  submit = () => {
    this.props.updateCountry({
      variables: {
        code: 'JA',
        name: 'Jibbly',
        continent: 'SkyLand',
        currency: 'Beanz',
        emoji: '😂',
      },
    });
  };

  render() {
    const { currentData, toStyle } = this.props;

    return toStyle({
      state: this.state,
      logic: {
        increment: this.increment,
        decrement: this.decrement,
        clear: this.clear,
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

Screen1Logic.propTypes = {
  toStyle: PropTypes.func.isRequired,
  currentData: PropTypes.func.isRequired,
};

const sendMutationTo = compose(graphql(updateCountry, { name: 'updateCountry' }));

export default sendMutationTo(Screen1Logic);
