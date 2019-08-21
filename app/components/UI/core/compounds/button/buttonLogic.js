import { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonLogic extends Component {
  pressHandler = () => {
    const { onPress, disabled } = this.props;

    if (!disabled) {
      onPress();
    }
  };

  render() {
    const { render } = this.props;

    return render({ logic: { pressButton: this.pressHandler } });
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
