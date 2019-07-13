import { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonLogic extends Component {
  state = {
    disabled: false,
  };

  componentDidMount = () => {
    const { disabled } = this.props;

    this.setState({ disabled });
  };

  pressHandler = () => {
    const { disabled } = this.state;
    const { onPress } = this.props;

    if (!disabled) {
      onPress();
    }
  };

  render() {
    const { render } = this.props;

    return render({ logic: { pressButton: this.pressHandler }, state: this.state });
  }
}

ButtonLogic.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  render: PropTypes.func.isRequired,
};

ButtonLogic.defaultProps = {
  disabled: false,
  onPress: () => {
    console.warn('Button Press'); // eslint-disable-line no-console
  },
};

export default ButtonLogic;
